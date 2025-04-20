import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NullableNumber, NullableString } from '@types';

@Component({
  selector: 'app-icon',
  imports: [NgOptimizedImage],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  standalone: true,
})
export class IconComponent implements OnInit {
  private _name = signal<NullableString>(null);
  private _width = signal<NullableNumber>(40);
  private _height = signal<NullableNumber>(40);

  @Input()
  set name(value: string) {
    this._name.set(value);
  }
  @Input()
  set width(value: number) {
    this._width.set(value);
  }
  @Input()
  set height(value: number) {
    this._height.set(value);
  }

  @Input() fileExtension: NullableString = 'svg';

  get width(): NullableNumber {
    return this._width();
  }
  get height(): NullableNumber {
    return this._height();
  }
  get name(): NullableString {
    return this._name();
  }

  readonly defaultPath: string = '/assets/';

  fullPath = computed<string>(
    () => `${this.defaultPath}${this._name()}.${this.fileExtension}`
  );

  ngOnInit(): void {
    console.log(this.fullPath());
  }
}
