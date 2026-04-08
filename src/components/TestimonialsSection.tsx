import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excelente trabajo en la construcción de mi vivienda. Cumplieron con los plazos y la calidad superó mis expectativas. Totalmente recomendados.",
    author: "Carlos M.",
    location: "Tacna",
  },
  {
    text: "Muy profesionales en todo el proceso. Desde el diseño hasta la entrega, siempre estuvieron atentos a cada detalle. Gracias R&S Constructora.",
    author: "María L.",
    location: "Tacna",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Lo que dicen nuestros <span className="text-primary">clientes</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="bg-card border border-border rounded-xl p-8 relative"
          >
            <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
            <p className="text-foreground/80 mb-6 italic leading-relaxed">
              "{t.text}"
            </p>
            <div>
              <p className="font-bold text-foreground">{t.author}</p>
              <p className="text-muted-foreground text-sm">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
