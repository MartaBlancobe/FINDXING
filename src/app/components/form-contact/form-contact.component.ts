import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    InputMaskModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export class FormContactComponent {

  miFormulario!: FormGroup;

  constructor(private messageService: MessageService) {
    this.miFormulario = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.required]),
      lastName: new FormControl('', Validators.minLength(2)),
      address: new FormControl('', Validators.minLength(2)),
      text: new FormControl('', [Validators.minLength(2), Validators.required]),
      phone: new FormControl('', Validators.required),
    });

  }
  saveForm() {
    if (this.miFormulario.valid) {
      this.showMessageSuccess();
      console.log('mi formulario', this.miFormulario);
    } else {
      this.showMessageError();
      console.log('error', this.miFormulario);
    }
  }
  showMessageError() {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: 'El formulario contiene errores',
    });
  }
  showMessageSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Mensaje enviado',
    });
  }

 
}
