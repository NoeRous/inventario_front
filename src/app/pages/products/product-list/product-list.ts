import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Product } from '../../../../domain/product.model';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../service/ProductService';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    DataView,
    Tag,
    SelectButton
  ],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  layout: 'list' | 'grid' = 'grid';
  options: ('list' | 'grid')[] = ['list', 'grid'];

  products = signal<Product[]>([]); // señal vacía al inicio

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Como getProductsData() devuelve un Promise
     this.productService.getProductsData().subscribe((data) => {
      this.products.set(data.slice(0, 12)); // guardamos los primeros 12 productos
    });
  }

  get productList(): Product[] {
    return this.products(); // retorna los productos actuales
  }

  getSeverity(product: Product) {
    // Ajustado a los valores de tu backend
    switch (product.inventoryState) {
      case 'AVAILABLE':
        return 'success';
      case 'LOW_STOCK':
        return 'warning';
      case 'OUT_OF_STOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
