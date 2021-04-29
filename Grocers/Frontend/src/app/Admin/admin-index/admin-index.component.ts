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
  // tslint:disable-next-line:ban-types
  showTable: Boolean = false;
  products?: Array<Product>;
  constructor(public proService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable(): void {
    this.proService.retrieveAllProductDetails().subscribe(result => {
      if (this.products?.length !== result.length) {
        this.products = result;
        // console.log("updated");
      }
    });
  }
  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
