export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;

  // extras útiles
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;

  // cambia 👇
  category: string;

  thumbnail: string;
  images: string[];
}