import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model.product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  resultMsg?:string;
  products?: Array<Product>;
  constructor(public router: Router, public proService:ProductService) { }

  ngOnInit(): void {
    this.updateTable()
  }

  storeProduct(productRef:any){
    console.log(productRef)
    this.proService.storeProductDetails(productRef)
    this.resultMsg = "Product Added"
    //displays the result message for 10 seconds and then 'removes' it
    setTimeout(()=> this.resultMsg = '',10000);
  }
  updateTable(): void {
    this.proService.retrieveAllProductDetails().subscribe(result => {
      if (this.products?.length !== result.length) {
        this.products = result;
      }
    });
  }
  back(): void {
    this.router.navigate(['admin-index']);
  }
}
