import { Visit } from '@/models/visit-proof/visit.model';
import { Component, Input } from '@angular/core';
import { CardComponent } from '@elements/card/card.component';

@Component({
  selector: 'app-visit-proof',
  imports: [CardComponent],
  templateUrl: './visit-proof.component.html',
  styleUrl: './visit-proof.component.css',
})
export class VisitProofComponent {
  @Input() visit!: Visit;
}
