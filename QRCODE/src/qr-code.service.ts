import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  private apiUrl = 'http://localhost:3000/QrCode/generate';
  constructor(private http: HttpClient) { }

  generateQRCode(text: string): Observable<any> {
    return this.http.post(this.apiUrl, { text });
  }
}
