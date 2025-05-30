import {
  Component,
  effect,
  inject,
  input, OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { Property } from '@models/visit-proof/property.model';
import { VisitService } from '@services/firestore/visit/visit.service';
import { Visit } from '@models/visit-proof/visit.model';
import {Subscription} from "rxjs";
import {DatePipe} from "@angular/common";
import {FirebaseTimeStampPipe} from "@/pipes/firebase-time-stamp.pipe";
import {ButtonComponent} from "@elements/button/button.component";

@Component({
  selector: 'app-tab-card',
  imports: [
    DatePipe,
    FirebaseTimeStampPipe,
    ButtonComponent
  ],
  templateUrl: './tab-card.component.html',
  styleUrl: './tab-card.component.css',
})
export class TabCardComponent implements OnDestroy{
  property = input.required<Property>();

  visitService = inject(VisitService);
  visits: WritableSignal<Visit[]> = signal([]);
  loading = signal(true);
  visits$!: Subscription;

  constructor() {
    effect(() => {
      if (this.property()) {
        this.visits$ = this.visitService
          .getVisits(this.property().docId)
          .subscribe((visits) => this.visits.set(visits));
      }
    });
  }

  ngOnDestroy() {
    this.visits$.unsubscribe();
  }
}
