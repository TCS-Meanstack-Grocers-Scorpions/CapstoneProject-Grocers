import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../order.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css'],
})
export class UpdateOrderStatusComponent implements OnInit {
  constructor(public updateOr: OrderService) {}
  msg?: String;

  ngOnInit(): void {}

  updateOrder(updateRef: any): void {
    this.updateOr.updateOrderStatus(updateRef);
    this.msg = 'Order Updated!';
  }
}
