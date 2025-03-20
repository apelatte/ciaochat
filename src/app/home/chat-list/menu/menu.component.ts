import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Output() addFriendClick = new EventEmitter();

  constructor() { }

  addFriend() { 
    this.addFriendClick.emit(true);
  }

}
