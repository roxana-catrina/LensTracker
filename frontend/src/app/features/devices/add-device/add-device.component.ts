import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-device',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent {
  @Output() goBack = new EventEmitter<void>();
  
  isScanning = false;
  deviceFound = false;
  isConnecting = false;
  isConnected = false;

  onBack(): void {
    console.log('Înapoi');
    this.goBack.emit();
  }

  startScan(): void {
    if (this.isScanning || this.isConnected) return;
    
    this.isScanning = true;
    console.log('Pornește scanarea...');

    // Simulăm scanarea ce durează 2 secunde
    setTimeout(() => {
      this.isScanning = false;
      this.deviceFound = true;
      console.log('Aparat găsit!');
    }, 2000);
  }

  connectDevice(): void {
    this.isConnecting = true;
    console.log('Conectare la LensCase Pro');
    
    // Simulăm procesul de conectare
    setTimeout(() => {
      this.isConnecting = false;
      this.isConnected = true;
      console.log('Aparatul a fost conectat cu succes!');
    }, 1500);
  }
}
