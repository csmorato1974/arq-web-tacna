import { MapPin, Phone, Instagram, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola, soy ${form.nombre}. ${form.mensaje} (Email: ${form.email})`
    );
    window.open(`https://wa.me/51930382388?text=${msg}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Escríbenos y te asesoramos sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <p className="font-bold text-primary-foreground">Dirección</p>
                <p className="text-primary-foreground/60 text-sm">
                  Tacna, Perú
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <p className="font-bold text-primary-foreground">Teléfono</p>
                <p className="text-primary-foreground/60 text-sm">930 382 388</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Instagram className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <p className="font-bold text-primary-foreground">Instagram</p>
                <a
                  href="https://www.instagram.com/constructorarystacna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  @constructorarystacna
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-secondary-foreground/5 border border-border text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Tu email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-secondary-foreground/5 border border-border text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              required
              rows={4}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-secondary-foreground/5 border border-border text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              <Send size={18} />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
