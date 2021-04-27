import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model.product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  products?: Array<Product>;
  constructor(public proService: ProductService) { }
  retrieve?: any = sessionStorage.getItem('curUserId');
  // tslint:disable-next-line:semicolon
  // tslint:disable-next-line:typedef

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.removeItem("curUserId");
  }
  toggleTable(): void{
      this.proService.retrieveAllProductDetails().subscribe(result => this.products = result);
  }
}
