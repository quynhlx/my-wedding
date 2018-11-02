import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  scanSub: any;
  qrCode: string;
  constructor(private qrScanner: QRScanner) { }

  ngOnInit() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          console.log('Camera Permission Given');
          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.qrCode = text;
            this.qrScanner.destroy();
            // this.scanSub.unsubscribe();
            console.log('scaned');
          });
        }
      });
  }

}
