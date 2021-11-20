import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/types/order';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order: Order;
  constructor(private orderService: OrderService) {
    this.order = {
      username: '',
      address: '',
      price: 0,
      products: []
    }
  }

  ngOnInit(): void {
    this.order = this.orderService.getOrder()
  }
}
