import { NullableString, NullableTimestamp } from '@types';
import { Timestamp } from '@angular/fire/firestore';


export interface Visit {
  fingerprint: NullableString;
  message: NullableString;
  realEstateID: string;
  signature: NullableString;
  signatureDate: NullableTimestamp;
  signer: NullableString;
  visitDate: Timestamp;
}
