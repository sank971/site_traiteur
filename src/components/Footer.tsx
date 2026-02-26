import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "hsl(35, 30%, 97%)" }}>
              Saveurs <span className="text-primary">Créoles</span>
            </h3>
            <p style={{ color: "hsl(35, 20%, 55%)" }} className="text-sm max-w-xs">
              Traiteur antillais sur commande. Des saveurs authentiques pour tous vos événements.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4" style={{ color: "hsl(35, 30%, 97%)" }}>
              Contact
            </h4>
            <div className="space-y-3">
              <a href="tel:+33600000000" className="flex items-center gap-3 text-sm hover:text-primary transition-colors" style={{ color: "hsl(35, 20%, 55%)" }}>
                <Phone className="w-4 h-4" /> 06 00 00 00 00
              </a>
              <a href="mailto:contact@saveurs-creoles.fr" className="flex items-center gap-3 text-sm hover:text-primary transition-colors" style={{ color: "hsl(35, 20%, 55%)" }}>
                <Mail className="w-4 h-4" /> contact@saveurs-creoles.fr
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4" style={{ color: "hsl(35, 30%, 97%)" }}>
              Suivez-nous
            </h4>
            <a href="#" className="flex items-center gap-3 text-sm hover:text-primary transition-colors" style={{ color: "hsl(35, 20%, 55%)" }}>
              <Instagram className="w-4 h-4" /> @saveurscreoles
            </a>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-8 text-center">
          <p style={{ color: "hsl(35, 20%, 40%)" }} className="text-xs">
            © {new Date().getFullYear()} Saveurs Créoles — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
