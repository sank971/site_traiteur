import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Carte", to: "/carte" },
  { label: "Plats", to: "/plats" },
  { label: "Galerie", to: "/galerie" },
  { label: "Événements", to: "/evenements" },
  { label: "Admin", to: "/admin" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 gap-4">
        <Link to="/" className="font-display text-2xl font-bold text-foreground whitespace-nowrap">
          Saveurs <span className="text-primary">Créoles</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 font-sans text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={location.pathname === item.to ? "text-primary" : "text-muted-foreground hover:text-primary transition-colors"}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+33600000000" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            06 00 00 00 00
          </a>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm">
            <Link to="/admin">Ajouter</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
