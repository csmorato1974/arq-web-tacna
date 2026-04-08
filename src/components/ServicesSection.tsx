import {
  Building2,
  PenTool,
  FileText,
  ClipboardCheck,
  Landmark,
  Mountain,
  Search,
  MapPin,
  Wrench,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Construcción y Supervisión", desc: "Edificaciones residenciales, comerciales e industriales con supervisión integral." },
  { icon: PenTool, title: "Diseño de Planos", desc: "Planos arquitectónicos, estructurales, sanitarios y eléctricos." },
  { icon: FileText, title: "Perfiles Técnicos", desc: "Elaboración de perfiles técnicos para proyectos públicos y privados." },
  { icon: ClipboardCheck, title: "Expediente Técnico", desc: "Documentación completa para la ejecución de obras." },
  { icon: Landmark, title: "Evaluaciones Estructurales", desc: "Análisis y diagnóstico de la integridad de estructuras existentes." },
  { icon: Mountain, title: "Mecánica de Suelos", desc: "Estudios geotécnicos para cimentaciones seguras." },
  { icon: Search, title: "Consultoría de Supervisión", desc: "Acompañamiento profesional durante la ejecución de obras." },
  { icon: MapPin, title: "Topografía Profesional", desc: "Levantamientos topográficos con equipos de alta precisión." },
  { icon: Wrench, title: "Mantenimiento de Infraestructura", desc: "Servicios de mantenimiento preventivo y correctivo." },
];

const ServicesSection = () => (
  <section id="servicios" className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Nuestros <span className="text-primary">Servicios</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Soluciones integrales en ingeniería, arquitectura y consultoría.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
