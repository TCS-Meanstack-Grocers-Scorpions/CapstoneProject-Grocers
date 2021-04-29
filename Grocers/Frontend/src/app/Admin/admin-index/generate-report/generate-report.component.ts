import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from 'src/app/model.sale';
import { OrderService } from 'src/app/order.service';
import { ProductService } from 'src/app/product.service';
import { SalesService } from 'src/app/sales.service';


@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  tableHeader = '';
  products?: Array<Sale>;
  constructor(public router: Router, public saleService:SalesService) { }


  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['admin-index']);
  }
  getProduct(formRef: any): void {
    this.saleService.getProductpurchased(formRef.productName).subscribe(result => console.log(result));
    this.tableHeader = 'Particular Product';
  }
  getCustomer(formRef: any): void {
    this.saleService.getUserpurchased(formRef.userID).subscribe(result => console.log(result));
    this.tableHeader = 'Particular Customer';
  }
  getDaily(formRef: any): void {
    console.log(formRef);
    this.saleService.getDatepurchased(formRef.StartDate).subscribe(result => console.log(result));
    this.tableHeader = 'Day Report';
  }
  getWeekly(formRef: any): void {
    this.saleService.getDatesPurchased(formRef.StartDate, formRef.EndDate).subscribe(result => console.log(result));
    this.tableHeader = 'Week Report';
  }
  getMonthly(formRef: any): void {
    this.saleService.getDatesPurchased(formRef.StartDate, formRef.EndDate).subscribe(result => console.log(result));
    this.tableHeader = 'Month Report';
  }
}
