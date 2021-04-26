import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model.product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {
  showTable:Boolean = false;
  products?:Array<Product>
  constructor(public router:Router, public proService:ProductService) { }

  ngOnInit(): void {
  }

  open(rout:any) {
    this.router.navigate(["admin-employee"]);
  }

  toggleTable(){
    this.showTable = !this.showTable;
    if(this.showTable){
      this.proService.retrieveAllProductDetails().subscribe(result=>this.products=result);
    }
  }
}
