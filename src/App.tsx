import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteContentProvider } from "@/hooks/use-site-content";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CartePage from "./pages/CartePage";
import PlatsPage from "./pages/PlatsPage";
import GaleriePage from "./pages/GaleriePage";
import AdminPage from "./pages/AdminPage";
import PlatDetailPage from "./pages/PlatDetailPage";
import EvenementsPage from "./pages/EvenementsPage";
import EvenementDetailPage from "./pages/EvenementDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SiteContentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/carte" element={<CartePage />} />
            <Route path="/plats" element={<PlatsPage />} />
            <Route path="/plats/:dishId" element={<PlatDetailPage />} />
            <Route path="/galerie" element={<GaleriePage />} />
            <Route path="/evenements" element={<EvenementsPage />} />
            <Route path="/evenements/:slug" element={<EvenementDetailPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SiteContentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
