import { LikeService } from './like.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('is-liked') isLiked: boolean = false;
  @Input('likes-count') likesCount: number = this._service.getLikesCount();

  constructor(private _service: LikeService) { }

  ngOnInit() {
  }

  onClick() {
    this.likesCount += (this.isLiked) ? -1 : 1
    this.isLiked = !this.isLiked;
  }

}
