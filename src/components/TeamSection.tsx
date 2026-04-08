import { User } from "lucide-react";

const team = [
  {
    name: "Jonathan David Ramos Saldaña",
    role: "Ingeniero Civil",
    desc: "Especialista en diseño estructural y gestión de proyectos de construcción.",
  },
  {
    name: "Sofia Nataly Ramos Saldaña",
    role: "Arquitecta",
    desc: "Experta en diseño arquitectónico, planificación urbana y sostenibilidad.",
  },
];

const TeamSection = () => (
  <section id="equipo" className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
          Nuestro <span className="text-primary">Equipo</span>
        </h2>
        <p className="text-primary-foreground/60 max-w-xl mx-auto">
          Profesionales comprometidos con la excelencia.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {team.map((t) => (
          <div
            key={t.name}
            className="bg-secondary-foreground/5 rounded-xl p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <User className="text-primary" size={40} />
            </div>
            <h3 className="text-xl font-bold text-primary-foreground mb-1">{t.name}</h3>
            <p className="text-primary font-semibold text-sm mb-3">{t.role}</p>
            <p className="text-primary-foreground/60 text-sm">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
