import { Component, OnInit } from '@angular/core';
import { cartProduct } from 'src/app/model.cart';
import { Product } from 'src/app/model.product';
import { Purchased } from 'src/app/model.purchase';
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
  total:number=0;
  constructor(public getItemsService: UsersService) { }

  ngOnInit(): void {
    this.getItemsService.viewCartitems(this.userId).subscribe(result => {
      this.cartProducts = result;
      //console.log("this is" +result[0].imgId)
      for(let i=0;i<result.length;i++){
this.total=this.total+(result[i].price*result[i].quantity)
      }
      console.log(this.cartProducts)
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
    let updatedCart = { "pid": this.cartProducts[i].pid, "quantity": updateQ ,"userId":this.userId}
    this.getItemsService.updateCart(updatedCart);
    setTimeout(function () { location.reload() }, 500);
  }

  deleteCartItem(i: any) {
    let deletedItem ={userId:this.userId,pid:this.cartProducts[i].pid};
    let delete2=JSON.stringify(deletedItem);
    this.getItemsService.deleteItem(delete2);
    let item = document.getElementById("item" + i);
    if (item) item.style.display = "none";
    setTimeout(function () { location.reload() }, 500);
  }

  Purchased(){
   let cartarray=[];
   for(let j=0; j<this.cartProducts.length;j++){
    let date= new Date()
    let storedDate=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
    let obj={pid:this.cartProducts[j].pid,name:this.cartProducts[j].name ,quantity:this.cartProducts[j].quantity,price:this.cartProducts[j].price,datePurchased:storedDate,orderStatus:"Processing",orderTotal:this.total}
    cartarray.push(obj);
    let deletedItem ={userId:this.userId,pid:this.cartProducts[j].pid};
    let delete2=JSON.stringify(deletedItem);
    this.getItemsService.deleteItem(delete2);
   }
 
   let purchased=new Purchased (this.userId,cartarray);
   this.getItemsService.Purchaseitems(purchased);
   
  }
}
