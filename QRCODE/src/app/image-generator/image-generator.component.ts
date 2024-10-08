import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.css']
})
export class ImageGeneratorComponent {
  selectedFile: File | null = null;
  imageUrl: string = '';
  qrText: string = ''; // Added for QR code text input
  qrCodeUrl: string = ''; // Variable to store the generated QR code URL

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  generateQRCode(): void {
    if (!this.selectedFile || !this.qrText) {
      alert('Please enter text and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('text', this.qrText); // Add the QR code text to FormData

    this.http.post<any>('http://localhost:3000/QrCode/image/generate', formData).subscribe(
      (response) => {
        this.imageUrl = response.imageUrl;
        this.qrCodeUrl = response.qrCodeUrl; // Store the QR code URL in a class property
      },
      (error) => {
        console.error('Error generating QR code', error);
      }
    );
  }
}
