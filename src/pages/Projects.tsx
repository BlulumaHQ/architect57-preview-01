import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import projectImg1 from "@/assets/project-1.jpg";
import projectImg2 from "@/assets/project-2.jpg";
import projectImg3 from "@/assets/project-3.jpg";
import projectImg4 from "@/assets/project-4.jpg";
import projectImg5 from "@/assets/project-5.jpg";
import projectImg6 from "@/assets/project-6.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";

const galleryImages = [
  { src: projectImg1, title: "Glass Pavilion", category: "Commercial" },
  { src: projectImg2, title: "Harbour Tower", category: "High-Rise Residential" },
  { src: projectImg3, title: "Westside Works", category: "Industrial" },
  { src: projectImg4, title: "Union Square", category: "Mixed-Use Development" },
  { src: projectImg5, title: "Civic Centre", category: "Institutional" },
  { src: projectImg6, title: "Green Terrace", category: "Sustainable Design" },
  { src: aboutHero, title: "Light Well House", category: "Residential" },
  { src: heroImg1, title: "Albion Centre", category: "Commercial" },
  { src: heroImg2, title: "Richmond Commons", category: "Community" },
];

const Projects = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container-site">
        <ScrollReveal>
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">Portfolio</span>
          <h1 className="mt-4 text-balance">Selected Projects</h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg font-light">
            A curated selection of our integrated building design work across commercial, residential, industrial, institutional, and mixed-use typologies.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Gallery */}
    <section className="pb-24 md:pb-32">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="group relative overflow-hidden aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white/70 text-[11px] tracking-[0.15em] uppercase font-normal">{img.category}</span>
                  <span className="text-white text-lg block font-light mt-1">{img.title}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
