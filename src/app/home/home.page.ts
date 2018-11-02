import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IGuest, IGuestGroup } from '../interfaces/IGuest';
import { Router, ActivatedRoute } from '@angular/router';
import { GuestService } from '../core/services/guest.service';
// import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  keyword: String = '';
  guests: Observable<IGuestGroup[]>;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private guestSvc: GuestService) {
  }

  ngOnInit() {
    this.loadData();
    this.guests = this.guestSvc.groups;
  }
  loadData(event?) {
    setTimeout(() => {
      this.guestSvc.loadGuests().subscribe();
      if (event) {
        event.target.complete();
      }
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (this.guests.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 300);
  }

  onSearch(event) {
    this.guestSvc.search(this.keyword);
  }

  onCancel(event) {
    this.guestSvc.loadGuests().subscribe();
  }

  onDetail(id) {
    this.router.navigate([{outlets: { people: ['guest-profile', id]}}], {relativeTo: this.route.parent});
  }

  call(member: IGuest) {
    // this.callNumber.callNumber(member.phoneNumber.toString(), true);
  }

  scan() {
    this.router.navigateByUrl('/scan');
  }
}


