import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { CoursesService } from './../courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { BadInput } from 'app/common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  posts: any[];



  constructor(private service: PostService) {
    // note: do not initialize http reqeusts here
    // do it in ngOnInit()
  }

  // create operation
  createPost(input: HTMLInputElement) {
    const post = {
      title: input.value
    };
    // assume create will succeed in order to give
    // users optimistic experience
    // i.e. avoid being pessimistic(hopeless)
    // the line below will addHead()
    this.posts.splice(0, 0, post)

    input.value = '';

    this.service.create(post)
      // this.service.createPost() will return an Observable object
      // use .subscribe() to get the result
      // .subscribe takes to callback functions
      // first: response
      // second: error
      .subscribe(
        newPost => {
          // cannot use post.id = response.json().id here
          // because post.id is not defined in post
          post['id'] = newPost.id;
        },
        (error: AppError) => {
          // remove the added item
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // in case there is a form named this.form
            // this.form.setErrors(error.originalError)
          }
          else
            // if not throwing this error
            // then this error will be handled here and
            // this error will not be handled by the global error handler
            throw error;
        })
  }

  // update operation
  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  // delete operation
  deletePost(post) {
    const index = this.posts.indexOf(post);
    // remove an item at index
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null,
        // must use a paif of parathesis when specifying the data type of a variable
        // the data type of this callback functions is Response
        (error: AppError) => {
          // rollback change
          this.posts.splice(index, 0, post);
          // instanceof is a built-in operator
          // similar to isinstance(error, NotFoundError) in Python
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else
            throw error;
        });
  }

  // lifecycle hooks
  // OnInit -> OnChanges -> DoCheck -> AfterContentInit
  ngOnInit() {
    // sample read operation, get request in service
    this.service.getAll()
      .subscribe(
        posts => this.posts = posts
        // equivalent to the line above
        // posts => {
        //   this.posts = posts;
        // }

        // since the error handler below is removed
        // then any error will propagate and eventually
        // get handled by a global error handler
        // ,
        // error => {
        //   alert('An unexpected error occured.');
        //   console.log(error);
        // }
      );
  }
}
