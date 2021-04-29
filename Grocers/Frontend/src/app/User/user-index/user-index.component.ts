import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model.product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserIndexComponent implements OnInit {

  products?: Array<Product>;
  constructor(public proService: ProductService, public router: Router) { }
  retrieve?: any = sessionStorage.getItem('curUserId');

  ngOnInit(): void {
  }
  logout(): void{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('curUserId');
    this.router.navigate(['shopper']);
  }
  toggleTable(): void{
      this.proService.retrieveAllProductDetails().subscribe(result => this.products = result);
  }

}
