export type DishCategory = "Entrée" | "Plat" | "Dessert" | "Boisson" | "Menu";

export interface Dish {
  id: string;
  name: string;
  description: string;
  appetizingDescription: string;
  price: string;
  category: DishCategory;
  image: string;
  accompaniments: string[];
  spiceLevel: number;
}

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  alt: string;
}
