import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterOutlet,FormContactComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  title = 'findxing';
}

