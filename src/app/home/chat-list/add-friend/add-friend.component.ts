import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  imports: [],
  templateUrl: './add-friend.component.html',
  styleUrl: './add-friend.component.css'
})
export class AddFriendComponent {

  @Output() cancel = new EventEmitter();

  constructor(){}

  closeModal() {
    this.cancel.emit(true);
  }
}
