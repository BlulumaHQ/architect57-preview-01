import { Link } from "react-router-dom";
import logoWhite from "@/assets/architect-57-logo-white.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/70">
      <div className="container-site py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
          {/* Column 1: Wordmark & Description */}
          <div className="md:col-span-1">
            <img src={logoWhite} alt="Architect 57" className="h-[55px] max-h-[55px] w-auto mb-5" />
            <p className="text-sm leading-relaxed text-background/40 font-light">
              Integrated building design, code consultation, and sustainable architecture serving Richmond, BC.
            </p>
          </div>

          {/* Column 2: Empty spacer */}
          <div className="hidden md:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-background/30 text-[11px] uppercase tracking-[0.2em] font-normal mb-5">Navigate</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-background/50 hover:text-background transition-colors duration-300 font-light">Home</Link>
              <Link to="/projects" className="text-sm text-background/50 hover:text-background transition-colors duration-300 font-light">Projects</Link>
              <Link to="/about" className="text-sm text-background/50 hover:text-background transition-colors duration-300 font-light">About</Link>
              <Link to="/contact" className="text-sm text-background/50 hover:text-background transition-colors duration-300 font-light">Contact</Link>
            </nav>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-background/30 text-[11px] uppercase tracking-[0.2em] font-normal mb-5">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-background/50 font-light">Building Design</span>
              <span className="text-sm text-background/50 font-light">Code Consultation</span>
              <span className="text-sm text-background/50 font-light">Project Management</span>
              <span className="text-sm text-background/50 font-light">BIM Services</span>
            </nav>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-background/30 text-[11px] uppercase tracking-[0.2em] font-normal mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-background/50 font-light">
              <span>203-2680 Shell Road</span>
              <span>Richmond, BC V6X 4C9</span>
              <a href="tel:604-818-2088" className="hover:text-background transition-colors duration-300">604-818-2088</a>
              <a href="mailto:cary@architect57.com" className="hover:text-background transition-colors duration-300">cary@architect57.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-background/8">
        <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-background/30 text-center md:text-left font-light">
            © {year} Architect 57 Inc. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background/60 transition-colors duration-300"
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
