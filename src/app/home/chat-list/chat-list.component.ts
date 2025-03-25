import { Component, ElementRef, HostListener } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { AddFriendComponent } from './add-friend/add-friend.component';

@Component({
  selector: 'app-chat-list',
  imports: [MenuComponent, CommonModule, AddFriendComponent],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent {

  showMoreMenu: boolean = false;
  showAddFriendModal: boolean = false;
  showInputMenu: boolean = false;
  inputMode: string = '';

  constructor(private eRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    // Si el clic ocurre fuera del botón o del menú, oculta el menú
    if (this.showMoreMenu && !this.eRef.nativeElement.contains(event.target)) {
      this.showMoreMenu = false;
    }
  }

  toggleMenu() {
    this.showMoreMenu = !this.showMoreMenu;
  }

  toggleAddFriendModal() {
    this.showAddFriendModal = !this.showAddFriendModal;
    if (this.showMoreMenu) this.toggleMenu();
  }

  toggleInput(mode: string) {
    this.showInputMenu = !this.showInputMenu;
    this.inputMode = mode;
  }
}
