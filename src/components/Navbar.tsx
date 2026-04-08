import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="text-primary font-extrabold text-xl md:text-2xl tracking-tight">
              R&S
            </span>
            <span className="text-primary-foreground text-xs md:text-sm font-medium hidden sm:block">
              Constructora & Consultora
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/cotizacion"
              className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Cotización Web
            </Link>
            <a
              href="https://wa.me/51930382388"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-secondary font-bold px-5 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
            >
              Cotiza Gratis
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary-foreground"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-secondary/95 backdrop-blur border-t border-border">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/cotizacion"
              onClick={() => setOpen(false)}
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Cotización Web
            </Link>
            <a
              href="https://wa.me/51930382388"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-secondary font-bold px-5 py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
            >
              Cotiza Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
