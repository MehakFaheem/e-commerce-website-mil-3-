// types/Product.ts
import { StaticImageData } from 'next/image';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string | StaticImageData;
  quantity?: number;
}