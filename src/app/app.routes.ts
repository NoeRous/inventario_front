import { Routes } from '@angular/router';
import { AppComponent } from './layout/app.component';
import { ProductList } from './pages/products/product-list/product-list';
import { HomeComponent } from './pages/home/home';


export const routes: Routes = [
  // layout: ruta por defecto al `AppComponent`
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'productos', component: ProductList },
      { path: 'categorias', component: ProductList }
    ]
  }
];
