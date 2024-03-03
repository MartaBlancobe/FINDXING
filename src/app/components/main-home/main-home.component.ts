import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [
    CommonModule,GalleriaModule, FormsModule,ReactiveFormsModule
  ],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHomeComponent {
  images: any[] =[
    {itemImageSrc:'assets/images/foto1.png'},
    {itemImageSrc:'assets/images/taller.jpg'}
];

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
}
