import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden"
    >
      {/* Diagonal accent */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-[80%] h-[150%] bg-primary/10 rotate-12 origin-top-right" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Tacna, Perú
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Transformamos tus ideas en{" "}
            <span className="text-primary">realidad</span>, construimos{" "}
            <span className="text-primary">confianza</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg sm:text-xl mb-4 max-w-2xl">
            Constructora & Consultora Ramos Saldaña — Ingeniería civil,
            arquitectura y consultoría profesional.
          </p>
          <p className="text-primary font-semibold text-base mb-8">
            ✓ Visitas técnicas y cotizaciones sin costo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/51930382388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold px-8 py-4 rounded-md text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone size={20} />
              Cotiza Ahora
              <ArrowRight size={20} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-md text-lg hover:border-primary hover:text-primary transition-colors"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
