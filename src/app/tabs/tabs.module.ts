import { GuestProfilePageModule } from './../guest-profile/guest-profile.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TablePageModule } from '../table/table.module';
import { TabsPage } from './tabs.page';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { TableSelectionPageModule } from '../table-selection/table-selection.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    TablePageModule,
    GuestProfilePageModule,
    TableSelectionPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
