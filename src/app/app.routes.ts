import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent, data: { page: 'home' } },
  { path: 'services', component: AppComponent, data: { page: 'services' } },
  { path: 'contacts', component: AppComponent, data: { page: 'contacts' } },
  { path: '**', redirectTo: '' }
];
