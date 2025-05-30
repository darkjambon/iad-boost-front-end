import { signal, WritableSignal } from '@angular/core';

export type StatedSignal<T> = {
  value: T;
  initialized: boolean;
};

export class StateSignal<T> {
  private readonly _signal: WritableSignal<StatedSignal<T>>;
  private readonly initValue!: T;

  constructor(value: T) {
    this._signal = this.createStateSignal(value);
    this.initValue = value;
  }

  reset() {
    this._signal.set({
      value: this.initValue,
      initialized: false,
    });
  }

  get signal(): WritableSignal<StatedSignal<T>> {
    return this._signal;
  }

  get value(): T {
    return this._signal().value;
  }

  set value(newValue: T) {
    this._signal.set({
      ...this._signal(),
      value: newValue,
      initialized: true,
    });
  }

  get initialized(): boolean {
    return this._signal().initialized;
  }

  private createStateSignal<T>(value: T): WritableSignal<StatedSignal<T>> {
    return signal<StatedSignal<T>>({
      value: value,
      initialized: false,
    });
  }
}
