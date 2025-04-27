import { bootstrapApplication } from '@angular/platform-browser';

import App from './app/app-root.ag';
import { appConfig } from '@/app.config';

import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import '@shoelace-style/shoelace/dist/shoelace.js';

bootstrapApplication(App, appConfig);
