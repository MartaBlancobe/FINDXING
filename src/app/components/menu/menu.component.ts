import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule, 
    InputTextModule, 
    


  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-user',
            routerLink:'/'
        },
        {
          label: 'Citas de taller',
          icon: 'pi pi-fw pi-user',
          routerLink:'/'
      }, {
        label: 'Repuestos',
        icon: 'pi pi-fw pi-user',
        routerLink:'/'
    }, {
      label: 'Cambios de aceite',
      icon: 'pi pi-fw pi-user',
      routerLink:'/'
  }, {
    label: 'Contacto',
    icon: 'pi pi-fw pi-user',
    routerLink:'contact'
}
      
    ];

}
}
