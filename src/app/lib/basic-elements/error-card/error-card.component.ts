import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import { NullableString } from '@types';

@Component({
  selector: 'app-error-card',
  imports: [],
  templateUrl: './error-card.component.html',
  styleUrl: './error-card.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErrorCardComponent {
  @Input() message: NullableString = null;
}
