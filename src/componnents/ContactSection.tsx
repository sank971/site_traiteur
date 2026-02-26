import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setForm({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-primary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Passez Commande
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous répondons sous 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Téléphone</h4>
                <a href="tel:+33600000000" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  06 00 00 00 00
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Email</h4>
                <a href="mailto:contact@saveurs-creoles.fr" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  contact@saveurs-creoles.fr
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Zone de livraison</h4>
                <p className="text-muted-foreground text-sm">
                  Île-de-France et alentours
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4 bg-background p-8 rounded-2xl border border-border shadow-warm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Votre nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-muted/50"
              />
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-muted/50"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Input
                placeholder="Téléphone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-muted/50"
              />
              <Input
                type="date"
                placeholder="Date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="bg-muted/50"
              />
              <Input
                type="number"
                placeholder="Nb convives"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="bg-muted/50"
              />
            </div>
            <Textarea
              placeholder="Décrivez-nous votre événement et vos envies..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="bg-muted/50"
            />
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm gap-2">
              <Send className="w-4 h-4" />
              Envoyer ma demande
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
