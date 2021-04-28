import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  requests?: Array<Request>;
  constructor(public router: Router, public reqService: RequestService) { }

  ngOnInit(): void {
    this.reqService.retrieveAllRequests().subscribe(result => {
      this.requests = result;
      // console.log(result);
    });
  }

  back(): void {
    this.router.navigate(['admin-index']);
  }
}
