import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  onlineStatus: boolean = navigator.onLine;
  onlineStatusText: string = this.onlineStatus ? 'online' : 'Offline';
  onlineColor: string = this.onlineStatus ? 'green' : 'red';

  @HostListener('window:online', ['$event'])
  onOnline(){

  }

  @HostListener('window:offline', ['$event'])
  onOffline(){
    
  }

}
