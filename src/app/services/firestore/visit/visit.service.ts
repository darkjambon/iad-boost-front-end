import { inject, Injectable } from '@angular/core';
import { FirestoreService } from '@services/firestore/firestore-main/firestore.service';
import { Visit } from '@models/visit-proof/visit.model';
import { Observable, tap } from 'rxjs';
import { PropertyService } from '@services/firestore/property/property.service';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class VisitService {
  readonly collectionName = 'visit';
  private firestoreService: FirestoreService = inject(FirestoreService);
  private propertyService: PropertyService = inject(PropertyService);

  getVisits(propertyId: string): Observable<Visit[]> {
    return this.firestoreService
      .getCollectionData<Visit>(
        `${this.propertyService.collectionName}/${propertyId}/${this.collectionName}`
      );
  }
}
