import { Component } from '@angular/core';
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from './app-routing.module';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MessagesComponent, AppRoutingModule]
})
export class AppComponent {
  title = 'Tour of Heroes';
}