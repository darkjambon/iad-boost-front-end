import { NullableString } from '@types';

export interface Property {
  UID: string;
  address: string;
  addresscomp: NullableString;
  city: string;
  cp: string;
  country: string;
  geopoint: {
    lat: number;
    lng: number;
  };
  name: string;
  docId: string;
}
