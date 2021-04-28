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
  resultMsg?: string;
  requests?: Array<Request>;
  constructor(public router: Router, public reqService: RequestService) { }

  ngOnInit(): void {
    this.reqService.retrieveAllRequests().subscribe(result => {
      this.requests = result;
    });
    // checks every 30 seconds for new requests and updates the table.
    setInterval(() => {
      this.updateTable();
      }, 30000);
  }
  updateTable(): any {
    this.reqService.retrieveAllRequests().subscribe(result => {
      if (this.requests?.length !== result.length) {
        this.requests = result;
        // console.log("updated");
      }
    });
  }

  deleteById(id: any): any{
    this.reqService.deleteRequestById(id).subscribe((result: string) => {
      this.resultMsg = result;
      this.updateTable();
    });
    // displays the result message for 10 seconds and then 'removes' it
    setTimeout(() => this.resultMsg = '', 10000);
  }
}
