import { RealEstateService } from '@services/firestore/real-estate.service';
import {Component, inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-visit-proof',
  imports: [],
  templateUrl: './visit-proof.component.html',
  styleUrl: './visit-proof.component.css'
})
export class VisitProofComponent implements OnInit {
  realEstate = inject(RealEstateService);

  ngOnInit(): void {
    console.log('VisitProofComponent initialized');
  }

}
