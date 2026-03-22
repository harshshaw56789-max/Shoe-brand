export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Running' | 'Sneakers' | 'Sports' | 'Casual';
  image: string;
  images: string[];
  sizes: number[];
  colors: { name: string; hex: string }[];
  rating: number;
  reviews: number;
  featured?: boolean;
}

export interface CartItem extends Product {
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}

export type Category = Product['category'];
