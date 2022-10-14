/**
 * Data types para productos
 */

export type TypeRating = {
  rate: number;
  count: number;
};

export type TypeProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TypeRating;
};
