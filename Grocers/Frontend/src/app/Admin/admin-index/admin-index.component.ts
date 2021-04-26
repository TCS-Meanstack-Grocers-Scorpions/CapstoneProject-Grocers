import { Component, OnInit } from '@angular/core';
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
  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  toggleTable(){
    this.showTable = !this.showTable;
    if(this.showTable){
      this.proService.retrieveAllProductDetails().subscribe(result=>this.products=result);
    }
  }
}
