import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import {Order} from 'src/app/model.order';
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  orders?:Array<Order>;
  constructor(public orderSer:OrderService) { }

  ngOnInit(): void {
    this.orderSer.getOrdersByUserID("").subscribe(result=>{
      this.orders = result;
    });
  }

}
