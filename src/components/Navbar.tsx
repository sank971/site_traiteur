import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "Carte", to: "/carte" },
  { label: "Plats", to: "/plats" },
  { label: "Galerie", to: "/galerie" },
  { label: "Événements", to: "/evenements" },
  { label: "Contact", to: "/contact" },
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
        <div className="flex items-center gap-2">
          <a href="tel:+33600000000" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            06 00 00 00 00
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm">
            <Link to="/contact">Demander un devis</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Ouvrir le menu de navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className={`rounded-md px-3 py-2 text-base transition-colors ${
                        location.pathname === item.to
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <a
                  href="tel:+33600000000"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  06 00 00 00 00
                </a>
                <SheetClose asChild>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
