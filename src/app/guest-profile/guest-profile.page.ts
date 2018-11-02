import { ITable } from './../interfaces/ITable';
import { ActivatedRoute } from '@angular/router';
import { IGuest } from './../interfaces/IGuest';
import { Component, OnInit } from '@angular/core';
import { GuestService } from '../core/services/guest.service';
import { TableService } from '../core/services/table.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.page.html',
  styleUrls: ['./guest-profile.page.scss'],
})
export class GuestProfilePage implements OnInit {
  guest: Observable<IGuest>;
  table: Observable<ITable>;
  constructor(private guestSvc: GuestService,
    private tableSvc: TableService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.guest = this.guestSvc.getGuest(id);
    this.table = this.tableSvc.findByGuest(id);
  }

}
