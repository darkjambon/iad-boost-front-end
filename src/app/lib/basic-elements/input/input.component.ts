import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  signal,
  forwardRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NullableString } from '@types';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnChanges {
  @Input() label: NullableString = null;
  @Input() placeHolder: NullableString = null;
  @Input() required: boolean = false;
  @Input() type: NullableString = 'text';
  @Input() clearable: boolean = false;
  @Input() size: NullableString = 'medium';
  @Input() passwordToggle: boolean = false;
  @Input() width: NullableString = '100%';
  @Input()
  set disabled(value: boolean) {
    this._disabled.set(value);
  }

  private _disabled = signal<boolean>(false);
  get disabled(): boolean {
    return this._disabled();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['width']) {
      document.documentElement.style.setProperty('--input-width', this.width);
    }
  }

  //ANGULAR CUSTOM FORM CONTROL
  private _value = signal<string>('');
  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};
  get value(): string {
    return this._value();
  }
  set value(val: string) {
    this._value.set(val);
    this.onChange(val);
  }
  writeValue(value: string): void {
    this._value.set(value || '');
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
  }
}
