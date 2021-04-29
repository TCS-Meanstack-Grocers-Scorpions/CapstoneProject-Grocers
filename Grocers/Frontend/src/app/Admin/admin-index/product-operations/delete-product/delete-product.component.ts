import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model.product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
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

  deleteById(id:any){
    this.proService.deleteProductById(id).subscribe((result:string)=>{
      this.resultMsg = result;
    })
    //displays the result message for 10 seconds and then 'removes' it
    setTimeout(()=> this.resultMsg = '',10000);
  }
}