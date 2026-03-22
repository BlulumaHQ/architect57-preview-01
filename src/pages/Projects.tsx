import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { featuredProjects, collections } from "@/data/portfolio";

const Projects = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-36 pb-20 md:pt-44 md:pb-28">
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

    {/* Featured Projects */}
    <section className="pb-24 md:pb-32">
      <div className="container-site">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">
              Featured Work
            </span>
          </div>
        </ScrollReveal>
        <div className="space-y-12 md:space-y-16">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 80}>
              <Link
                to={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                  <div className="absolute bottom-0 right-0 p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-light tracking-[-0.01em]">
                      {project.title}
                    </h2>
                    <span className="text-[13px] text-muted-foreground font-light mt-1 block">
                      {project.category} — {project.location}
                    </span>
                  </div>
                  <span className="text-[13px] text-muted-foreground font-light hidden md:block">
                    {project.year}
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

    {/* Collections */}
    <section className="py-24 md:py-32">
      <div className="container-site">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">
              Project Collections
            </span>
            <h2 className="mt-4 font-light text-balance">By Category</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {collections.map((col, i) => (
            <ScrollReveal key={col.slug} delay={i * 80}>
              <Link
                to={`/projects/collection/${col.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={col.coverImage}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white/70 text-[11px] tracking-[0.15em] uppercase font-normal">
                      {col.items.length} Projects
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-light">{col.title}</span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
