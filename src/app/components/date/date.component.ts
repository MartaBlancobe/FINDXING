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
  

  constructor(private messageService: MessageService) {
    this.date = new Date();
    this.formattedDate = this.formatDate(this.date);
    this.minDate = new Date();
  }

  onDateSelect(event: any) {
    this.formattedDate = this.formatDate(event);
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  submit() {
    this.messageService.add({
      severity: 'success',
      summary: 'Cita',
      detail: `Fecha: ${this.formattedDate}`,
    });
    this.resetForm();
  }

  resetForm() {
    this.date = new Date();
    this.formattedDate = this.formatDate(this.date);
  }

}
