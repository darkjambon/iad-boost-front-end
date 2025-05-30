import { computed, inject, Injectable, signal } from '@angular/core';
import { PropertyService } from '@services/firestore/property/property.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyStoreService {
  private propertyService: PropertyService = inject(PropertyService);
  private _loading = signal(true);
  public readonly loadingComputed = computed(() => this._loading());
  readonly properties = toSignal(
    this.propertyService.properties.pipe(tap(() => this._loading.set(false))),
    { initialValue: [] }
  );
}
