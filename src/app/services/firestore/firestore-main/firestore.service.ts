import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  where,
  query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private db: Firestore = inject(Firestore);

  getCollectionData<T>(
    collectionName: string,
    filters: { [key: string]: any } = {}
  ): Observable<T[]> {
    const collectionRef = collection(this.db, collectionName);
    let queryRef = query(collectionRef);
    for (const [key, value] of Object.entries(filters)) {
      queryRef = query(queryRef, where(key, '==', value));
    }
    return collectionData(queryRef, { idField: 'docId' }) as Observable<T[]>;
  }
}
