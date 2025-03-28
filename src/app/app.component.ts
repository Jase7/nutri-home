import { Component } from '@angular/core';
import { NavigationMenu } from './shared/components/navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app',
  imports: [CommonModule, NavigationMenu, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
