import { ITable } from './../interfaces/ITable';
import { ActivatedRoute, Router } from '@angular/router';
import { IGuest } from './../interfaces/IGuest';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GuestService } from '../core/services/guest.service';
import { TableService } from '../core/services/table.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.page.html',
  styleUrls: ['./guest-profile.page.scss'],
})
export class GuestProfilePage implements OnInit, AfterViewInit{
  guest: Observable<IGuest>;
  table: ITable;
  guestId: string;
  arrived: Boolean;
  constructor(private guestSvc: GuestService,
    private tableSvc: TableService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.guestId = this.route.snapshot.params.id;
    this.guest = this.guestSvc.getGuest(this.guestId);
  }

  ngAfterViewInit() {
    this.tableSvc.findByGuest(this.guestId).subscribe( t => {
      this.table = t;
      const guest = t.checkedInSeats.find(g => g.id === this.guestId);
      if (guest) {
        this.arrived = true;
      }
    });
  }

  addTable(id: string) {
    this.router.navigate([{ outlets: { people: ['table-selection', id] } }], { relativeTo: this.route.parent });
  }

  checkIn() {
      if (this.arrived) {
        this.tableSvc.checkInGuestToTable(this.guestId, this.table).subscribe( t => {
          this.table = t;
        });
      } else {
        this.tableSvc.uncheckInGuestToTable(this.guestId, this.table).subscribe( t => {
          this.table = t;
        });
      }
  }
}
