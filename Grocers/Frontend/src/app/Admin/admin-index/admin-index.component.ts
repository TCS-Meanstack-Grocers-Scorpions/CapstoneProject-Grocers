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
  constructor(public proService: ProductService, public router: Router) { }

  ngOnInit(): void {
    
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
