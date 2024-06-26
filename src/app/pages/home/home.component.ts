import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { MainHomeComponent } from "../../components/main-home/main-home.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet,
        CommonModule, MenuComponent, MainHomeComponent]
})
export class HomeComponent{
  
}
 
