import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-1">
            <div className="font-heading font-bold text-xl text-background mb-4">
              Architect 57
              <span className="text-xs block font-medium tracking-wider uppercase text-background/50">Inc.</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              Integrated building design, code consultation, and project management serving Richmond, BC.
            </p>
          </div>

          {/* Column 2: Empty spacer */}
          <div className="hidden md:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-background font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-background/60 hover:text-secondary transition-colors">Home</Link>
              <Link to="/projects" className="text-sm text-background/60 hover:text-secondary transition-colors">Projects</Link>
              <Link to="/about" className="text-sm text-background/60 hover:text-secondary transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-background/60 hover:text-secondary transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-background font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <nav className="flex flex-col gap-2.5">
              <span className="text-sm text-background/60">Integrated Building Design</span>
              <span className="text-sm text-background/60">Code Consultation</span>
              <span className="text-sm text-background/60">Project Management</span>
              <span className="text-sm text-background/60">BIM Services</span>
            </nav>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-background font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm text-background/60">
              <span>203-2680 Shell Road</span>
              <span>Richmond, BC V6X 4C9</span>
              <a href="tel:604-818-2088" className="hover:text-secondary transition-colors">604-818-2088</a>
              <a href="mailto:cary@architect57.com" className="hover:text-secondary transition-colors">cary@architect57.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-background/10">
        <div className="container-site py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40 text-center md:text-left">
            © {year} Architect 57 Inc. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
