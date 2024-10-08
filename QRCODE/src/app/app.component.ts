import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrcodeGeneratorComponent } from "./qrcode-generator/qrcode-generator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QrcodeGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QRCODE';
}
