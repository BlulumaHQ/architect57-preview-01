import Layout from "@/components/Layout";
import PageMeta from "@/components/PageMeta";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutUs01 from "@/assets/about-us-01.webp";
import architect5701 from "@/assets/architect-57-01.webp";
import projectImg6 from "@/assets/project-6.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { title: t("about.values.excellence.title"), desc: t("about.values.excellence.desc") },
    { title: t("about.values.sustainability.title"), desc: t("about.values.sustainability.desc") },
    { title: t("about.values.community.title"), desc: t("about.values.community.desc") },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#a11d2d]/50" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">{t("about.label")}</span>
            </div>
            <h1 className="mt-4 text-balance">{t("about.title")}</h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg font-light">
              {t("about.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src={aboutUs01}
                    alt="Architect 57 無極建築 office reception"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.15em] uppercase text-white/60 font-light">01</span>
                </div>
                <div className="mt-8 relative">
                  <img
                    src={architect5701}
                    alt="Architect 57 無極建築 studio"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.15em] uppercase text-white/60 font-light">02</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">{t("about.story.label")}</span>
              <h2 className="mt-4 mb-8">{t("about.story.title")}</h2>
              <p className="text-muted-foreground text-[15px] font-light leading-[1.8] mb-6">
                {t("about.story.p1")}
              </p>
              <p className="text-muted-foreground text-[15px] font-light leading-[1.8]">
                {t("about.story.p2")}
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
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">{t("about.values.label")}</span>
              <h2 className="mt-4">{t("about.values.title")}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="border-t border-border pt-8 relative">
                  <span className="absolute -top-px left-0 w-5 h-px bg-[#a11d2d]/50" />
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
            <h2 className="text-balance max-w-2xl mx-auto">{t("about.cta.title")}</h2>
            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-[15px] font-light">
              {t("about.cta.subtitle")}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase font-normal border border-foreground/20 px-8 py-3.5 mt-10 hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97]"
            >
              {t("about.cta.button")} <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
