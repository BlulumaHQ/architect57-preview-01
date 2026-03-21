import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const galleryImages = [
  { src: "https://static.wixstatic.com/media/c77437_4601df6848d54b219a808518d7bc496d~mv2.jpg/v1/fit/w_960,h_541,q_90,enc_auto/c77437_4601df6848d54b219a808518d7bc496d~mv2.jpg", title: "Commercial Office Complex" },
  { src: "https://static.wixstatic.com/media/c77437_103a5583bbfd4523ad16683a9cd14d0c~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_103a5583bbfd4523ad16683a9cd14d0c~mv2.jpg", title: "Industrial Facility" },
  { src: "https://static.wixstatic.com/media/c77437_c1a9b4d6c9ac44bd939d83a79666bf08~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_c1a9b4d6c9ac44bd939d83a79666bf08~mv2.jpg", title: "High-Rise Residential" },
  { src: "https://static.wixstatic.com/media/c77437_1e4a8ac76daa45a8bf59405a5f20ad52~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_1e4a8ac76daa45a8bf59405a5f20ad52~mv2.jpg", title: "Mixed-Use Development" },
  { src: "https://static.wixstatic.com/media/c77437_7b4db7df81224912985098241431659d~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_7b4db7df81224912985098241431659d~mv2.jpg", title: "Research & Technology" },
  { src: "https://static.wixstatic.com/media/c77437_d00926a0b2de47d09caf5af023c27eed~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_d00926a0b2de47d09caf5af023c27eed~mv2.jpg", title: "Institutional Building" },
  { src: "https://static.wixstatic.com/media/c77437_59b8d6e5c94f448aa25c6282e6b5ab1c~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_59b8d6e5c94f448aa25c6282e6b5ab1c~mv2.jpg", title: "Sustainable Design" },
  { src: "https://static.wixstatic.com/media/c77437_f6af5b73841649cdb65661bd21175ebe~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_f6af5b73841649cdb65661bd21175ebe~mv2.jpg", title: "Community Center" },
  { src: "https://static.wixstatic.com/media/c77437_2d601ba4beb045c6956b1a4c7781b22c~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_2d601ba4beb045c6956b1a4c7781b22c~mv2.jpg", title: "Commercial Interior" },
  { src: "https://static.wixstatic.com/media/c77437_573edefa5c484c15b82178fb040970b0~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_573edefa5c484c15b82178fb040970b0~mv2.jpg", title: "Renovation Project" },
  { src: "https://static.wixstatic.com/media/c77437_2e151fdc1ed14ec1a2032b854f3c143f~mv2.jpg/v1/fit/w_960,h_540,q_90,enc_auto/c77437_2e151fdc1ed14ec1a2032b854f3c143f~mv2.jpg", title: "Specialized Industrial" },
];

const Projects = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-section-light">
      <div className="container-site">
        <ScrollReveal>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Portfolio</span>
          <h1 className="mt-3 text-balance">Projects</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            A selection of our integrated building design projects spanning commercial, residential, industrial, institutional, and mixed-use developments.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-padding bg-background">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-background font-semibold">{img.title}</span>
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
