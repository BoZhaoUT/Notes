import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // first solution
    this.route.paramMap
      .subscribe(params => {
        // 'id' is the name of a key defined in router in app.module
        const id = params.get('id');
        console.log(id);
      })

    // alternative solution
    // let id = this.route.snapshot.paramMap.get('id');

    // how to choose:
    // first solution will not destroy this component when params.get('id') changes
    // second solution will destroy and re-initialize this component when params.get('id') changes
    // use the first one if this component is not going to be destroyed when
    // params.get('id') changes. It consumes less resources.
  }

  // programmatic navigation
  // navigation with additional parameters
  // e.g. redirect a user back to previous component after clickling submit
  submit() {
    this.router.navigate(['followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
