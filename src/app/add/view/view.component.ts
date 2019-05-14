import { Component, OnInit, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import { Subscription } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  private headers;
  views: any;
  private subscriber: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.headers = new Headers();
    this.headers.set('Content-Type', 'application/json');

  }
  ngOnInit() {
    this.subscriber = this.route.params.subscribe(params => {
      this.http.get('/api/index.php/Restaurant/get_posts').subscribe((res:{}) => {
       this.views = res;
      });
    });

  }

}
