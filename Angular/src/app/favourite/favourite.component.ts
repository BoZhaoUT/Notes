import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // view encaupsulation.emulated make all styles scoped
  encapsulation: ViewEncapsulation.Emulated
})

export class FavouriteComponent {
  // @Input means apply Input decorator on this variable
  // 'is-favourite' is an alias
  @Input('is-favourite') isFavourite: boolean = false;
  // 'change' is an alias of event emitter
  // both Input and Output aliasing are optional
  // they keep API more stable
  @Output('change') change = new EventEmitter();

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue: this.isFavourite });
  }

}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}