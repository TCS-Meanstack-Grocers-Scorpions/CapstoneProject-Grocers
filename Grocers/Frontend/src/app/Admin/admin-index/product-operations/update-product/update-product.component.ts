import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  resultMsg?: string;
  constructor(public productSer: ProductService) { }

  ngOnInit(): void {
  }

  updateProduct(productRef: any): any{
    this.productSer.updateProductById(productRef).subscribe((result: string) => {
      this.resultMsg = result;
    });
  }
}
