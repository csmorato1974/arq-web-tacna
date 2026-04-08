const steps = [
  { num: "01", title: "Visita Técnica", desc: "Evaluamos tu terreno y tus necesidades sin costo alguno." },
  { num: "02", title: "Diseño Personalizado", desc: "Creamos planos y diseños a la medida de tu proyecto." },
  { num: "03", title: "Planificación y Presupuesto", desc: "Definimos cronograma, materiales y costos detallados." },
  { num: "04", title: "Ejecución con Calidad", desc: "Construimos con supervisión continua y control de calidad." },
];

const ProcessSection = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
          Nuestro <span className="text-primary">Proceso</span>
        </h2>
        <p className="text-primary-foreground/60 max-w-xl mx-auto">
          Un flujo de trabajo claro para llevar tu proyecto del sueño a la realidad.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={s.num} className="relative text-center">
            <div className="text-6xl font-extrabold text-primary/20 mb-2">{s.num}</div>
            <h3 className="text-lg font-bold text-primary-foreground mb-2">{s.title}</h3>
            <p className="text-primary-foreground/60 text-sm">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
