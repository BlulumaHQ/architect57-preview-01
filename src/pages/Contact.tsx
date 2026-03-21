import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-site">
          <ScrollReveal>
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-normal">Contact</span>
            <h1 className="mt-4 text-balance">Get in Touch</h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg font-light">
              Ready to discuss your project? Reach out and let's explore how we can bring your vision to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form */}
            <ScrollReveal direction="left">
              {submitted ? (
                <div className="py-20 text-center">
                  <div className="w-14 h-14 border border-foreground/10 flex items-center justify-center mx-auto mb-6">
                    <Mail className="text-foreground/40" size={24} />
                  </div>
                  <h3 className="text-xl font-light mb-3">Thank You</h3>
                  <p className="text-muted-foreground font-light text-[15px]">We've received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-normal mb-3">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:outline-none focus:border-foreground transition-colors font-light"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-normal mb-3">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:outline-none focus:border-foreground transition-colors font-light"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-normal mb-3">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:outline-none focus:border-foreground transition-colors font-light"
                        placeholder="(optional)"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-normal mb-3">Message</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:outline-none focus:border-foreground transition-colors resize-none font-light"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-[13px] tracking-[0.12em] uppercase font-normal border border-foreground/20 px-8 py-3.5 hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97] mt-4"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Info + Map */}
            <ScrollReveal direction="right">
              <div className="space-y-12">
                <div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-normal block mb-6">Contact Information</span>
                  <div className="space-y-5">
                    <div>
                      <p className="text-[13px] tracking-wide font-normal mb-1">Address</p>
                      <p className="text-muted-foreground text-[15px] font-light">203-2680 Shell Road, Richmond, BC V6X 4C9</p>
                    </div>
                    <div>
                      <p className="text-[13px] tracking-wide font-normal mb-1">Phone</p>
                      <a href="tel:604-818-2088" className="text-muted-foreground text-[15px] font-light hover:text-foreground transition-colors duration-300">604-818-2088</a>
                    </div>
                    <div>
                      <p className="text-[13px] tracking-wide font-normal mb-1">Email</p>
                      <a href="mailto:cary@architect57.com" className="text-muted-foreground text-[15px] font-light hover:text-foreground transition-colors duration-300">cary@architect57.com</a>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="overflow-hidden aspect-[4/3] bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.7!2d-123.126!3d49.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzEyLjAiTiAxMjPCsDA3JzMzLjYiVw!5e0!3m2!1sen!2sca!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Architect 57 Location"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
