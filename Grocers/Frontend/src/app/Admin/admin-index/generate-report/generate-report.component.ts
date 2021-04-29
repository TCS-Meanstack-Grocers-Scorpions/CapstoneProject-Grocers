import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchased } from 'src/app/model.purchase';
import { OrderService } from 'src/app/order.service';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  tableHeader = '';
  products?: Array<Purchased>;
  // customer?: Array<Purchased>;
  // daily?: Array<Purchased>;
  // weekly?: Array<Purchased>;
  // monthly?: Array<Purchased>;
  constructor(public router: Router, public proService: ProductService, public purchased: OrderService) { }


  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['admin-index']);
  }
  getProduct(formRef: any): void {

    this.purchased.getProductpurchased(formRef.productName).subscribe(result => console.log(result));
    this.tableHeader = 'Particular Product'
  }
  getCustomer(formRef: any): void {
    this.purchased.getUserpurchased(formRef.userID).subscribe(result => console.log(result));
    this.tableHeader = 'Particular Customer'
  }
  getDaily(formRef: any): void {
    console.log(formRef);
    this.purchased.getDatepurchased(formRef.StartDate).subscribe(result => console.log(result));
    this.tableHeader = 'Day Report'
  }
  getWeekly(formRef: any): void {
    this.purchased.getDatesPurchased(formRef.StartDate, formRef.EndDate).subscribe(result => this.products = result);
    this.tableHeader = 'Week Report';
  }
  getMonthly(formRef: any): void {
    this.purchased.getDatesPurchased(formRef.StartDate, formRef.EndDate).subscribe(result => this.products = result);
    this.tableHeader = 'Month Report';
  }
}
