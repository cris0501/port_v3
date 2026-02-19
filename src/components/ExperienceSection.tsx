import { Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "Ago 2023 - Presente",
    role: "Desarrollador Full Stack",
    company: "NECSUS",
    description:
      "Desarrollo full stack con enfoque en integración continua y despliegue. Trabajando con Vue.js para frontend y Java para backend. Gestión de bases de datos MySQL, MongoDB y Redis.",
    technologies: ["Vue.js", "Java", "MySQL", "MongoDB", "Redis", "Docker", "Jenkins", "GitLab"],
  },
  {
    period: "Ene 2023 - Ago 2023",
    role: "Desarrollador Full Stack",
    company: "SINTEC",
    description:
      "Desarrollo de aplicaciones web con Vue.js y Laravel. Implementación de soluciones backend y gestión de bases de datos MySQL.",
    technologies: ["Vue.js", "Laravel", "MySQL", "PHP"],
  },
  {
    period: "2021 - 2023",
    role: "Director & Instructor",
    company: "ESFM - IPN (Club ESFM-Dev)",
    description:
      "Director del club de desarrollo ESFM-Dev. Impartición de cursos de programación con constancias firmadas por la ESFM. Desarrollo del Tour Virtual de la universidad. Colaboración con profesores para crear notas de estudio en LaTeX para distribuir a la comunidad estudiantil.",
    technologies: ["JavaScript", "Python", "C", "MySQL", "Git", "LaTeX", "WebGL"],
    link: "https://www.facebook.com/esfm.dev/",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">{"<"}</span>
            Experiencia
            <span className="text-primary">{" />"}</span>
          </h2>
          <p className="text-muted-foreground text-lg">Mi trayectoria profesional en el desarrollo de software</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-2 text-primary font-mono text-sm md:min-w-[180px]">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors pt-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Conoce más sobre el club
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
