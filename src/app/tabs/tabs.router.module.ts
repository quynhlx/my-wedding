import { GuestProfilePage } from './../guest-profile/guest-profile.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { TablePage } from '../table/table.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(people:people)',
        pathMatch: 'full',
      },
      {
        path: 'people',
        outlet: 'people',
        component: HomePage,
      },
      {
        path: 'scanner',
        outlet: 'scanner',
        component: TablePage
      },
      {
        path: 'analytics',
        outlet: 'analytics',
        component: AboutPage
      },
      { path: 'guest-profile', outlet: 'people', component: GuestProfilePage }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(people:people)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
