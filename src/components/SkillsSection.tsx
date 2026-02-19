import { BookOpen, Users, Lightbulb, Award } from "lucide-react";

const skills = {
  methodologies: [
    { name: "Scrum", icon: Users },
    { name: "Kanban", icon: Award },
    { name: "CI/CD", icon: Lightbulb },
    { name: "Test-Driven Development", icon: Lightbulb },
  ],
  soft: [
    "Trabajo en equipo",
    "Liderazgo técnico",
    "Resolución de problemas",
    "Comunicación efectiva",
    "Pensamiento analítico",
    "Metodologías ágiles",
    "Docencia",
  ],
  teaching: {
    institution: "ESFM - IPN",
    period: "2021 - 2023",
    courses: ["JavaScript", "Python", "C", "MySQL", "Git"],
    club: "Director del club ESFM-Dev",
    description: "Impartición de cursos de programación y gestión del club de desarrolladores",
  },
  background: {
    highSchool: {
      institution: "CBTis 59",
      career: "Técnico en Mecatrónica",
      achievements: [
        "Representación estatal en Olimpiada Mexicana de Matemáticas",
        "Proyecto: Carro con visión artificial usando OpenCV + Python, Raspberry Pi y circuitos PCB personalizados para control de motores",
      ],
    },
    university: {
      degree: "Físico Matemático",
      institution: "ESFM - IPN",
      period: "2019 - 2023",
      description: "Formación en física y matemáticas que me dio una base sólida en lógica, pensamiento analítico y resolución de problemas complejos. Durante mi carrera fui director del club de desarrollo ESFM-Dev y desarrollé proyectos como el Tour Virtual y la Biblioteca Científica.",
      projects: ["Tour Virtual ESFM", "Biblioteca Científica LaTeX", "Graficador 3D de Funciones"],
    },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">{"<"}</span>
            Skills & Metodologías
            <span className="text-primary">{" />"}</span>
          </h2>
          <p className="text-muted-foreground text-lg">Habilidades profesionales y experiencia docente</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 space-y-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
              <Award className="w-6 h-6" />
              Metodologías Ágiles
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.methodologies.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">{method.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-6 bg-card/50 backdrop-blur-sm border border-accent/20 space-y-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-accent flex items-center gap-2">
              <Users className="w-6 h-6" />
              Habilidades Profesionales
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg font-mono text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.3)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 space-y-4 md:col-span-2 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Experiencia Docente
            </h3>
            <div className="space-y-3">
              <p className="text-lg font-semibold">{skills.teaching.institution}</p>
              <p className="text-muted-foreground">{skills.teaching.period}</p>
              <p className="text-foreground/90">{skills.teaching.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.teaching.courses.map((course, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full">
                    {course}
                  </span>
                ))}
              </div>
              <p className="text-accent font-medium pt-2">{skills.teaching.club}</p>
            </div>
          </div>

          <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 space-y-4 md:col-span-2 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Formación Académica
            </h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-lg font-semibold">{skills.background.highSchool.institution}</p>
                <p className="text-muted-foreground">{skills.background.highSchool.career}</p>
              </div>
              <ul className="list-disc list-inside text-foreground/90 space-y-1">
                {skills.background.highSchool.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div className="pt-2 space-y-1">
                <p className="text-lg font-semibold">{skills.background.university.degree}</p>
                <p className="text-muted-foreground">{skills.background.university.institution} | {skills.background.university.period}</p>
                <p className="text-foreground/90 leading-relaxed">{skills.background.university.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skills.background.university.projects.map((project, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
