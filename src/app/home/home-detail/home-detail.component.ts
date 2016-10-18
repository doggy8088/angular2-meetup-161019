import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  id:any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
  }

}
