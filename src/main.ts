import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, Route } from '@angular/router';
import { DynamicLoaderComponent } from './app/dynamic-loader/dynamic-loader.component';

const routes: Route[] = [
  { path: '', redirectTo: 'load', pathMatch: 'full' },
  { path: 'load', component: DynamicLoaderComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
  ]
}).catch(err => console.error(err));
