import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormContactComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  title = 'findxing';
}
