import { Routes } from '@angular/router';
import { AppComponent } from './layout/app.component';


export const routes: Routes = [
  // layout: ruta por defecto al `AppComponent`
  {
    path: '',
    component: AppComponent,
    children: [

    ]
  }
];
