import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter, requestContextInterceptor } from '@analogjs/router';
import { withComponentInputBinding } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {REAL_ESTATE_COLLECTION_PROVIDER} from "@services/firestore/firestore.service";

const firebaseConfig = {
  projectId: 'iad-boost',
  appId: '1:547132413001:web:be68301af325dba3b31b98',
  storageBucket: 'iad-boost.firebasestorage.app',
  apiKey: 'AIzaSyDELRzV-J8VpDCEcoE0WbVHkNuHEdX5xFI',
  authDomain: 'iad-boost.firebaseapp.com',
  messagingSenderId: '547132413001',
  measurementId: 'G-D478CZE0S1',
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideFileRouter(withComponentInputBinding()),
    provideHttpClient(
      withFetch(),
      withInterceptors([requestContextInterceptor])
    ),
    provideFirebaseApp(() =>
      initializeApp(firebaseConfig)
    ),
    provideAuth(() => getAuth()),
    provideClientHydration(),
    provideFirestore(() => getFirestore()),
    REAL_ESTATE_COLLECTION_PROVIDER
  ],
};
