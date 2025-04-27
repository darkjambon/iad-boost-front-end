import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

 setCookie(name: string, value: string, days: number): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

 deleteCookie(name: string): void {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

 private isTokenExpired(token: string): boolean {
  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const issuedAt = decodedPayload.iat;
    const oneDayInSeconds = 24 * 60 * 60;

    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime - issuedAt > oneDayInSeconds;
  } catch (error) {
    console.error('Invalid token format:', error);
    return true;
  }
}

 checkToken(token: string): boolean {
  if (token) {
    return !this.isTokenExpired(token);
  } else {
    return false;
  }
}
}
