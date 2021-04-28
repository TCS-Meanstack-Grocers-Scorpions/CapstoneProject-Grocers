import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model.product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {


  products?: Array<Product>;

  constructor(public router: Router, public proService: ProductService) { }


  ngOnInit(): void {
  }

  back() {
    this.router.navigate(["admin-index"]);
  }
  getProduct(formRef: any): void {
    this.proService.retrieveAllProductDetails().subscribe(result => this.products = result);
  }

}
