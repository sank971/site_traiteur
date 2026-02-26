import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

const siteUrl = "https://saveurs-creoles.vercel.app";

const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const Seo = ({ title, description, path, keywords }: SeoProps) => {
  useEffect(() => {
    const fullTitle = `${title} | Saveurs Créoles`;
    const canonicalUrl = `${siteUrl}${path}`;

    document.title = fullTitle;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="keywords"]', "name", "keywords", keywords ?? "traiteur antillais, cuisine créole, carte antillaise");
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [title, description, path, keywords]);

  return null;
};

export default Seo;
