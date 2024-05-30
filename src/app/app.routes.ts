import { Routes } from '@angular/router';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { OilChangesComponent } from './components/oil-changes/oil-changes.component';
import { DateComponent } from './components/date/date.component';
import { SparePartsComponent } from './components/spare-parts/spare-parts.component';


export const routes: Routes = [
   { path: 'date', component: DateComponent },
   { path: 'oilChange', component: OilChangesComponent },
   { path: 'sparePart', component: SparePartsComponent },
   { path: 'contact', component: FormContactComponent },
   { path: '', component: MainHomeComponent },
];
