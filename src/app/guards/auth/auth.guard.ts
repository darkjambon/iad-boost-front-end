import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const userCredential = await new Promise((resolve) => {
    const interval = setInterval(() => {
      const credential = authService.currentUserCredential;
      if (credential !== null) {
        clearInterval(interval);
        resolve(credential.user);
      }
    }, 50);
  });

  if (!userCredential) {
    await router.navigate(['/login']);
    return false;
  }
  return true;
};
