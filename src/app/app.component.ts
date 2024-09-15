import { Component } from '@angular/core';
import { SignalRService } from './Services/signalR.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() { }
  title = 'BakerySystem-FrontEnd';
}
