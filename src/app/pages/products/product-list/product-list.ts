import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../service/ProductService';
import { Product } from '../../../../domain/product.model';

import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { environment } from '../../../../environments/environment.prod';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';

import { TableModule } from 'primeng/table';


@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, Tag, InputTextModule, SelectModule,IconFieldModule,InputIconModule,HttpClientModule,MultiSelectModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products = signal<Product[]>([]);
  loading = false;

  inventoryStates = ['DISPONIBLE', 'BAJO_STOCK', 'AGOTADO'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loading = true;
    this.productService.getProductsData().subscribe((data) => {
      this.products.set(data);
      this.loading = false;
    });
  }

  get productList(): Product[] {
    return this.products();
  }

  getSeverity(state: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
    switch (state) {
      case 'DISPONIBLE':
        return 'success';
      case 'BAJO_STOCK':
        return 'warn';
      case 'AGOTADO':
        return 'danger';
      default:
        return 'info';
    }
  }

  getImageUrl(imagePath: string | null | undefined): string {
    if (!imagePath?.trim()) {
      return '/assets/no-image.png';
    }
    const url = `${environment.apiUrl}${imagePath}`;
    return url;
  }
}
