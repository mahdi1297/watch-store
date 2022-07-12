export interface ProductModel {
  id: string | number;
  title: string;
  slug: string;
  price: number;
  main_image: string;
  images: string[];
  description: string;
  country: string;
  material: string;
  waranty: string;
  features: any;
  colors: string[];
  hasSale: boolean;
  salePercent?: number;
  saledPrice?: number;
  brand?: string;
}
