import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;


  constructor(private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    // adding a PLUS + symbol will change the data type to number
    this.year = +params.get('year');
    this.month = +params.get('month');
  }

  viewAll() {
    this.router.navigate(['/']);
  }

}
