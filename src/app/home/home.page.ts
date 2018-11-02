import { Component, OnInit, ViewChild } from '@angular/core';
import { IGuest, IGuestGroup } from '../interfaces/IGuest';
import { Router, ActivatedRoute } from '@angular/router';
// import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  keyword: string;
  guests: IGuestGroup[] = [];
  constructor(private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(event?) {
    setTimeout(() => {
      this.guests = this.guests.concat([
        {
          group: 'Bạn cô dâu',
          members: [{
            address: 'Thủ Đức',
            avatar: 'assets/avatar.jpg',
            name: 'Lê Xuân Quỳnh',
            phoneNumber: '01688166199',
            status: 1
          },
          {
            address: 'Thủ Đức',
            avatar: 'assets/avatar.jpg',
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
      ]);
      if (event) {
        event.target.complete();
      }
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (this.guests.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  onSearch(event) {
    console.log(event);
  }

  onCancel(event) {
    console.log(event);
  }

  onDetail(id) {
    this.router.navigate([{outlets: { people: ['guest-profile']}}], {relativeTo: this.route.parent});
  }

  call(member: IGuest) {
    // this.callNumber.callNumber(member.phoneNumber.toString(), true);
  }

  addMember() {
  }
}


