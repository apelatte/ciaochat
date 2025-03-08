import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showSelectAvatar: boolean = false;
  selectedAvatar = "/assets/avatares/avatar1.svg"
  avatars = [
    { src: "/assets/avatares/avatar1.svg" },
    { src: "/assets/avatares/avatar2.svg" },
    { src: "/assets/avatares/avatar3.svg" },
    { src: "/assets/avatares/avatar4.svg" },
    { src: "/assets/avatares/avatar5.svg" },
    { src: "/assets/avatares/avatar6.svg" },
    { src: "/assets/avatares/avatar7.svg" },
    { src: "/assets/avatares/avatar8.svg" },
    { src: "/assets/avatares/avatar9.svg" },
  ]

  constructor() { }

  toggleSelectAvatar(check: boolean): void {
    this.showSelectAvatar = !this.showSelectAvatar;
  }

  changeAvatar(newAvatar: any) {
    this.selectedAvatar = newAvatar;
    this.showSelectAvatar = false
  }
}
