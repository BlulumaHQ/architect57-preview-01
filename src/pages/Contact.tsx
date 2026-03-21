import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-section-light">
        <div className="container-site">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
            <h1 className="mt-3 text-balance">Contact Us</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              Ready to discuss your project? Reach out to our team and let's explore how we can bring your vision to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              {submitted ? (
                <div className="p-12 bg-section-light rounded-sm text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl mb-3">Thank You</h3>
                  <p className="text-muted-foreground">We've received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                        placeholder="(optional)"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3.5 font-semibold rounded-sm hover:opacity-90 transition active:scale-[0.97]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Info + Map */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground text-sm">203-2680 Shell Road, Richmond, BC V6X 4C9</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:604-818-2088" className="text-muted-foreground text-sm hover:text-primary transition-colors">604-818-2088</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:cary@architect57.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">cary@architect57.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-sm overflow-hidden border border-border aspect-[4/3]">
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
