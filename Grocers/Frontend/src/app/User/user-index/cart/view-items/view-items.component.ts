import { Component, OnInit } from '@angular/core';
import { cartProduct } from 'src/app/model.cart';
import { Items } from 'src/app/model.items';
import { Product } from 'src/app/model.product';
import { Purchased } from 'src/app/model.purchase';
import { SalesService } from 'src/app/sales.service';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  [x: string]: any;
  cartProducts: Array<cartProduct> = [];
  products: Array<Product> = [];
  userId: any = sessionStorage.getItem('curUserId'); // get from local store later
  total = 0;
  currentFunds=0
  constructor(public getItemsService: UsersService,public saleServie:SalesService) { }

  ngOnInit(): void {
    this.getItemsService.viewCartitems(this.userId).subscribe(result => {
      this.cartProducts = result;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < result.length; i++){
        this.total = this.total + (result[i].price * result[i].quantity);
      }
    });
    this.getItemsService.selectAllitems().subscribe(result => {
      this.products = result;
    });
    this.getItemsService.retrieveUserById(this.userId).subscribe(result => {
      this.currentFunds = result[0].funds;
    })
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
    if (current > 1) {
      current--;
    }
    num.value = current.toString();
  }

  maxobj(val: any, i: any): void {
    const num = (document.getElementById(val) as HTMLInputElement);
    // tslint:disable-next-line:radix
    const current = parseInt(num.value);
    if (this.cartProducts[i].quantity < current) {
      num.value = this.cartProducts[i].quantity.toString();
    }
  }

  showUpdate(i: any): void {
    const updateinfo = document.getElementById('updateinfo' + i);
    if (updateinfo) { updateinfo.style.visibility = 'visible'; }
  }

  confirmUpdate(i: any): void {
    const updateinfo = document.getElementById('updateinfo' + i);
    if (updateinfo) { updateinfo.style.visibility = 'hidden'; }
    const updateQ = (document.getElementById('nums' + i) as HTMLInputElement).value;
    const updatedCart = { pid: this.cartProducts[i].pid, quantity: updateQ , userId: this.userId};
    this.getItemsService.updateCart(updatedCart);
     setTimeout(function() { location.reload(); }, 500);
  }

  deleteCartItem(i: any): void {
    const deletedItem = {userId: this.userId, pid: this.cartProducts[i].pid};
    const delete2 = JSON.stringify(deletedItem);
    this.getItemsService.deleteItem(delete2);
    const item = document.getElementById('item' + i);
    if (item) { item.style.display = 'none'; }
     setTimeout(function() { location.reload(); }, 500);
  }

  Purchased(): void{
   const cartarray = [];
   if(this.currentFunds>this.total){
   for (let j = 0; j < this.cartProducts.length; j++){
    const date = new Date();
    let storedDate=date.getFullYear()+ '-'+(date.getMonth() + 1)+ '-'+date.getDate()
    const obj = new Items(this.cartProducts[j].pid, this.cartProducts[j].name , this.cartProducts[j].quantity, this.cartProducts[j].price, storedDate, 'Processing');
    let obj2={uid:this.userId,pid:this.cartProducts[j].pid,name:this.cartProducts[j].name, price:this.cartProducts[j].price,quantity:this.cartProducts[j].quantity,datePurchased:storedDate} //sales item to send
    this.saleServie.storeSaleDetails(obj2); // sales service
    // console.log(obj2);
    this.getItemsService.addPurchasedItem(obj,this.userId);
    cartarray.push(obj);
    const deletedItem = {userId: this.userId, pid: this.cartProducts[j].pid};
    const delete2 = JSON.stringify(deletedItem);
    this.getItemsService.deleteItem(delete2);
   }
   const changeInfo = {userId: this.userId, total: this.total};
   const purchased = new Purchased (this.userId, cartarray, this.total);
   this.getItemsService.Purchaseitems(purchased);
   this.getItemsService.changeFunds(changeInfo);
   for(let k=0;k<cartarray.length;k++){
this.getItemsService.updateProductQuantity(cartarray[k]);
   }
  }
  else {
   let err=document.getElementById("err");
   if(err) err.innerHTML="insufficent Funds"
  }
}
logout(): void{
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('curUserId');
  this.router.navigate(['shopper']);
  
}
}
