import { Component, OnInit } from '@angular/core';
import { cartProduct } from 'src/app/model.cart';
import { Product } from 'src/app/model.product';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  cartProducts: Array<cartProduct> = []
  products: Array<Product> = []
  userId:string="4"; //get from local store later
  constructor(public getItemsService: UsersService) { }

  ngOnInit(): void {
    this.getItemsService.viewCartitems(this.userId).subscribe(result => {
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
    console.log(this.products[i]._id);
    let updatedCart = { "_id": this.products[i]._id, "quantity": updateQ ,"userId":this.userId}
    this.getItemsService.updateCart(updatedCart);
    setTimeout(function () { location.reload() }, 500);
  }
  deleteCartItem(i: any) {
    let deletedItem ={userId:this.userId,pid:this.cartProducts[i].pid};
    let delete2=JSON.stringify(deletedItem);
    this.getItemsService.deleteItem(delete2);
    let item = document.getElementById("item" + i);
    if (item) item.style.display = "none";
  }

}
