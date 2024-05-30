import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CommonModule, CalendarModule, ButtonModule, FormsModule,ToastModule,InputTextModule ],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
  providers: [MessageService],
})


export class DateComponent {
 
  date: Date;
  minDate: Date;
  formattedDate: string;
  availableHours: string[] = [];
  selectedHour: string = '';

  es: any;

  constructor(private messageService: MessageService) {
    this.date = new Date();
    this.formattedDate = this.formatDate(this.date);
    this.minDate = new Date();
    this.onDateSelect(this.minDate);
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      today: 'Hoy',
      clear: 'Borrar'
    };
  }

  onDateSelect(event: any) {
    this.formattedDate = this.formatDate(event);
    this.loadAvailableHours();
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  loadAvailableHours() {
    const hours = [];
    for (let i = 8; i <= 20; i++) {
      if (i === 15) continue;
      hours.push(`${i.toString().padStart(2, '0')}:00`);
    }
    this.availableHours = this.shuffleArray(hours).slice(0, Math.floor(Math.random() * (hours.length - 1)) + 1);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  selectHour(hour: string) {
    this.selectedHour = hour;
  }

  submit() {
    if (this.selectedHour) {
      this.messageService.add({
        severity: 'success',
        summary: 'Cita',
        detail: `Fecha: ${this.formattedDate} Hora: ${this.selectedHour}`,
      });
      this.resetForm();
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Cita',
        detail: 'Por favor, seleccione una hora.',
      });
    }
  }

  resetForm() {
    this.date = new Date();
    this.formattedDate = this.formatDate(this.date);
    this.loadAvailableHours();
    this.selectedHour = '';
  }}
