import { IGuest } from './../interfaces/IGuest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.page.html',
  styleUrls: ['./guest-profile.page.scss'],
})
export class GuestProfilePage implements OnInit {
  guest: IGuest;
  constructor() { }

  ngOnInit() {
    this.guest = {
      name: 'Lê Xuân Quỳnh',
      phoneNumber: '0388 166 199',
      address: 'Chung cư Mỹ Long',
      avatar: 'assets/avatar.jpg',
      status: 1
    };
  }

}
