import { Building2, CheckCircle2, Clock } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const categories = [
  {
    label: "En Ejecución",
    icon: Clock,
    projects: [
      "Residencial Los Héroes - Tacna",
      "Centro Comercial Plaza Sur",
      "Complejo Deportivo Municipal",
    ],
  },
  {
    label: "Obras Culminadas",
    icon: CheckCircle2,
    projects: [
      "Vivienda Unifamiliar Av. Bolognesi",
      "Ampliación Hospital Regional",
      "Pavimentación Calle Zela",
      "Colegio Nacional Renovación",
    ],
  },
  {
    label: "Próximas Obras",
    icon: Building2,
    projects: [
      "Condominio Vista al Valle",
      "Parque Industrial Tacna Sur",
    ],
  },
];

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const step = Math.max(1, Math.floor(target / 60));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl font-extrabold text-primary">
      {count}+
    </div>
  );
};

const ProjectsSection = () => (
  <section id="proyectos" className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Nuestros <span className="text-primary">Proyectos</span>
        </h2>
      </div>

      <div className="flex justify-center mb-16">
        <div className="text-center">
          <Counter target={100} />
          <p className="text-muted-foreground font-semibold mt-2">Proyectos Exitosos</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="flex items-center gap-2 mb-4">
              <cat.icon className="text-primary" size={22} />
              <h3 className="text-lg font-bold text-foreground">{cat.label}</h3>
            </div>
            <div className="space-y-3">
              {cat.projects.map((p) => (
                <div
                  key={p}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="w-full h-32 bg-muted rounded-md mb-3 flex items-center justify-center">
                    <Building2 className="text-muted-foreground/40" size={40} />
                  </div>
                  <p className="font-medium text-foreground text-sm">{p}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
