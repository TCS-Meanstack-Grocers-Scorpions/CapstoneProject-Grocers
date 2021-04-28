import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model.product';
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
    this.purchased.getProductpurchased(formRef.productName).subscribe(result => this.products = result);
  }
  getCustomer(formRef: any): void {
    this.purchased.getUserpurchased(formRef.userID).subscribe(result => this.customer = result);
  }
  getDaily(formRef: any): void {
    this.purchased.getDatepurchased(formRef.StartDate).subscribe(result => this.daily = result);
  }
  getWeekly(formRef: any): void {
    this.purchased.getDatepurchased(formRef.StartDate).subscribe(result => this.weekly = result);
  }
  getMonthly(formRef: any): void {
    this.purchased.getDatepurchased(formRef.StartDate).subscribe(result => this.monthly = result);
  }
}
