import { Component } from '@angular/core';
import { QrCodeService } from '../../qr-code.service';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qrcode-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './qrcode-generator.component.html',
  styleUrl: './qrcode-generator.component.css'
})
export class QrcodeGeneratorComponent {
  qrText: string = '';
  qrCodeUrl: string = '';

  constructor(private qrCodeService: QrCodeService) {}

  generateQRCode() {
    if (this.qrText) {
      this.qrCodeService.generateQRCode(this.qrText).subscribe(
        (response) => {
          console.log('Response from server:', response); // Log the response for debugging
          this.qrCodeUrl = response.qrCodeUrl; // Check if this value is correctly set
        },
        (error) => {
          console.error('Error generating QR code', error);
        }
      );
    }
  }
}
