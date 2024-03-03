import { Routes } from '@angular/router';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { MainHomeComponent } from './components/main-home/main-home.component';

export const routes: Routes = [
   { path: 'contact', component: FormContactComponent },
   { path: '', component: MainHomeComponent },
];
