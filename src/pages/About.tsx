import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Leaf, Users } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-section-light">
      <div className="container-site">
        <ScrollReveal>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h1 className="mt-3 text-balance">About Architect 57</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            Specializing in integrated building design since our founding, we bring expertise, sustainability, and community-focused values to every project.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <img
              src="https://static.wixstatic.com/media/c77437_4601df6848d54b219a808518d7bc496d~mv2.jpg/v1/fit/w_960,h_541,q_90,enc_auto/c77437_4601df6848d54b219a808518d7bc496d~mv2.jpg"
              alt="Architect 57 project"
              className="rounded-sm w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2>Our Story</h2>
            <p className="text-muted-foreground mt-4">
              Architect 57 Inc. specializes in integrated building design, complex building code consultation, specialized industrial, research and technology, mix-use, commercial, residential, industrial, institutional, sustainable architecture, project planning, and many more.
            </p>
            <p className="text-muted-foreground mt-4">
              We believe that it is our responsibility making this world a better and healthier place for living. This commitment drives every decision we make, from material selection to energy systems design.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-section-light">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">What Drives Us</span>
            <h2 className="mt-3">Our Values</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "Excellence", desc: "Proud finalist of the Canadian Home Builder's Association Sam Awards (now CHBA National Awards for Housing Excellence), reflecting our commitment to quality." },
            { icon: Leaf, title: "Sustainability", desc: "Principal Ching-yeh (Cary) Tsai devoted energy towards the formation of the U.S. Green Building Council — Las Vegas Regional Chapter as part of giving back to the community." },
            { icon: Users, title: "Community", desc: "We help build a better, healthier, and sustainable living environment through thoughtful design and integrated delivery." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="p-8 bg-background rounded-sm border border-border">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary">
      <div className="container-site text-center">
        <ScrollReveal>
          <h2 className="text-primary-foreground text-balance">Ready to Start Your Project?</h2>
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">
            Let's discuss how our integrated design approach can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="bg-secondary text-secondary-foreground px-8 py-4 font-semibold rounded-sm hover:brightness-110 transition inline-flex items-center gap-2 mt-8 active:scale-[0.97]"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default About;
