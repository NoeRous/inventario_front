export type InventoryState = 'AVAILABLE' | 'LOW_STOCK' | 'OUT_OF_STOCK';

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  rating: number;
  inventoryState: InventoryState;
}
