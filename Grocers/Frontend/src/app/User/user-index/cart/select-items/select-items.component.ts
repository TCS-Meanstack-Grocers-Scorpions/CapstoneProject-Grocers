import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model.product';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.css']
})
export class SelectItemsComponent implements OnInit {
  products: Array<Product> = []
  cartNum: number = 0; //get from cart later
  constructor(public getItemsService: UsersService) { }

  ngOnInit(): void {
    this.getItemsService.selectAllitems().subscribe(result => {
      this.products = result;
    })
    this.getItemsService.viewCartitems().subscribe(result=>{
      console.log(result.length);
      for(let i=0;i<result.length;i++){
 this.cartNum=this.cartNum+result[i].quantity
      }
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
    if (current > 0) {
      current--;
    }
    num.value = current.toString()
  }

  maxobj(val: any, i: any) {
    let num = (<HTMLInputElement>document.getElementById(val));
    let current = parseInt(num.value);
    if (this.products[i].quantity < current) {
      num.value = this.products[i].quantity.toString();
    }
  }
  addCart(val: any, i: any) {
    let num = (<HTMLInputElement>document.getElementById(val));
     this.cartNum = this.cartNum + parseInt(num.value);
    let newCartitem = { "_id": this.products[i]._id, name: this.products[i].name, price: this.products[i].price, "quantity": num.value };
    console.log(newCartitem);
    let temp=this.getItemsService.AddtoCart(newCartitem)
    console.log(temp);
    num.value = "0";
    let output = document.getElementById("msg" + i);
    if (output) output.innerHTML = "Added"
    setTimeout(function () { if (output) output.style.visibility = "hidden" }, 1000);
  }
}
