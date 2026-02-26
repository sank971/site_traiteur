import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultDishes, defaultGallery } from "@/data/defaultContent";
import type { Dish, DishCategory, GalleryImage } from "@/types/content";

interface SiteContentContextValue {
  dishes: Dish[];
  gallery: GalleryImage[];
  addDish: (dish: Omit<Dish, "id">) => void;
  updateDish: (id: string, dish: Omit<Dish, "id">) => void;
  deleteDish: (id: string) => void;
  addGalleryImage: (image: Omit<GalleryImage, "id">) => void;
  updateGalleryImage: (id: string, image: Omit<GalleryImage, "id">) => void;
  deleteGalleryImage: (id: string) => void;
}

const DISHES_KEY = "saveurs-creoles-dishes";
const GALLERY_KEY = "saveurs-creoles-gallery";
const VALID_CATEGORIES: DishCategory[] = ["Entrée", "Plat", "Dessert", "Boisson", "Menu"];

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

const normalizeCategory = (category: unknown, fallback: DishCategory): DishCategory => {
  if (typeof category === "string" && VALID_CATEGORIES.includes(category as DishCategory)) {
    return category as DishCategory;
  }

  return fallback;
};

const normalizeDish = (dish: Partial<Dish>, fallback: Dish): Dish => ({
  id: dish.id ?? fallback.id,
  name: dish.name ?? fallback.name,
  description: dish.description ?? fallback.description,
  appetizingDescription: dish.appetizingDescription ?? dish.description ?? fallback.appetizingDescription,
  price: dish.price ?? fallback.price,
  category: normalizeCategory(dish.category, fallback.category),
  image: dish.image ?? fallback.image,
  accompaniments: Array.isArray(dish.accompaniments) ? dish.accompaniments : fallback.accompaniments,
  spiceLevel: typeof dish.spiceLevel === "number" ? Math.min(5, Math.max(1, dish.spiceLevel)) : fallback.spiceLevel,
});

const parseStored = <T,>(value: string | null, fallback: T): T => {
  if (!value) return fallback;

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

export const SiteContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [dishes, setDishes] = useState<Dish[]>(defaultDishes);
  const [gallery, setGallery] = useState<GalleryImage[]>(defaultGallery);

  useEffect(() => {
    const storedDishes = parseStored<Partial<Dish>[]>(localStorage.getItem(DISHES_KEY), defaultDishes);
    const safeDishes = storedDishes.map((dish, index) => normalizeDish(dish, defaultDishes[index] ?? defaultDishes[0]));
    setDishes(safeDishes);

    setGallery(parseStored(localStorage.getItem(GALLERY_KEY), defaultGallery));
  }, []);

  const addDish = (dish: Omit<Dish, "id">) => {
    setDishes((prev) => {
      const next = [...prev, { ...dish, id: `${dish.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}` }];
      localStorage.setItem(DISHES_KEY, JSON.stringify(next));
      return next;
    });
  };

  const updateDish = (id: string, dish: Omit<Dish, "id">) => {
    setDishes((prev) => {
      const next = prev.map((item) => (item.id === id ? { ...dish, id } : item));
      localStorage.setItem(DISHES_KEY, JSON.stringify(next));
      return next;
    });
  };

  const deleteDish = (id: string) => {
    setDishes((prev) => {
      const next = prev.filter((item) => item.id !== id);
      localStorage.setItem(DISHES_KEY, JSON.stringify(next));
      return next;
    });
  };

  const addGalleryImage = (image: Omit<GalleryImage, "id">) => {
    setGallery((prev) => {
      const next = [...prev, { ...image, id: `gallery-${Date.now()}` }];
      localStorage.setItem(GALLERY_KEY, JSON.stringify(next));
      return next;
    });
  };

  const updateGalleryImage = (id: string, image: Omit<GalleryImage, "id">) => {
    setGallery((prev) => {
      const next = prev.map((item) => (item.id === id ? { ...image, id } : item));
      localStorage.setItem(GALLERY_KEY, JSON.stringify(next));
      return next;
    });
  };

  const deleteGalleryImage = (id: string) => {
    setGallery((prev) => {
      const next = prev.filter((item) => item.id !== id);
      localStorage.setItem(GALLERY_KEY, JSON.stringify(next));
      return next;
    });
  };

  const value = useMemo(
    () => ({
      dishes,
      gallery,
      addDish,
      updateDish,
      deleteDish,
      addGalleryImage,
      updateGalleryImage,
      deleteGalleryImage,
    }),
    [dishes, gallery],
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error("useSiteContent doit être utilisé dans SiteContentProvider");
  }

  return context;
};
