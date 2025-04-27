import { Injectable } from '@angular/core';
import {FirestoreService} from "@services/firestore/firestore.service";
import {NullableString} from "@types";

type RealEstate = {
  UID: string;
  address: string;
  addresscomp: NullableString;
  city: string;
  cp: string;
  country: string;
  geopoint: {
    lat: number;
    lng: number;
  }
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class RealEstateService extends FirestoreService<RealEstate> {}
