import PageShell from "@/components/PageShell";
import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

const ContactPage = () => {
  return (
    <PageShell>
      <Seo
        title="Contact & devis traiteur"
        description="Contactez Saveurs Créoles pour organiser votre buffet antillais, repas de mariage, anniversaire ou événement d'entreprise."
        path="/contact"
        keywords="contact traiteur, devis traiteur antillais, réserver traiteur créole"
      />
      <ContactSection />
    </PageShell>
  );
};

export default ContactPage;
