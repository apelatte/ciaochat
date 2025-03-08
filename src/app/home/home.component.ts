import { Component } from '@angular/core';
import { ChatListComponent } from "./chat-list/chat-list.component";
import { ChatComponent } from "./chat/chat.component";

@Component({
  selector: 'app-home',
  imports: [ChatListComponent, ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
