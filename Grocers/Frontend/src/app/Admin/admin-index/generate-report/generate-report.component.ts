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


  products?: Array<Purchased>;
  customer?: Array<Purchased>;
  daily?: Array<Purchased>;
  weekly?: Array<Purchased>;
  monthly?: Array<Purchased>;
  constructor(public router: Router, public proService: ProductService, public purchased: OrderService) { }


  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['admin-index']);
  }
  getProduct(formRef: any): void {
    this.purchased.getProductpurchased(formRef.productName).subscribe(result => console.log(result));
  }
  getCustomer(formRef: any): void {
    console.log(typeof(formRef.userID));
    this.purchased.getUserpurchased(formRef.userID).subscribe(result => console.log(result));
  }
  getDaily(formRef: any): void {
    this.purchased.getDatepurchased(formRef.StartDate).subscribe(result => console.log(result));
  }
  getWeekly(formRef: any): void {
    this.purchased.getDatesPurchased(formRef.StartDate, formRef.EndDate).subscribe(result => console.log(result));
  }
  getMonthly(formRef: any): void {
    this.purchased.getDatesPurchased(formRef.StartDate, formRef.EndDate).subscribe(result => console.log(result));
  }
}
