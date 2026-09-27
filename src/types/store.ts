export type ProductCategory =
  | 'all'
  | 'beauty'
  | 'hair'
  | 'perfumes'
  | 'fashion'
  | 'personal'
  | 'essentials';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  details?: string[];
  featured?: boolean;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatarText: string;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  city: string;
  fullAddress: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  openingHours: string;
  fridayHours: string;
  googleMapsUrl: string;
}
