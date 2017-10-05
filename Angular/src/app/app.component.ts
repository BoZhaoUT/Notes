import { FavouriteChangedEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  courses = [1];

  post = {
    title: 'a title',
    isFavourite: true,
    assignee: null
  }



  // data type helps compile checking and IntelliSense
  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log(eventArgs)
  }
}
