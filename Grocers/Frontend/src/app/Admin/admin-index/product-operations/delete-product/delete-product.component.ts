import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  resultMsg?:string;
  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
  }

  deleteById(id:any){
    this.productSer.deleteProductById(id).subscribe((result:string)=>{
      this.resultMsg = result;
    })
  }
}
