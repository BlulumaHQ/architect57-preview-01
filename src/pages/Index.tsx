import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileCheck, Layers, Ruler } from "lucide-react";

const heroImage = "https://static.wixstatic.com/media/c77437_8f513977da374a51b9c04eed23736b82~mv2.jpg/v1/fill/w_600,h_158,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Architect57%20Front%20240131.jpg";

const services = [
  { icon: Building2, title: "Integrated Building Design", desc: "Full-spectrum architectural design for commercial, residential, institutional, and industrial projects." },
  { icon: FileCheck, title: "Code Consultation", desc: "Complex building code consultation with CP-certified professionals ensuring full compliance." },
  { icon: Layers, title: "Building Information Modelling", desc: "Advanced BIM services for precise project visualization, coordination, and delivery." },
  { icon: Ruler, title: "Project Management", desc: "End-to-end integrated project delivery from planning through construction completion." },
];

const projectImages = [
  { src: "https://static.wixstatic.com/media/c77437_4601df6848d54b219a808518d7bc496d~mv2.jpg/v1/fit/w_960,h_541,q_90,enc_auto/c77437_4601df6848d54b219a808518d7bc496d~mv2.jpg", label: "Commercial" },
  { src: "https://static.wixstatic.com/media/c77437_103a5583bbfd4523ad16683a9cd14d0c~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_103a5583bbfd4523ad16683a9cd14d0c~mv2.jpg", label: "Industrial" },
  { src: "https://static.wixstatic.com/media/c77437_c1a9b4d6c9ac44bd939d83a79666bf08~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_c1a9b4d6c9ac44bd939d83a79666bf08~mv2.jpg", label: "Residential" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      <div className="relative container-site pt-24">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-6">
              Architecture · Design · Build
            </span>
          </div>
          <h1 className="animate-fade-in-up delay-100 text-background text-balance">
            Designing Spaces That{" "}
            <span className="text-secondary">Inspire</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-background/70 text-lg md:text-xl mt-6 max-w-lg">
            Integrated project delivery, complex building code consultation, BIM, and sustainable architecture — serving Richmond, BC and beyond.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 mt-10">
            <Link
              to="/projects"
              className="bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold rounded-sm hover:brightness-110 transition active:scale-[0.97] inline-flex items-center gap-2"
            >
              View Our Work <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="border border-background/30 text-background px-7 py-3.5 font-semibold rounded-sm hover:bg-background/10 transition active:scale-[0.97]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
            <h2 className="mt-3 text-balance">Your Workspace, Our Expertise</h2>
            <p className="text-muted-foreground mt-4">
              Architect 57 Inc. specializes in integrated building design, complex building code consultation, specialized industrial, research and technology, mix-use, commercial, residential, and sustainable architecture.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div className="group p-8 rounded-sm bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="section-padding bg-section-light">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <h2 className="mt-3 text-balance">Featured Projects</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectImages.map((p, i) => (
            <ScrollReveal key={p.label} delay={i * 100}>
              <Link to="/projects" className="group block relative overflow-hidden rounded-sm aspect-[4/3]">
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-background font-semibold text-lg">{p.label}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-primary text-primary-foreground px-7 py-3 font-semibold rounded-sm hover:opacity-90 transition inline-flex items-center gap-2 active:scale-[0.97]"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Trust Signals */}
    <section className="section-padding bg-primary">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-primary-foreground text-balance">Award-Winning Design Excellence</h2>
            <p className="text-primary-foreground/70 mt-6 text-lg">
              Proud finalist of the Canadian Home Builder's Association Sam Awards (now CHBA National Awards for Housing Excellence). We believe it is our responsibility to make this world a better and healthier place for living.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-14 text-center">
            <div>
              <div className="text-secondary text-4xl md:text-5xl font-bold">IPD</div>
              <div className="text-primary-foreground/60 text-sm mt-2">Integrated Project Delivery</div>
            </div>
            <div>
              <div className="text-secondary text-4xl md:text-5xl font-bold">BIM</div>
              <div className="text-primary-foreground/60 text-sm mt-2">Building Info Modelling</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-secondary text-4xl md:text-5xl font-bold">CP</div>
              <div className="text-primary-foreground/60 text-sm mt-2">Certified Professional</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-background">
      <div className="container-site text-center">
        <ScrollReveal>
          <h2 className="text-balance">Let's Build Your Project. Together.</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            From concept to completion, Architect 57 delivers integrated design solutions tailored to your vision.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 font-semibold rounded-sm hover:opacity-90 transition inline-flex items-center gap-2 mt-8 active:scale-[0.97]"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
