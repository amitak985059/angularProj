import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  message = '';
  receivedMessage = '';

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.receiveMessage().subscribe((data) => {
      this.receivedMessage = data;
    });
  }

  send() {
    this.socketService.sendMessage(this.message);
  }
}
