import { Component } from '@angular/core';
import { HeaderComponent } from '@elements/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-connected-layer',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './connected-layer.component.html',
  styleUrl: './connected-layer.component.css',
})
export class ConnectedLayerComponent {}
