import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  signal,
} from '@angular/core';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { NullableString } from '@types';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonComponent {
  @Input() variant: string = 'default';
  @Input() outline: boolean = false;
  @Input() size: string = 'default';
  @Input() prefix: NullableString = null;
  @Input() suffix: NullableString = null;
  @Input() pill: boolean = false;
  @Input() caret: boolean = false;
  @Input()
  set loading(value: boolean) {
    this._loading.set(value);
  }
  @Input()
  set label(label: string) {
    this._label.set(label);
  }
  @Input()
  set disabled(value: boolean) {
    this._disabled.set(value);
  }

  private _loading = signal<boolean>(false);
  get loading() {
    return this._loading();
  }
  private _disabled = signal<boolean>(false);
  get disabled(): boolean {
    return this._disabled();
  }
  private _label = signal<string>('');
  get label(): string {
    return this._label();
  }
}
