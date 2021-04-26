import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(["admin-index"]);
  }
}
