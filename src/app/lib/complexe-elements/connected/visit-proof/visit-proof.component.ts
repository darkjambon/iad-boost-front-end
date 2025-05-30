import { Component, effect, inject, OnInit } from '@angular/core';
import { TabCardComponent } from '@elements/tab-card/tab-card.component';
import { PropertyStoreService } from '@services/stores/property-store/property-store.service';

@Component({
  selector: 'app-visit-proof',
  imports: [TabCardComponent],
  templateUrl: './visit-proof.component.html',
  styleUrl: './visit-proof.component.css',
})
export class VisitProofComponent implements OnInit {
  propertyStore = inject(PropertyStoreService);

  properties = this.propertyStore.properties;

  constructor() {
    effect(() => {
      console.log('Properties changed:', this.properties());
    });
  }

  ngOnInit(): void {
    console.log('VisitProofComponent initialized', this.properties());
  }
}
