import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model.product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  resultMsg?:string;
  products?: Array<Product>;
  constructor(public router: Router, public proService:ProductService) { }

  ngOnInit(): void {
    this.updateTable()
  }
  updateTable(): void {
    this.proService.retrieveAllProductDetails().subscribe(result => {
        this.products = result;
    });
  }
  
  back(): void {
    this.router.navigate(['admin-index']);
  }

  updateProduct(productRef:any){
    this.proService.updateProductById(productRef).subscribe((result:string)=>{
      this.resultMsg=result
    })
    //displays the result message for 10 seconds and then 'removes' it
    setTimeout(()=> this.resultMsg = '',10000);
  }
}