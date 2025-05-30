import { Component } from '@angular/core';
import { LoginComponent } from '@full-component/login/login.component';
import { AuthService } from '@services/auth/auth.service';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  canActivate: [() => true],
  providers: [AuthService],
};

@Component({
  standalone: true,
  imports: [LoginComponent],
  template: `<app-login></app-login>`,
})
export default class ProductsComponent {}
