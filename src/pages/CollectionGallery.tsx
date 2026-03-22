import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft } from "lucide-react";
import { allProjects, projectCategories, type ProjectCategory } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const CollectionGallery = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  
  // Find the category matching the slug
  const category = projectCategories.find(
    (c) => c !== "All" && c.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  ) as Exclude<ProjectCategory, "All"> | undefined;

  if (!category) return <Navigate to="/projects" replace />;

  const categoryProjects = allProjects.filter((p) => p.category === category);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="container-site">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> {t("collection.back")}
          </Link>
          <ScrollReveal>
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">
              {t("collection.label")}
            </span>
            <h1 className="mt-4 font-light">{t(`cat.${category}`)}</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryProjects.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 70}>
                <div className="group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                  </div>
                  <div className="pt-4 pb-2">
                    <span className="text-[15px] font-light block">
                      {item.title}
                    </span>
                    {item.location && (
                      <span className="text-[13px] text-muted-foreground font-light block">
                        {item.location}
                      </span>
                    )}
                    {item.area && (
                      <span className="text-[12px] text-muted-foreground/70 font-light block mt-0.5">
                        {item.area}
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CollectionGallery;
