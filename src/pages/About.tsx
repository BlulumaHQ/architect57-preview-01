import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import projectImg6 from "@/assets/project-6.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container-site">
        <ScrollReveal>
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">About</span>
          <h1 className="mt-4 text-balance">Architect 57 Inc.</h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg font-light">
            Specializing in integrated building design since our founding, we bring expertise, sustainability, and community-focused values to every project.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Story */}
    <section className="pb-24 md:pb-32">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal direction="left">
            <img
              src={aboutHero}
              alt="Architectural detail"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">Our Story</span>
            <h2 className="mt-4 mb-8">Integrated design, intentional craft</h2>
            <p className="text-muted-foreground text-[15px] font-light leading-[1.8] mb-6">
              Architect 57 Inc. specializes in integrated building design, complex building code consultation, specialized industrial, research and technology, mix-use, commercial, residential, industrial, institutional, sustainable architecture, project planning, and many more.
            </p>
            <p className="text-muted-foreground text-[15px] font-light leading-[1.8]">
              We believe that it is our responsibility making this world a better and healthier place for living. This commitment drives every decision we make, from material selection to energy systems design.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 md:py-32 bg-section-light">
      <div className="container-site">
        <ScrollReveal>
          <div className="mb-20">
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">Values</span>
            <h2 className="mt-4">What Drives Us</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
          {[
            { title: "Excellence", desc: "Proud finalist of the Canadian Home Builder's Association Sam Awards (now CHBA National Awards for Housing Excellence), reflecting our commitment to quality." },
            { title: "Sustainability", desc: "Principal Ching-yeh (Cary) Tsai devoted energy towards the formation of the U.S. Green Building Council — Las Vegas Regional Chapter as part of giving back to the community." },
            { title: "Community", desc: "We help build a better, healthier, and sustainable living environment through thoughtful design and integrated delivery." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="border-t border-border pt-8">
                <h3 className="text-lg font-normal mb-4">{v.title}</h3>
                <p className="text-muted-foreground text-[15px] font-light leading-[1.8]">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Image break */}
    <section className="py-0">
      <img
        src={projectImg6}
        alt="Sustainable architecture"
        className="w-full h-[50vh] md:h-[60vh] object-cover"
        loading="lazy"
      />
    </section>

    {/* CTA */}
    <section className="py-32 md:py-44">
      <div className="container-site text-center">
        <ScrollReveal>
          <h2 className="text-balance max-w-2xl mx-auto">Ready to start your project?</h2>
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-[15px] font-light">
            Let's discuss how our integrated design approach can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase font-normal border border-foreground/20 px-8 py-3.5 mt-10 hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97]"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default About;
