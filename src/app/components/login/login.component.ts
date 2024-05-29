import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { UserAppService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/login';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, FormsModule,ToastModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [HttpClientModule,MessageService],
})
export class LoginComponent {

  
  constructor(
    private userAppService: UserAppService,
    private messageService: MessageService
  ) {}

  visible: boolean = false;
  login: boolean = false;
  register: boolean = false;
  password!: string;
  username!: string;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
    this.register = false;
  }

  signIn() {
    if (this.validateFields()) {
      const user: User = {
        usuario: this.username,
        password: this.password,
      };
      this.userAppService.login(user).subscribe({
        next: (response: any) => {
          this.login = true;
          this.closeDialog();
          this.showMessageSuccess(response);
        },
        error: (err) => this.showMessageError(err.message),
        complete: () =>
          console.log('Observable emitted the complete notification'),
      });
    } else {
      this.showMessageError("Debe de completar ambos campos")
    }
  }

  registerUser(){
    const user: User = {
      usuario: this.username,
      password: this.password,
    };
    this.userAppService.registerUser(user).subscribe({
      next: (response: any) => {
        this.login = true;
        this.closeDialog();
        this.showMessageSuccess(response.message);
      },
      error: (err) => this.showMessageError(err.message),
      complete: () =>
        console.log('Observable emitted the complete notification'),
    });
  }

  validateFields() {
    return !!this.username && !!this.password;
  }

  showMessageError(detail: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: detail,
    });
  }
  showMessageSuccess(detail: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: detail,
    });
  }

  logout() {
    this.login = false;
    }
}
