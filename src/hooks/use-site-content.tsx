import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultDishes, defaultGallery } from "@/data/defaultContent";
import type { Dish, GalleryImage } from "@/types/content";

interface SiteContentContextValue {
  dishes: Dish[];
  gallery: GalleryImage[];
  addDish: (dish: Omit<Dish, "id">) => void;
  addGalleryImage: (image: Omit<GalleryImage, "id">) => void;
}

const DISHES_KEY = "saveurs-creoles-dishes";
const GALLERY_KEY = "saveurs-creoles-gallery";

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

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
    setDishes(parseStored(localStorage.getItem(DISHES_KEY), defaultDishes));
    setGallery(parseStored(localStorage.getItem(GALLERY_KEY), defaultGallery));
  }, []);

  const addDish = (dish: Omit<Dish, "id">) => {
    setDishes((prev) => {
      const next = [...prev, { ...dish, id: `${dish.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}` }];
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

  const value = useMemo(
    () => ({
      dishes,
      gallery,
      addDish,
      addGalleryImage,
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
