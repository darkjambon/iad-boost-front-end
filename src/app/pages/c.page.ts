import {Component, inject, OnInit} from '@angular/core';
import {ConnectedLayerComponent} from "@full-component/connected-layer/connected-layer.component";
import {Router, RouterOutlet} from "@angular/router";
import {authGuard} from "@guards/auth/auth.guard";
import {RouteMeta} from "@analogjs/router";

export const routeMeta: RouteMeta = {
  canActivate: [authGuard],
};

@Component({
  standalone: true,
  imports: [
    ConnectedLayerComponent,
    RouterOutlet
  ],
  template: `
    <app-connected-layer>
        <router-outlet></router-outlet>
    </app-connected-layer>
  `,
})
export default class ProductsComponent implements OnInit {
  router = inject(Router);

  async ngOnInit(): Promise<void> {
    await this.router.navigate(['/c/visit-proof']);
  }
}
