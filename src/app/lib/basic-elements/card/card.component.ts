import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import '@shoelace-style/shoelace/dist/components/card/card.js';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardComponent implements OnChanges {
  @Input() width: string = '400px';
  @Input() height: string = '400px';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['width']) {
      document.documentElement.style.setProperty('--card-width', this.width);
    }
    if (changes['height']) {
      document.documentElement.style.setProperty('--card-height', this.height);
    }
  }
}
