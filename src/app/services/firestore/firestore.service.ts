import {Inject, inject, Injectable, InjectionToken, Signal} from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore/lite';
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs/operators";
import {NullableString} from "@types";

export const COLLECTION_NAME = new InjectionToken<string>('COLLECTION_NAME');

@Injectable({
  providedIn: 'root'
})
export class FirestoreService<T> {
  private db: Firestore = inject(Firestore);
  constructor(@Inject(COLLECTION_NAME) private readonly collectionName: string) {}

  getCollection(): Signal<T[] | null>{
    if (!this.collectionName) {
      throw new Error('Collection name is not set');
    }
    return toSignal(collectionData(collection(this.db, this.collectionName as string)).pipe(map((data) => {
      console.log('Firestore data:', data);
      return data as T[];
    })), { initialValue: null });
  }
}

export const REAL_ESTATE_COLLECTION_PROVIDER = {
  provide: COLLECTION_NAME,
  useValue: 'real_estate', // Nom de la collection dans Firestore
};
