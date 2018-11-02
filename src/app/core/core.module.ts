import { NgModule, ModuleWithProviders } from '@angular/core';
import { GuestService } from './services/guest.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './services/http-intercepter';
import { TableService } from './services/table.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        QRScanner,
        GuestService,
        TableService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HeaderInterceptor,
          multi: true
        }
      ]
    };
  }
}


