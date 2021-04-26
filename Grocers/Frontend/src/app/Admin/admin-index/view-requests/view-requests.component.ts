import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model.request';
import { RequestService } from 'src/app/request.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  requests?:Array<Request>
  constructor(public router:Router, public reqService:RequestService) { }

  ngOnInit(): void {
    this.reqService.retrieveAllRequests().subscribe(result=> {
      this.requests=result;
      // console.log(result);
    });
  }

  back() {
    this.router.navigate(["admin-index"]);
  }
}
