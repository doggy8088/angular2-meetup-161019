import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute) { }

  id: string;

  subs: Subscription;
  
  ngOnInit() {
    this.subs = this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
