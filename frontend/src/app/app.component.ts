import { Component } from '@angular/core';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DevicesListComponent } from './features/devices/devices-list/devices-list.component';
import { AddDeviceComponent } from './features/devices/add-device/add-device.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent, DevicesListComponent, AddDeviceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  
  // Stări pentru navigare hardcodată: 'login' | 'register' | 'devices-list' | 'add-device'
  currentView: string = 'login';

  onLogin() {
    this.currentView = 'devices-list';
  }

  onLogout() {
    this.currentView = 'login';
  }

  onGoToRegister() {
    this.currentView = 'register';
  }

  onGoToLogin() {
    this.currentView = 'login';
  }

  onAddDevice() {
    this.currentView = 'add-device';
  }

  onBackToDevices() {
    this.currentView = 'devices-list';
  }
}

