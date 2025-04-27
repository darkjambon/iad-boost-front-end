import {Component, inject} from '@angular/core';
import { IconComponent } from '@elements/icon/icon.component';
import {ButtonComponent} from "@elements/button/button.component";
import {AuthService} from "@services/auth/auth.service";

@Component({
  selector: 'app-header',
  imports: [IconComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  authService = inject(AuthService);

  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
}
