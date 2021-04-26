import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(["admin-index"]);
  }

}
