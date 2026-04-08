import { Award, Clock, HeartHandshake, PackageCheck, Lightbulb, Eye } from "lucide-react";

const advantages = [
  { icon: Award, title: "Experiencia Comprobada", desc: "Más de 100 proyectos ejecutados con éxito en la región." },
  { icon: Clock, title: "Cumplimiento de Plazos", desc: "Entregamos cada proyecto dentro del cronograma pactado." },
  { icon: HeartHandshake, title: "Atención Personalizada", desc: "Acompañamiento cercano en cada etapa de tu proyecto." },
  { icon: PackageCheck, title: "Materiales Certificados", desc: "Utilizamos solo materiales de primera calidad y certificados." },
  { icon: Lightbulb, title: "Innovación Tecnológica", desc: "Aplicamos las últimas tecnologías en diseño y construcción." },
  { icon: Eye, title: "Transparencia Total", desc: "Presupuestos claros y comunicación constante con el cliente." },
];

const AdvantagesSection = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
          ¿Por qué <span className="text-primary">elegirnos</span>?
        </h2>
        <p className="text-primary-foreground/60 max-w-xl mx-auto">
          Ventajas que nos diferencian en el mercado de la construcción.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((a) => (
          <div
            key={a.title}
            className="flex items-start gap-4 bg-secondary-foreground/5 rounded-xl p-6 hover:bg-primary/10 transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <a.icon className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-bold text-primary-foreground mb-1">{a.title}</h3>
              <p className="text-primary-foreground/60 text-sm">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
