import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private isConnected = signal<boolean>(false);
  private isLoading = signal<boolean>(false);
  private userCredentials = toSignal(
    user(this.auth).pipe(
      map(user => {
        console.log('jambon pipe', user);
        this.isConnected.set(!!user);
        return user;
      })
    ),
    { initialValue: null }
  );

  async loginWithEmail(email: string, password: string) {
    this.isLoading.set(true);
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.isConnected.set(true);
      await this.router.navigate(['/c']);
      return false;
    } catch (error) {
      return true;
    } finally {
      this.isLoading.set(false);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
      throw error;
    }
  }

  get currentUserCredential() {
    return this.userCredentials();
  }

  get isUserConnected() {
    return this.isConnected();
  }

  get isLoginLoading() {
    return this.isLoading();
  }
}
