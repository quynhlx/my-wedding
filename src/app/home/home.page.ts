import { Component, OnInit, ViewChild } from '@angular/core';
import { IGuest, IGuestGroup } from '../interfaces/IGuest';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  keyword: string;
  guests: IGuestGroup[];
  constructor() {
  }

  ngOnInit() {
    this.guests = [
      {
        group: 'Bạn cô dâu',
        members: [{
          address: 'Thủ Đức',
          avatar: 'assets/avatar-placeholder.png',
          name: 'Lê Xuân Quỳnh',
          phoneNumber: '01688166199',
          status: 1
        },
        {
          address: 'Thủ Đức',
          avatar: 'assets/avatar-placeholder.png',
          name: 'Lê Xuân Quỳnh',
          phoneNumber: '01688166199',
          status: 1
        },
        {
          address: 'Thủ Đức',
          avatar: 'assets/avatar-placeholder.png',
          name: 'Lê Xuân Quỳnh',
          phoneNumber: '01688166199',
          status: 1
        },
        {
          address: 'Thủ Đức',
          avatar: 'assets/avatar-placeholder.png',
          name: 'Lê Xuân Quỳnh',
          phoneNumber: '01688166199',
          status: 1
        }]
      }
    ];
  }

  onSearch(event) {
    console.log(event);
  }

  onCancel(event) {
    console.log(event);
  }

  onDetail(id) {
    this.nav.navigateForward('guest-profile');
  }
}


