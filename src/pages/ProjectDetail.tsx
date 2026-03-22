import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft } from "lucide-react";
import { featuredProjects } from "@/data/portfolio";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24">
          <div className="container-site">
            <span className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-normal">
              {project.category}
            </span>
            <h1 className="text-white mt-3 font-light">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="pt-10 md:pt-14">
        <div className="container-site">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
        </div>
      </section>

      {/* Info + Description */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <ScrollReveal>
              <div className="lg:col-span-2">
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80">
                  {project.description}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                {project.details.map((d) => (
                  <div key={d.label} className="border-t border-border pt-4">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                      {d.label}
                    </span>
                    <span className="text-[15px] font-light">{d.value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-4">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                    Location
                  </span>
                  <span className="text-[15px] font-light">{project.location}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                    Year
                  </span>
                  <span className="text-[15px] font-light">{project.year}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="space-y-5">
            {project.images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} — ${i + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
