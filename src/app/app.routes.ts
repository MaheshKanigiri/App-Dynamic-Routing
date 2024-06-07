import { Routes } from '@angular/router';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';

export const routes: Routes = [
    { path: '', redirectTo: 'load', pathMatch: 'full' },
    { path: 'load', component: DynamicLoaderComponent },
  ];
