import { Shield, Users, Cpu } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Calidad Garantizada",
    desc: "Materiales certificados y procesos controlados que aseguran la excelencia en cada proyecto.",
  },
  {
    icon: Users,
    title: "Equipo Calificado",
    desc: "Profesionales con amplia experiencia en ingeniería civil, arquitectura y consultoría.",
  },
  {
    icon: Cpu,
    title: "Tecnología de Vanguardia",
    desc: "Herramientas y métodos modernos para optimizar tiempos y resultados.",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Quiénes <span className="text-primary">Somos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Somos una empresa dedicada a la construcción, consultoría y supervisión de
            obras, comprometidos con la calidad, puntualidad y la satisfacción de
            nuestros clientes en Tacna y todo el sur del Perú.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-secondary rounded-xl p-8 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 group-hover:bg-primary/30 transition-colors">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {v.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary border-l-4 border-primary rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-3">Misión</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Brindar servicios de ingeniería y construcción con los más altos
              estándares de calidad, seguridad y eficiencia, superando las
              expectativas de nuestros clientes.
            </p>
          </div>
          <div className="bg-secondary border-l-4 border-primary rounded-xl p-8">
            <h3 className="text-xl font-bold text-primary mb-3">Visión</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Ser la constructora y consultora líder en la región sur del Perú,
              reconocida por la excelencia, innovación y compromiso con el
              desarrollo sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
