import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-vendor',
  imports: [CommonModule],
  templateUrl: './vendor.component.html',
})
export class VendorComponent {

  cart:any[] = [];

  menu = [
    { name: 'Paneer Roll', price: 120 },
    { name: 'Veg Momos', price: 90 },
    { name: 'Cold Coffee', price: 70 }
  ];

  addToCart(item:any){
    this.cart.push(item);
    alert('Added to cart');
  }
}
