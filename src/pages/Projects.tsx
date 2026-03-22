import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import {
  featuredProjects,
  collections,
  projectCategories,
  type ProjectCategory,
} from "@/data/portfolio";

// Build a unified list of ALL projects for the grid
interface GridProject {
  image: string;
  title: string;
  category: string;
  location?: string;
  link?: string; // detail page link for featured projects
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  // Top 3 featured projects (fixed, not filtered)
  const topFeatured = featuredProjects.slice(0, 3);

  // All projects: featured + collection items merged
  const allProjects = useMemo<GridProject[]>(() => {
    const projects: GridProject[] = [];

    // Add featured projects
    featuredProjects.forEach((p) => {
      projects.push({
        image: p.heroImage,
        title: p.title,
        category: p.category,
        location: p.location,
        link: `/projects/${p.slug}`,
      });
    });

    // Add collection items (skip duplicates that are already featured)
    const featuredTitles = new Set(featuredProjects.map((p) => p.title));
    collections.forEach((col) => {
      col.items.forEach((item) => {
        if (!featuredTitles.has(item.title)) {
          projects.push({
            image: item.image,
            title: item.title,
            category: col.category,
            location: item.location,
          });
        }
      });
    });

    return projects;
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="container-site">
          <ScrollReveal>
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">
              Portfolio
            </span>
            <h1 className="mt-4 font-light text-balance">Selected Projects</h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg font-light">
              A curated selection of our integrated building design work across
              commercial, residential, industrial, institutional, and mixed-use
              typologies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects — 3 columns */}
      <section className="pb-20 md:pb-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="mb-10">
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">
                Featured Work
              </span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topFeatured.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 80}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowRight size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-lg font-light tracking-[-0.01em]">
                      {project.title}
                    </h2>
                    <span className="text-[12px] text-muted-foreground font-light mt-1 block">
                      {project.category} — {project.location}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-site">
        <div className="border-t border-border" />
      </div>

      {/* Filter Bar */}
      <section className="pt-20 md:pt-28 pb-10">
        <div className="container-site">
          <ScrollReveal>
            <div className="mb-10">
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">
                All Projects
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[12px] tracking-[0.08em] uppercase px-5 py-2.5 border transition-all duration-300 active:scale-[0.97] ${
                    activeFilter === cat
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/15 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Projects Grid — 4 columns */}
      <section className="pb-24 md:pb-32">
        <div className="container-site">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProjects.map((project, i) => {
                const CardWrapper = project.link ? Link : "div";
                const cardProps = project.link
                  ? { to: project.link }
                  : {};

                return (
                  <ScrollReveal key={`${project.title}-${i}`} delay={i * 50}>
                    <CardWrapper
                      {...(cardProps as any)}
                      className="group block"
                    >
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                        {project.link && (
                          <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <ArrowRight size={16} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="mt-3">
                        <h3 className="text-[15px] font-light tracking-[-0.01em]">
                          {project.title}
                        </h3>
                        <span className="text-[11px] text-muted-foreground font-light mt-0.5 block">
                          {project.category}
                          {project.location ? ` — ${project.location}` : ""}
                        </span>
                      </div>
                    </CardWrapper>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg font-light">
                No projects in this category yet.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-6 text-[13px] tracking-[0.1em] uppercase text-foreground underline underline-offset-4 hover:no-underline transition-all"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
