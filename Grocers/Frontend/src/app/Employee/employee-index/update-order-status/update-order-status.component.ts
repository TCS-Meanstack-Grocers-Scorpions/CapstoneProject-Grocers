import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model.order';
import { OrderService } from 'src/app/order.service';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css'],
})
export class UpdateOrderStatusComponent implements OnInit {
  constructor(public updateOr: OrderService) {}
  msg?: string;
 orders:Array<Order>=[]
  ngOnInit(): void {
    this.updateOr.getAllOrders().subscribe(result=>{console.log(result); this.orders=result}); // gets all orders and console logs it on load, probably move this into a table
  }

  updateOrder(updateRef: any): void {
    this.updateOr.updateOrderStatus(updateRef);
    this.msg = 'Order Updated!';
    setTimeout(function() { location.reload(); }, 500);
  }
}
