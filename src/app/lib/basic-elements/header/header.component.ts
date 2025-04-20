import { Component } from '@angular/core';
import { IconComponent } from '@elements/icon/icon.component';

@Component({
  selector: 'app-header',
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {}
