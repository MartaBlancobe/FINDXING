import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-oil-changes',
  standalone: true,
  imports: [ButtonModule,CommonModule ],
  templateUrl: './oil-changes.component.html',
  styleUrl: './oil-changes.component.scss'
})
export class OilChangesComponent {

}
