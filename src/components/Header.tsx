import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg tracking-[0.15em] uppercase font-light text-foreground">
            Architect 57
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[13px] tracking-[0.12em] uppercase font-normal transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-[13px] tracking-[0.12em] uppercase font-normal border border-foreground/20 px-6 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.97]"
          >
            Inquire
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md animate-fade-in">
          <nav className="container-site py-8 flex flex-col gap-6">
            <Link
              to="/"
              className={`text-[13px] tracking-[0.12em] uppercase font-normal transition-colors ${
                location.pathname === "/" ? "text-foreground" : "text-foreground/50"
              }`}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] tracking-[0.12em] uppercase font-normal transition-colors ${
                  location.pathname === item.path ? "text-foreground" : "text-foreground/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
