import { inject, Injectable } from '@angular/core';
import { FirestoreService } from '@services/firestore/firestore-main/firestore.service';
import { Observable } from 'rxjs';
import { Property } from '@models/visit-proof/property.model';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private firestoreService: FirestoreService = inject(FirestoreService);
  private authService: AuthService = inject(AuthService);

  public readonly collectionName = 'immeuble';
  private readonly properties$: Observable<Property[]> =
    this.firestoreService.getCollectionData<Property>(this.collectionName, {
      UID: this.authService.userID,
    });

  get properties(): Observable<Property[]> {
    return this.properties$;
  }
}
