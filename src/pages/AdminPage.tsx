import { FormEvent, useState } from "react";
import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { assetPhotoOptions } from "@/data/assetPhotoCatalog";
import { useSiteContent } from "@/hooks/use-site-content";
import type { Dish, DishCategory, GalleryImage } from "@/types/content";

const categories: DishCategory[] = ["Entrée", "Plat", "Dessert", "Boisson", "Menu"];

const getDishFormFromDish = (dish: Omit<Dish, "id">) => ({
  ...dish,
  accompaniments: dish.accompaniments.join(", "),
});

const getGalleryFormFromImage = (image: Omit<GalleryImage, "id">) => ({ ...image });

const emptyDishForm = {
  name: "",
  description: "",
  appetizingDescription: "",
  price: "",
  category: "Plat" as DishCategory,
  image: "",
  accompaniments: "",
  spiceLevel: 3,
};

const emptyGalleryForm = { title: "", image: "", alt: "" };

const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Impossible de lire le fichier image"));
    reader.readAsDataURL(file);
  });

const AdminPage = () => {
  const { dishes, gallery, addDish, updateDish, deleteDish, addGalleryImage, updateGalleryImage, deleteGalleryImage } = useSiteContent();

  const [dishForm, setDishForm] = useState(emptyDishForm);
  const [editingDishId, setEditingDishId] = useState<string | null>(null);

  const [galleryForm, setGalleryForm] = useState(emptyGalleryForm);
  const [editingGalleryId, setEditingGalleryId] = useState<string | null>(null);

  const onDishAssetSelected = (assetPath: string) => {
    if (!assetPath) return;
    setDishForm((prev) => ({ ...prev, image: assetPath }));
  };

  const onGalleryAssetSelected = (assetPath: string) => {
    if (!assetPath) return;
    setGalleryForm((prev) => ({ ...prev, image: assetPath }));
  };

  const onDishImageImport = async (file?: File) => {
    if (!file) return;
    const imageDataUrl = await readFileAsDataUrl(file);
    setDishForm((prev) => ({ ...prev, image: imageDataUrl }));
  };

  const onGalleryImageImport = async (file?: File) => {
    if (!file) return;
    const imageDataUrl = await readFileAsDataUrl(file);
    setGalleryForm((prev) => ({ ...prev, image: imageDataUrl }));
  };

  const submitDish = (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      name: dishForm.name,
      description: dishForm.description,
      appetizingDescription: dishForm.appetizingDescription,
      price: dishForm.price,
      category: dishForm.category,
      image: dishForm.image,
      accompaniments: dishForm.accompaniments.split(",").map((item) => item.trim()).filter(Boolean),
      spiceLevel: dishForm.spiceLevel,
    };

    if (editingDishId) {
      updateDish(editingDishId, payload);
    } else {
      addDish(payload);
    }

    setEditingDishId(null);
    setDishForm(emptyDishForm);
  };

  const submitGallery = (event: FormEvent) => {
    event.preventDefault();

    if (editingGalleryId) {
      updateGalleryImage(editingGalleryId, galleryForm);
    } else {
      addGalleryImage(galleryForm);
    }

    setEditingGalleryId(null);
    setGalleryForm(emptyGalleryForm);
  };

  return (
    <PageShell>
      <Seo
        title="Admin"
        description="Espace admin pour ajouter et modifier les plats et les photos à la galerie du site Saveurs Créoles."
        path="/admin"
      />
      <section className="container mx-auto px-6 py-16 space-y-12">
        <header>
          <h1 className="font-display text-4xl font-bold">Administration du contenu</h1>
          <p className="text-muted-foreground">Toutes les catégories de plats (entrée/plat/dessert/boisson/menu) sont ajoutables et modifiables ici.</p>
        </header>

        <form onSubmit={submitDish} className="space-y-4 border border-border rounded-xl p-6 bg-card">
          <h2 className="font-display text-2xl">{editingDishId ? "Modifier un plat" : "Ajouter un plat"}</h2>
          <Input required placeholder="Nom du plat" value={dishForm.name} onChange={(e) => setDishForm((p) => ({ ...p, name: e.target.value }))} />
          <Textarea required placeholder="Description courte" value={dishForm.description} onChange={(e) => setDishForm((p) => ({ ...p, description: e.target.value }))} />
          <Textarea required placeholder="Description alléchante" value={dishForm.appetizingDescription} onChange={(e) => setDishForm((p) => ({ ...p, appetizingDescription: e.target.value }))} />
          <div className="grid md:grid-cols-3 gap-4">
            <Input required placeholder="Prix (ex: 15€)" value={dishForm.price} onChange={(e) => setDishForm((p) => ({ ...p, price: e.target.value }))} />
            <select
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              value={dishForm.category}
              onChange={(e) => setDishForm((p) => ({ ...p, category: e.target.value as DishCategory }))}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <Input required placeholder="URL ou chemin image" value={dishForm.image} onChange={(e) => setDishForm((p) => ({ ...p, image: e.target.value }))} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="space-y-2 text-sm text-muted-foreground">
              Choisir une photo existante (assets)
              <select
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
                defaultValue=""
                onChange={(e) => onDishAssetSelected(e.target.value)}
              >
                <option value="">Sélectionner une image</option>
                {assetPhotoOptions.map((asset) => (
                  <option key={asset.value} value={asset.value}>{asset.label}</option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-muted-foreground">
              Importer une image
              <Input type="file" accept="image/*" onChange={async (e) => onDishImageImport(e.target.files?.[0])} />
            </label>
          </div>
          {dishForm.image && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Photo actuelle du plat</p>
              <img src={dishForm.image} alt={`Prévisualisation ${dishForm.name || "plat"}`} className="h-40 w-full rounded-lg border border-border object-cover md:w-72" />
            </div>
          )}
          <Input required placeholder="Accompagnements (séparés par des virgules)" value={dishForm.accompaniments} onChange={(e) => setDishForm((p) => ({ ...p, accompaniments: e.target.value }))} />
          <label className="block text-sm">
            Score épice: <span className="font-semibold">{dishForm.spiceLevel}/5</span>
            <input className="w-full mt-2" type="range" min={1} max={5} value={dishForm.spiceLevel} onChange={(e) => setDishForm((p) => ({ ...p, spiceLevel: Number(e.target.value) }))} />
          </label>
          <div className="flex gap-3">
            <Button type="submit">{editingDishId ? "Enregistrer" : "Ajouter le plat"}</Button>
            {editingDishId && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setEditingDishId(null);
                  setDishForm(emptyDishForm);
                }}
              >
                Annuler
              </Button>
            )}
          </div>
        </form>

        <section className="space-y-4 border border-border rounded-xl p-6 bg-card">
          <h2 className="font-display text-2xl">Plats existants</h2>
          <div className="space-y-3">
            {dishes.map((dish) => (
              <article key={dish.id} className="border border-border rounded-lg p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold">{dish.name}</h3>
                  <p className="text-sm text-muted-foreground">{dish.category} • {dish.price}</p>
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={() => {
                    setEditingDishId(dish.id);
                    setDishForm(getDishFormFromDish(dish));
                  }}>Modifier</Button>
                  <Button type="button" variant="destructive" onClick={() => deleteDish(dish.id)}>Supprimer</Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <form onSubmit={submitGallery} className="space-y-4 border border-border rounded-xl p-6 bg-card">
          <h2 className="font-display text-2xl">{editingGalleryId ? "Modifier une photo" : "Ajouter une photo à la galerie"}</h2>
          <Input required placeholder="Titre" value={galleryForm.title} onChange={(e) => setGalleryForm((p) => ({ ...p, title: e.target.value }))} />
          <Input required placeholder="URL ou chemin image" value={galleryForm.image} onChange={(e) => setGalleryForm((p) => ({ ...p, image: e.target.value }))} />
          <div className="grid md:grid-cols-2 gap-4">
            <label className="space-y-2 text-sm text-muted-foreground">
              Choisir une photo existante (assets)
              <select
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
                defaultValue=""
                onChange={(e) => onGalleryAssetSelected(e.target.value)}
              >
                <option value="">Sélectionner une image</option>
                {assetPhotoOptions.map((asset) => (
                  <option key={asset.value} value={asset.value}>{asset.label}</option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-muted-foreground">
              Importer une image
              <Input type="file" accept="image/*" onChange={async (e) => onGalleryImageImport(e.target.files?.[0])} />
            </label>
          </div>
          {galleryForm.image && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Photo actuelle de la galerie</p>
              <img src={galleryForm.image} alt={`Prévisualisation ${galleryForm.title || "galerie"}`} className="h-40 w-full rounded-lg border border-border object-cover md:w-72" />
            </div>
          )}
          <Input required placeholder="Texte alternatif (SEO image)" value={galleryForm.alt} onChange={(e) => setGalleryForm((p) => ({ ...p, alt: e.target.value }))} />
          <div className="flex gap-3">
            <Button type="submit">{editingGalleryId ? "Enregistrer" : "Ajouter la photo"}</Button>
            {editingGalleryId && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setEditingGalleryId(null);
                  setGalleryForm(emptyGalleryForm);
                }}
              >
                Annuler
              </Button>
            )}
          </div>
        </form>

        <section className="space-y-4 border border-border rounded-xl p-6 bg-card">
          <h2 className="font-display text-2xl">Photos existantes</h2>
          <div className="space-y-3">
            {gallery.map((image) => (
              <article key={image.id} className="border border-border rounded-lg p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.alt}</p>
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" onClick={() => {
                    setEditingGalleryId(image.id);
                    setGalleryForm(getGalleryFormFromImage(image));
                  }}>Modifier</Button>
                  <Button type="button" variant="destructive" onClick={() => deleteGalleryImage(image.id)}>Supprimer</Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  );
};

export default AdminPage;
