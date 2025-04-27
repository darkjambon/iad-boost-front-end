import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  Signal,
  signal,
  inject,
  WritableSignal,
} from '@angular/core';
import { IconComponent } from '@elements/icon/icon.component';
import { InputComponent } from '@elements/input/input.component';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardComponent } from '@elements/card/card.component';
import { ButtonComponent } from '@elements/button/button.component';
import { AuthService } from '@services/auth/auth.service';
import { ErrorCardComponent } from '@elements/error-card/error-card.component';

@Component({
  selector: 'app-login',
  imports: [
    IconComponent,
    InputComponent,
    ReactiveFormsModule,
    CardComponent,
    ButtonComponent,
    ErrorCardComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class LoginComponent implements OnInit {
  private fb: FormBuilder = new FormBuilder();
  private authService = inject(AuthService);

  private _loginForm!: Signal<FormGroup>;
  private _showError: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    this._loginForm = signal<FormGroup>(
      this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      })
    );
  }

  get showError(): boolean {
    return this._showError();
  }

  get email() {
    return this._loginForm().get('email');
  }

  get password() {
    return this._loginForm().get('password');
  }

  async onSubmit() {
    if (this._loginForm().valid) {
      const error = await this.authService.loginWithEmail(
        this.email?.value,
        this.password?.value
      );
      if (error) {
        this._showError.set(true);
        this.loginForm.reset();
      }
    }
  }

  get loginForm(): FormGroup {
    return this._loginForm();
  }

  get isLoading(): boolean {
    return this.authService.isLoginLoading;
  }

  removeError() {
    this._showError.set(false);
  }
}
