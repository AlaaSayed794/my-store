import { Injectable } from '@angular/core';
import { Order } from '../types/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order
  constructor() {
    this.order = {
      username: '',
      address: '',
      price: 0,
      products: []
    }
  }

  setOrder(order: Order): Order {
    this.order = order;
    return this.order;
  }

  getOrder(): Order {
    return this.order;
  }
}
