// Product type definitions
export const PRODUCT_CATEGORIES = {
  FRUITS: "Fruits",
  VEGETABLES: "Vegetables",
  DAIRY: "Dairy",
  MEAT: "Meat",
  BAKERY: "Bakery",
  BEVERAGES: "Beverages",
  PANTRY: "Pantry",
};

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  emoji: string;
  stock: number;
  description: string;
  sku: string;
  weight: number;
  unit: string;
}

export interface CartItem extends Product {
  quantity: number;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  promoCode?: string;
  promoApplied: boolean;
}
