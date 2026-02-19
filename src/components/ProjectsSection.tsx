import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Plataforma de Votación Electrónica",
    description:
      "Sistema de votación electrónica para estudiantes desarrollado durante el paro estudiantil de 2022. Utilizaba web scraping para conectarse al servidor del IPN y rescatar datos públicos para verificación de estudiantes. El proyecto estuvo activo únicamente durante el período del paro.",
    technologies: ["Python", "Web Scraping", "Backend", "Verificación de usuarios"],
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "TUI Framework",
    description:
      "Framework de Terminal User Interface en Python/curses. Arquitectura: Message Loop + Event Bus. Implementa procesamiento de eventos, renderizado de widgets, gestión de layout, y threading para input y clock. Requiere Python 3.10+ y un TTY real.",
    technologies: ["Python", "curses", "TUI", "Event Bus", "Message Loop"],
    github: "https://github.com/cris0501/TUI",
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Graficador 3D de Funciones",
    description:
      "Tarea universitaria para graficar funciones f:RxR->R en proyección 3D. Implementa conversión infijo a postfijo con pila, evaluación punto a punto de una malla 21x21, y transformación 3D a 2D usando funciones trigonométricas para rotación de vista. \"Fue poco antes de que existiera la IA y era un poco más 'duro' programar\".",
    technologies: ["Java", "Gráficos 3D", "Matemáticas", "UI"],
    github: "https://github.com/cris0501/Plotter-surface",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Biblioteca Científica",
    description:
      "Sistema de renderizado completo que permite mostrar LaTeX en la web. LaTeX es un poderoso procesador de texto científico que solo genera PDFs, pero creé una solución completa para visualización web.",
    technologies: ["React", "HTML5", "CSS3", "LaTeX"],
    gradient: "from-rose-400 to-orange-300",
  },
  {
    title: "DepInC (Dependency Injection Core)",
    description:
      "Micro-framework experimental en Python basado en arquitectura hexagonal (puertos y adaptadores). N核心 de inyección de dependencias con contenedor dinámico, enrutamiento CLI, y estructura tipo Laravel con comandos artesanales.",
    technologies: ["Python", "Hexagonal Architecture", "CLI", "Dependency Injection"],
    github: "https://github.com/cris0501/DepInc/tree/dev",
    demo: "https://github.com/cris0501/DepInc/tree/dev",
    gradient: "from-indigo-500 to-pink-500",
  },
  {
    title: "Tarjetas Interactivas",
    description:
      "Aplicación web para gestionar tarjetas de estudio (flashcards). Permite crear, gestionar y practicar con información de forma sencilla. Ideal para aprender idiomas o conceptos.",
    technologies: ["Vue.js", "Web App"],
    demo: "http://cards.esfmdev.net/",
    gradient: "from-blue-600 to-violet-600",
  },
  {
    title: "Recorrido Virtual",
    description:
      "Proyecto de mapa virtual que permite recorrer las instalaciones de la universidad. Una experiencia interactiva inspirada en Google Maps/StreetView.",
    technologies: ["Web GL", "Maps", "3D"],
    demo: "https://recorrido.esfm.ipn.mx/",
    gradient: "from-blue-600 to-violet-600",
  },
  {
    title: "Canal de YouTube",
    description:
      "Canal educativo donde explico conceptos de física, matemáticas y tecnología. Difundiendo conocimiento sobre temas con poca información disponible.",
    technologies: ["Educación", "Contenido"],
    demo: "https://youtube.com/@d3cia163/playlists",
    gradient: "from-blue-600 to-violet-600",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">{"<"}</span>
            Proyectos
            <span className="text-primary">{" />"}</span>
          </h2>
          <p className="text-muted-foreground text-lg">Algunos de mis trabajos más destacados</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 space-y-4 rounded-lg"
            >
              <div className={`h-2 w-20 bg-gradient-to-r ${project.gradient} rounded-full`} />

              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent px-4 py-2 rounded-md text-sm flex items-center gap-2 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-accent/50 hover:border-accent hover:bg-accent/10 bg-transparent px-4 py-2 rounded-md text-sm flex items-center gap-2 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
