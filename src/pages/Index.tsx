import { useState, useEffect, useCallback, useMemo } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage1 from "@/assets/hero-1.jpg";
import chbaAward from "@/assets/chba-award.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import { getRandomFeaturedProjects } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const heroSlides = [heroImage1, heroImage2];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProjects = useMemo(() => getRandomFeaturedProjects(4), []);
  const { t } = useLanguage();

  const services = [
    { title: t("home.services.integrated.title"), desc: t("home.services.integrated.desc") },
    { title: t("home.services.code.title"), desc: t("home.services.code.desc") },
    { title: t("home.services.bim.title"), desc: t("home.services.bim.desc") },
    { title: t("home.services.pm.title"), desc: t("home.services.pm.desc") },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Layout>
      {/* Hero Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
            style={{
              backgroundImage: `url(${slide})`,
              opacity: currentSlide === i ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-end pb-24 md:pb-32">
          <div className="container-site">
            <div className="max-w-2xl">
              <h1 className="animate-fade-in-up text-white text-balance font-light">
                {t("home.hero.title")}
              </h1>
              <p className="animate-fade-in-up delay-200 text-white/60 text-lg md:text-xl mt-8 max-w-lg font-light">
                {t("home.hero.subtitle")}
              </p>
              <div className="animate-fade-in-up delay-300 mt-10">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase font-normal text-white border border-white/30 px-8 py-3.5 hover:bg-white hover:text-black transition-all duration-300 active:scale-[0.97]"
                >
                  {t("home.hero.cta")} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-32 md:py-44">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-start gap-4 mb-6">
              <span className="hidden md:block w-8 h-px bg-[#a11d2d]/40 mt-[1.1em] shrink-0" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#a11d2d]/60 font-normal">{t("home.intro.label")}</span>
            </div>
            <p className="text-2xl md:text-[2.5rem] lg:text-[3rem] leading-[1.2] font-light max-w-5xl text-balance" style={{ letterSpacing: "-0.02em" }}>
              {t("home.intro.text")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-section-light">
        <div className="container-site">
          <ScrollReveal>
            <div className="mb-20">
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">{t("home.services.label")}</span>
              <h2 className="mt-4 text-balance">{t("home.services.title")}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="border-t border-border pt-8 relative">
                  <span className="absolute -top-px left-0 w-6 h-px bg-[#a11d2d]/50" />
                  <h3 className="text-lg font-normal tracking-[-0.01em] mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-[15px] font-light leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <ScrollReveal>
            <div className="mb-20">
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">{t("home.portfolio.label")}</span>
              <h2 className="mt-4 text-balance">{t("home.portfolio.title")}</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredProjects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70}>
                <Link to={p.link} className="group block relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white text-sm font-light tracking-wide">{p.category}</span>
                    <span className="text-white text-lg block font-light mt-0.5">{p.title}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-16">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase font-normal border border-foreground/20 px-8 py-3.5 hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97]"
              >
                {t("home.portfolio.cta")} <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About / Philosophy */}
      <section className="py-24 md:py-32 bg-section-light">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">{t("home.philosophy.label")}</span>
              <h2 className="mt-4 mb-8">{t("home.philosophy.title")}</h2>
              <p className="text-muted-foreground text-[15px] font-light leading-[1.8] mb-6">
                {t("home.philosophy.p1")}
              </p>
              <p className="text-muted-foreground text-[15px] font-light leading-[1.8]">
                {t("home.philosophy.p2")}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { val: "IPD", label: t("home.philosophy.ipd") },
                  { val: "BIM", label: t("home.philosophy.bim") },
                  { val: "CP", label: t("home.philosophy.cp") },
                ].map((item) => (
                  <div key={item.val} className="py-10 relative">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-px bg-[#a11d2d]/40" />
                    <div className="text-3xl md:text-4xl font-light tracking-tight">{item.val}</div>
                    <div className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-3 font-normal">{item.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44">
        <div className="container-site text-center">
          <ScrollReveal>
            <h2 className="text-balance max-w-2xl mx-auto">{t("home.cta.title")}</h2>
            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-[15px] font-light">
              {t("home.cta.subtitle")}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase font-normal border border-foreground/20 px-8 py-3.5 mt-10 hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97]"
            >
              {t("home.cta.button")} <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
