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
  cartNum:number=0; //get from cart later
  constructor(public getItemsService: UsersService) { }

  ngOnInit(): void {
    this.getItemsService.selectAllitems().subscribe(result => {
      //console.log(result);
      this.products = result;
      console.log("this is products");

    })
  }

  increment(id: any, val: any, i: any) {
    let inc = document.getElementById(id);
    let num = (<HTMLInputElement>document.getElementById(val));
    var current = parseInt(num.value);
    current++;
    if (current > this.products[i].quantity) {

    }

    else {
      num.value = current.toString()
    }
    //console.log("this is id "+ id);
    //console.log(current);
  }

  decriment(id: any, val: any) {
    let dec = document.getElementById(id);
    let num = (<HTMLInputElement>document.getElementById(val));
    var current = parseInt(num.value);
    if (current > 0) {
      current--;
    }
    num.value = current.toString()
    //console.log("this is id "+ id);
    // console.log(current);
  }

  maxobj(val: any, i: any) {
    let num = (<HTMLInputElement>document.getElementById(val));
    let current = parseInt(num.value);
    if (this.products[i].quantity < current) {
      num.value = this.products[i].quantity.toString();
    }
  }
  addCart(val:any,i:any)
  {
    let num = (<HTMLInputElement>document.getElementById(val)).value;
    this.cartNum=this.cartNum+parseInt(num)
    let newCartitem={"_id":this.products[i]._id,"quantity":num};
    console.log(newCartitem);
    this.getItemsService.AddtoCart(newCartitem)
  }
}
