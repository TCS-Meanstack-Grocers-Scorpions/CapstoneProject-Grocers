import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model.order';
import { OrderService } from 'src/app/order.service';


@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  orders?: Array<Order>;
  id = sessionStorage.getItem('curUserId');
  constructor(public orderSer: OrderService) { }

  ngOnInit(): void {
    this.orderSer.getOrdersByUserID(this.id).subscribe(result => {
      this.orders = result;
    });
  }

}
