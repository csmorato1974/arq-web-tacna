import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Building2, Briefcase, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Plan Profesional",
    subtitle: "Ideal para Constructores Independientes",
    price: "S/ 1,200",
    priceNote: "Pago único",
    maintenance: "S/ 450/año",
    maintenanceNote: "Hosting de alto rendimiento",
    icon: Building2,
    features: [
      "Diseño 100% responsivo (celulares y tablets)",
      "Secciones: Inicio, Nosotros, Servicios, Galería y Contacto",
      "WhatsApp integrado para contacto directo",
      "SEO Básico (aparecer en Google por nombre)",
      "Certificado SSL incluido",
    ],
    highlight: false,
  },
  {
    name: "Plan Corporativo",
    subtitle: "Recomendado para Empresas Medianas",
    price: "S/ 3,500",
    priceNote: "Pago único",
    maintenance: "S/ 450/año",
    maintenanceNote: "Hosting de alto rendimiento",
    icon: Briefcase,
    features: [
      "Todo lo del Plan Profesional",
      "Blog de noticias y avances de obra",
      "Fichas técnicas descargables (PDF)",
      
      "Correos corporativos ilimitados",
      "Testimonios y reseñas de clientes",
    ],
    highlight: true,
  },
  {
    name: "Plan Premium / Inmobiliario",
    subtitle: "Venta de Proyectos y Departamentos",
    price: "Desde S/ 5,000",
    priceNote: "A medida",
    maintenance: "Según volumen",
    maintenanceNote: "Tráfico y almacenamiento",
    icon: Crown,
    features: [
      "Todo lo del Plan Corporativo",
      "Buscador de inmuebles con filtros",
      
      "Tour virtual 360°",
      "Chatbot de atención 24/7",
      "Velocidad de carga ultra-rápida",
    ],
    highlight: false,
  },
];


const factorsExtra = [
  "Sistemas de reservas, chats en vivo o integración con CRMs",
  "Redacción de textos optimizados para Google (SEO)",
  "Soporte técnico mensual: actualizaciones de seguridad y backups",
];

/* ─── Questionnaire data ─── */
const questionnaireData = [
  {
    section: "Propósito y Objetivos del Sitio Web",
    questions: [
      {
        q: "¿Cuál es el objetivo principal de tu página web?",
        options: [
          "Promocionar un producto o servicio",
          "Generar ventas en línea",
          "Mostrar información de contacto o corporativa",
        ],
        hasOther: true,
      },
      {
        q: "¿Qué acción deseas que los visitantes realicen en tu sitio?",
        options: [
          "Registrarse o dejar sus datos de contacto",
          "Comprar productos o servicios",
          "Consultar información (blog, recursos, etc.)",
          "Descargar contenido (ebooks, catálogos, etc.)",
          "Contactar directamente (chat, WhatsApp, email)",
        ],
        multi: true,
      },
      {
        q: "¿Qué tipo de contenido tendrá el sitio?",
        options: [
          "Imágenes y textos descriptivos",
          "Videos y multimedia",
          "Blog o noticias",
          "Catálogo de productos o servicios",
          "Testimonios o reseñas",
        ],
        multi: true,
      },
    ],
  },
  {
    section: "Diseño y Estilo",
    questions: [
      {
        q: "¿Cómo te imaginas el diseño de tu página web?",
        options: [
          "Moderno y minimalista",
          "Colorido y llamativo",
          "Formal y corporativo",
        ],
        hasOther: true,
      },
      {
        q: "¿Tienes una paleta de colores o tipografías específicas?",
        options: ["Sí (adjuntar detalles)", "No, me gustaría recibir sugerencias"],
      },
    ],
  },
  {
    section: "Funcionalidades y Características",
    questions: [
      {
        q: "¿Qué elementos deseas incluir en tu sitio?",
        options: [
          "Formulario de contacto",
          "Chat en línea (WhatsApp, Messenger, etc.)",
          "Blog o sección de noticias",
          "Integración con redes sociales",
          "Tienda en línea con carrito de compras",
          "Galería de imágenes o videos",
          "Descargas de contenido",
          "Registro de usuarios o membresías",
        ],
        multi: true,
        hasOther: true,
      },
    ],
  },
  {
    section: "E-commerce (si aplica)",
    questions: [
      {
        q: "¿Cuántos productos esperas tener en tu catálogo?",
        options: ["Menos de 10", "Entre 10 y 50", "Más de 50"],
      },
      {
        q: "¿Cómo quieres gestionar los pagos?",
        options: [
          "Pasarelas de pago en línea",
          "Pagos fuera de línea (transferencias, WhatsApp, etc.)",
        ],
      },
      {
        q: "¿Necesitas opciones de variaciones en los productos?",
        options: ["Talla, color, modelo", "No"],
      },
      {
        q: "¿Requieres cupones, descuentos o programas de fidelidad?",
        options: ["Sí", "No"],
      },
    ],
  },
  {
    section: "Requerimientos de Información",
    questions: [
      {
        q: "¿Qué información puedes proporcionarnos?",
        options: [
          "Nombre y descripción de la empresa",
          "Logotipo en alta calidad (PNG o vectorial)",
          "Colores y tipografías corporativas",
          "Textos para secciones principales",
          "Lista de productos/servicios con descripción y precio",
          "Imágenes en alta calidad",
          "Testimonios de clientes",
          "Accesos a redes sociales",
          "Ejemplos de sitios web de referencia",
        ],
        multi: true,
      },
    ],
  },
];

const Cotizacion = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary text-secondary-foreground py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-center">
            <span className="text-primary">Cotización</span> de Página Web
          </h1>
          <p className="mt-2 text-secondary-foreground/70 max-w-2xl mx-auto text-center">
            Precios estimados para el mercado peruano — Sector Construcción e Inmobiliario
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Tabs defaultValue="precios" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 mx-auto">
            <TabsTrigger value="precios">💰 Precios</TabsTrigger>
            <TabsTrigger value="cuestionario">📝 Cuestionario</TabsTrigger>
          </TabsList>

          {/* ════════ TAB: PRECIOS ════════ */}
          <TabsContent value="precios" className="space-y-12">
            {/* Pricing cards */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Planes para Constructoras
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <Card
                      key={plan.name}
                      className={`relative flex flex-col ${
                        plan.highlight
                          ? "border-primary ring-2 ring-primary/30"
                          : ""
                      }`}
                    >
                      {plan.highlight && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                          Recomendado
                        </Badge>
                      )}
                      <CardHeader className="text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <CardTitle className="text-lg">{plan.name}</CardTitle>
                        <CardDescription>{plan.subtitle}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-4">
                        <div className="text-center">
                          <p className="text-2xl font-extrabold text-primary">
                            {plan.price}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {plan.priceNote}
                          </p>
                        </div>
                        <div className="text-center text-sm">
                          <span className="font-semibold">Mantenimiento:</span>{" "}
                          {plan.maintenance}
                          <br />
                          <span className="text-xs text-muted-foreground">
                            {plan.maintenanceNote}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {plan.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle
                                className="text-primary shrink-0 mt-0.5"
                                size={16}
                              />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full" variant={plan.highlight ? "default" : "outline"}>
                          <a
                            href={`https://wa.me/51994897857?text=${encodeURIComponent(
                              `Hola, me interesa el ${plan.name} para mi página web.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Solicitar Cotización
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </section>


            {/* Factors */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Factores que Elevan el Precio
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {factorsExtra.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* ════════ TAB: CUESTIONARIO ════════ */}
          <TabsContent value="cuestionario" className="space-y-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Planificación Inicial para el Diseño de tu Página Web
              </h2>
              <p className="text-muted-foreground mb-8">
                Responde estas preguntas para que podamos entender mejor tus
                necesidades y preparar una propuesta personalizada.
              </p>

              {questionnaireData.map((section, si) => (
                <div key={si} className="mb-10">
                  <h3 className="text-lg font-bold text-primary border-b border-border pb-2 mb-6">
                    {section.section}
                  </h3>
                  <div className="space-y-8">
                    {section.questions.map((item, qi) => (
                      <div key={qi}>
                        <p className="font-medium text-foreground mb-3">
                          {item.q}
                        </p>
                        <div className="space-y-2 pl-2">
                          {item.options.map((opt) => (
                            <label
                              key={opt}
                              className="flex items-center gap-3 cursor-pointer group"
                            >
                              <span
                                className={`w-4 h-4 rounded${
                                  item.multi ? "" : "-full"
                                } border-2 border-muted-foreground/40 group-hover:border-primary transition-colors shrink-0`}
                              />
                              <span className="text-sm">{opt}</span>
                            </label>
                          ))}
                          {item.hasOther && (
                            <label className="flex items-center gap-3 cursor-pointer group">
                              <span
                                className={`w-4 h-4 rounded${
                                  item.multi ? "" : "-full"
                                } border-2 border-muted-foreground/40 group-hover:border-primary transition-colors shrink-0`}
                              />
                              <span className="text-sm">
                                Otro: _______________
                              </span>
                            </label>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* CTA */}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6 text-center space-y-4">
                  <p className="font-semibold text-foreground">
                    ¿Listo para comenzar? Envíanos tus respuestas por WhatsApp
                  </p>
                  <Button asChild size="lg">
                    <a
                      href={`https://wa.me/51994897857?text=${encodeURIComponent(
                        "Hola, completé el cuestionario de planificación web y me gustaría recibir una cotización personalizada."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enviar por WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Cotizacion;
