import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-spare-parts',
  standalone: true,
  templateUrl: './spare-parts.component.html',
  imports: [CommonModule, GalleriaModule ,  ButtonModule,],
  styleUrls: ['./spare-parts.component.scss']
})
export class SparePartsComponent implements OnInit {

  repuestos: any[];
  responsiveOptions: any[];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
    this.repuestos = [];
  }

  ngOnInit() {
    this.repuestos = [
      {
        name: 'Filtro de Aire',
        description: 'Filtro de aire para motor.',
        image: 'assets/spare-parts/air-filter.jpg'
      },
      {
        name: 'Batería',
        description: 'Batería de coche de larga duración.',
        image: 'assets/spare-parts/battery.jpg'
      },
      {
        name: 'Pastillas de Freno',
        description: 'Pastillas de freno de alta calidad.',
        image: 'assets/spare-parts/brake-pads.jpg'
      },
      {
        name: 'Aceite de Motor',
        description: 'Aceite de motor sintético.',
        image: 'assets/spare-parts/engine-oil.jpg'
      },
      {
        name: 'Filtro de Combustible',
        description: 'Filtro de combustible para coche.',
        image: 'assets/spare-parts/fuel-filter.jpg'
      }
    ];
  }

}
