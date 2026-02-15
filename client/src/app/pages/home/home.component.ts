import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  vendors = [
    { _id: '1', shopName: 'Sharma Ji Chaat', avgPrepTime: 10 },
    { _id: '2', shopName: 'Delhi Momos', avgPrepTime: 15 },
    { _id: '3', shopName: 'Roll Factory', avgPrepTime: 12 }
  ];

  constructor(private router: Router){}

  openVendor(id:string){
    this.router.navigate(['/vendor', id]);
  }
}
