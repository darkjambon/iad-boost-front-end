import { Pipe, PipeTransform } from '@angular/core';
import {Timestamp} from "@angular/fire/firestore";

@Pipe({
  name: 'firebaseTimeStamp'
})
export class FirebaseTimeStampPipe implements PipeTransform {

  transform(value: Timestamp | Date | null | undefined, format: Intl.DateTimeFormatOptions = {}): string {
    if (!value) {
      return '';
    }

    let date: Date;

    if (value instanceof Timestamp) {
      date = value.toDate();
    } else {
      date = value;
    }

    const formatter = new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      ...format,
    });

    return formatter.format(date);
  }

}
