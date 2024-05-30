import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';

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


  constructor(private config: PrimeNGConfig) {}

  ngOnInit() {
      this.config.setTranslation({
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Borrar',
        weekHeader: 'Sm'
      });
  }

}

