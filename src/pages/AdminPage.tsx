import { FormEvent, useState } from "react";
import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSiteContent } from "@/hooks/use-site-content";
import type { DishCategory } from "@/types/content";

const categories: DishCategory[] = ["Entrée", "Plat", "Dessert", "Boisson", "Accompagnement"];

const AdminPage = () => {
  const { addDish, addGalleryImage } = useSiteContent();
  const [dishForm, setDishForm] = useState({ name: "", description: "", price: "", category: "Plat" as DishCategory, image: "" });
  const [galleryForm, setGalleryForm] = useState({ title: "", image: "", alt: "" });

  const submitDish = (event: FormEvent) => {
    event.preventDefault();
    addDish(dishForm);
    setDishForm({ name: "", description: "", price: "", category: "Plat", image: "" });
  };

  const submitGallery = (event: FormEvent) => {
    event.preventDefault();
    addGalleryImage(galleryForm);
    setGalleryForm({ title: "", image: "", alt: "" });
  };

  return (
    <PageShell>
      <Seo
        title="Admin"
        description="Espace admin pour ajouter de nouveaux plats et des photos à la galerie du site Saveurs Créoles."
        path="/admin"
      />
      <section className="container mx-auto px-6 py-16 space-y-12">
        <header>
          <h1 className="font-display text-4xl font-bold">Administration du contenu</h1>
          <p className="text-muted-foreground">Ajoutez de nouveaux plats et photos (stockage local pour une démo rapide).</p>
        </header>

        <form onSubmit={submitDish} className="space-y-4 border border-border rounded-xl p-6 bg-card">
          <h2 className="font-display text-2xl">Ajouter un plat</h2>
          <Input required placeholder="Nom du plat" value={dishForm.name} onChange={(e) => setDishForm((p) => ({ ...p, name: e.target.value }))} />
          <Textarea required placeholder="Description" value={dishForm.description} onChange={(e) => setDishForm((p) => ({ ...p, description: e.target.value }))} />
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
            <Input required type="url" placeholder="URL image" value={dishForm.image} onChange={(e) => setDishForm((p) => ({ ...p, image: e.target.value }))} />
          </div>
          <Button type="submit">Ajouter le plat</Button>
        </form>

        <form onSubmit={submitGallery} className="space-y-4 border border-border rounded-xl p-6 bg-card">
          <h2 className="font-display text-2xl">Ajouter une photo à la galerie</h2>
          <Input required placeholder="Titre" value={galleryForm.title} onChange={(e) => setGalleryForm((p) => ({ ...p, title: e.target.value }))} />
          <Input required type="url" placeholder="URL image" value={galleryForm.image} onChange={(e) => setGalleryForm((p) => ({ ...p, image: e.target.value }))} />
          <Input required placeholder="Texte alternatif (SEO image)" value={galleryForm.alt} onChange={(e) => setGalleryForm((p) => ({ ...p, alt: e.target.value }))} />
          <Button type="submit">Ajouter la photo</Button>
        </form>
      </section>
    </PageShell>
  );
};

export default AdminPage;
