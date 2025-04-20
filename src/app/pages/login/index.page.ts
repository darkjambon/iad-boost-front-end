import { Component } from '@angular/core';
import {LoginComponent} from "@full-component/login/login.component";

@Component({
  standalone: true,
  imports: [
    LoginComponent
  ],
  template: `<app-login></app-login>`,
})
export default class ProductsComponent {}
