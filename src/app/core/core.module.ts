import { NgModule, ModuleWithProviders } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from './services/database.service';
import { GuestService } from './services/guest.service';
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SQLite,
        DatabaseService,
        GuestService
      ]
    };
  }

}


