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
import { UserAppService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
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
  providers: [HttpClientModule,MessageService],
})
export class FormContactComponent {

  miFormulario!: FormGroup;

  constructor(
    private messageService: MessageService,
    private userAppService: UserAppService
    ) {
    this.miFormulario = new FormGroup({
      nombre: new FormControl('', [Validators.minLength(2), Validators.required]),
      apellidos: new FormControl('', Validators.minLength(2)),
      direccion: new FormControl('', Validators.minLength(2)),
      mensaje: new FormControl('', [Validators.minLength(2), Validators.required]),
      telefono: new FormControl('', Validators.required),
    });
  }
  saveForm() {
    if (this.miFormulario.valid) {
      this.userAppService.createFormContact(this.miFormulario).subscribe({
        next: value =>  {
          this.miFormulario.reset();
          this.showMessageSuccess();
        },
        error: err => this.showMessageError("Error en el servidor"),
        complete: () => console.log('Observable emitted the complete notification')
      });
     
      console.log('mi formulario', this.miFormulario);
    } else {
      this.showMessageError();
      console.log('error', this.miFormulario);
    }
  }
  showMessageError(detail?:string) {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: detail?detail:'El formulario contiene errores',
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
