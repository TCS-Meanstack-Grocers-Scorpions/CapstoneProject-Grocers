import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userId: any = sessionStorage.getItem('curUserId');
  constructor(public router:Router) { }

  ngOnInit(): void {
    
  }
  logout(): void{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('curUserId');
    this.router.navigate(['shopper']);
  }
  complete(): void {
    this.router.navigate(['user-index']);
  }

}
