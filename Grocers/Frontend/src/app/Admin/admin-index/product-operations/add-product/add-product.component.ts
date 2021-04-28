  
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  resultMsg?:string;
  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  storeProduct(productRef:any){
    console.log(productRef)
    this.proService.storeProductDetails(productRef)
    this.resultMsg = "Product Added"
    //displays the result message for 10 seconds and then 'removes' it
    setTimeout(()=> this.resultMsg = '',10000);
  }
}