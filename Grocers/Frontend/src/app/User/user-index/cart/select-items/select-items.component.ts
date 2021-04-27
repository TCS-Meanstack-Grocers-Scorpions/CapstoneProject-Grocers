import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model.product';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.css']
})
export class SelectItemsComponent implements OnInit {
  products: Array<Product> = [];
  cartNum = 0; // get from cart later
  UserId = '4';
  constructor(public getItemsService: UsersService) { }

  ngOnInit(): void {
    this.getItemsService.selectAllitems().subscribe(result => {
      this.products = result;
    });
    this.getItemsService.viewCartitems(this.UserId).subscribe(result => {
      console.log(result.length);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < result.length; i++) {
        this.cartNum = this.cartNum + result[i].quantity;
      }
    });
  }

  increment(id: any, val: any, i: any): void {
    const num = (document.getElementById(val) as HTMLInputElement);
    // tslint:disable-next-line:radix
    let current = parseInt(num.value);
    current++;
    if (current > this.products[i].quantity) {

    }

    else {
      num.value = current.toString();
    }
  }

  decriment(id: any, val: any): void {
    const dec = document.getElementById(id);
    const num = (document.getElementById(val) as HTMLInputElement);
    // tslint:disable-next-line:radix
    let current = parseInt(num.value);
    if (current > 0) {
      current--;
    }
    num.value = current.toString();
  }

  maxobj(val: any, i: any): void {
    const num = (document.getElementById(val) as HTMLInputElement);
    // tslint:disable-next-line:radix
    const current = parseInt(num.value);
    if (this.products[i].quantity < current) {
      num.value = this.products[i].quantity.toString();
    }
  }
  addCart(val: any, i: any): void {
    const num = (document.getElementById(val) as HTMLInputElement);
    // tslint:disable-next-line:radix
    this.cartNum = this.cartNum + parseInt(num.value);
    const newCartitem = { _id: this.products[i]._id,
      name: this.products[i].name, price: this.products[i].price,
      quantity: num.value, userId: this.UserId };
    console.log(newCartitem);
    this.getItemsService.AddtoCart(newCartitem);
    num.value = '0';
    const output = document.getElementById('msg' + i);
    if (output) { output.innerHTML = 'Added'; }
    // tslint:disable-next-line:typedef
    setTimeout(function() { if (output) { output.style.visibility = 'hidden'; } }, 1000);
  }
}
