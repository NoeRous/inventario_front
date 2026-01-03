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

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DataView,
    Tag,

    SelectButton,
    FormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
 layout: 'list' | 'grid' = 'grid';

  products = signal<Product[]>([]);

  options: string[]  = ['list', 'grid'] as const;;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products.set([...data.slice(0, 12)]);
    });
  }

  get productList() {
  return this.products();
}


  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warn';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
