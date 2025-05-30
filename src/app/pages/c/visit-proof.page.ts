import { Component } from '@angular/core';
import { VisitProofComponent } from '@full-component/connected/visit-proof/visit-proof.component';

@Component({
  standalone: true,
  imports: [VisitProofComponent],
  template: `<app-visit-proof></app-visit-proof>`,
})
export default class ProductsComponent {}
