import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/portfolio";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = featuredProjects.findIndex((p) => p.slug === slug);
  const project = featuredProjects[projectIndex];

  if (!project) return <Navigate to="/projects" replace />;

  const prevProject =
    projectIndex > 0 ? featuredProjects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < featuredProjects.length - 1
      ? featuredProjects[projectIndex + 1]
      : null;

  const galleryImages = project.images || [project.image];
  const projectDetails = project.details || [
    { label: "Category", value: project.category },
    ...(project.location ? [{ label: "Location", value: project.location }] : []),
    ...(project.area ? [{ label: "Area", value: project.area }] : []),
    ...(project.budget ? [{ label: "Budget", value: project.budget }] : []),
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-14 md:pb-20">
          <div className="container-site">
            <span className="text-white/50 text-[11px] tracking-[0.2em] uppercase font-normal">
              {project.category}
            </span>
            <h1 className="text-white mt-3 font-light">{project.title}</h1>
            <span className="text-white/50 text-[13px] font-light mt-2 block">
              {project.location}
            </span>
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
              <div className="space-y-5">
                {projectDetails.map((d) => (
                  <div key={d.label} className="border-t border-border pt-4">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-1">
                      {d.label}
                    </span>
                    <span className="text-[15px] font-light">{d.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="space-y-5">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 60}>
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

      {/* Prev / Next Navigation */}
      <section className="border-t border-border">
        <div className="container-site">
          <div className="grid grid-cols-2">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="group py-10 md:py-14 pr-6 border-r border-border hover:bg-muted/30 transition-colors"
              >
                <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                  Previous
                </span>
                <span className="text-lg font-light group-hover:text-foreground transition-colors flex items-center gap-2">
                  <ArrowLeft size={16} className="text-muted-foreground" />
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div className="border-r border-border" />
            )}
            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group py-10 md:py-14 pl-6 text-right hover:bg-muted/30 transition-colors"
              >
                <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-2">
                  Next
                </span>
                <span className="text-lg font-light group-hover:text-foreground transition-colors flex items-center justify-end gap-2">
                  {nextProject.title}
                  <ArrowRight size={16} className="text-muted-foreground" />
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
