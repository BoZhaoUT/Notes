import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
// in order to subscribe to 2 observables
// make a new observable and subscribe to it
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest'; // this is a factory method

import 'rxjs/add/operator/switchMap'



@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute
  ) { }

  // avoid of using nested observables
  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .switchMap(combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');

        return this.service.getAll();
      })
        .subscribe(followers => this.followers = followers);


    // combine two observables
    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    //   .subscribe(combined => {
    //     let id = combined[0].get('id');
    //     let page = combined[1].get('page');

    //     this.service.getAll()
    //       .subscribe(followers => this.followers = followers);
    //   })



  }

}
