import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Device {
  name: string;
  isConnected: boolean;
  battery: string;
  bluetooth: string;
  lastActivity: string;
}

@Component({
  selector: 'app-devices-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent {
  @Output() logout = new EventEmitter<void>();
  @Output() addDevice = new EventEmitter<void>();

  devices: Device[] = [
    {
      name: 'LensCase Pro - Dormitor',
      isConnected: true,
      battery: '85%',
      bluetooth: 'Conectat',
      lastActivity: 'Azi, 08:30'
    },
    {
      name: 'LensCase Pro - Birou',
      isConnected: false,
      battery: '45%',
      bluetooth: 'Deconectat',
      lastActivity: 'Ieri, 18:15'
    }
  ];

  onAddDevice(): void {
    console.log('Adaugă aparat nou');
    this.addDevice.emit();
  }

  onLogout(): void {
    console.log('Logout');
    this.logout.emit();
  }

  onDeviceClick(deviceName: string): void {
    console.log(deviceName);
  }
}
