import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model.product';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  cartProducts: Array<Product> = []
  products: Array<Product> = []
  constructor(public getItemsService: UsersService) { }

  ngOnInit(): void {
    this.getItemsService.viewCartitems().subscribe(result => {
      this.cartProducts = result;

    })
    this.getItemsService.selectAllitems().subscribe(result => {
      this.products = result;
    })
  }

  increment(id: any, val: any, i: any) {
    let num = (<HTMLInputElement>document.getElementById(val));
    var current = parseInt(num.value);
    current++;
    if (current > this.products[i].quantity) {

    }

    else {
      num.value = current.toString()
    }
  }

  decriment(id: any, val: any) {
    let dec = document.getElementById(id);
    let num = (<HTMLInputElement>document.getElementById(val));
    var current = parseInt(num.value);
    if (current > 1) {
      current--;
    }
    num.value = current.toString()
  }

  maxobj(val: any, i: any) {
    let num = (<HTMLInputElement>document.getElementById(val));
    let current = parseInt(num.value);
    if (this.cartProducts[i].quantity < current) {
      num.value = this.cartProducts[i].quantity.toString();
    }
  }
  showUpdate(i: any) {
    let updateinfo = document.getElementById("updateinfo" + i);
    if (updateinfo) updateinfo.style.visibility = "visible";
  }
  confirmUpdate(i: any) {
    let updateinfo = document.getElementById("updateinfo" + i);
    if (updateinfo) updateinfo.style.visibility = "hidden";
    let updateQ = (<HTMLInputElement>document.getElementById("nums" + i)).value;
    let updatedCart = { "_id": this.products[i]._id, "quantity": updateQ }
    this.getItemsService.updateCart(updatedCart);
    setTimeout(function () { location.reload() }, 500);
  }
  deleteCartItem(i: any) {
    let deletedItem = this.cartProducts[i]._id;
    console.log(deletedItem);
    this.getItemsService.deleteItem(deletedItem);
    let item=document.getElementById("item"+i);
    if(item) item.style.display="none";
  }
}
