import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  standalone: true,
  selector: 'app-cart',
  template: `
    <div class="p-10">
      <h2 class="text-3xl font-bold">Cart Page</h2>
      <p class="mt-4 text-gray-500">
        Cart logic next phase me integrate karenge with backend.
      </p>
    </div>
  `
})
export class CartComponent {
  constructor(private orderService: OrderService) { }
  placeOrder() {
    const order: Order = {
      userId: '123',
      vendorId: '456',
      items: [
        { name: 'Item 1', price: 100, quantity: 2 }
      ],
      totalAmount: 200,
      status: 'PLACED'  // now TS knows this is valid literal type
    };

    this.orderService.createOrder(order).subscribe({
      next: (res) => {
        console.log('Order placed', res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


}
