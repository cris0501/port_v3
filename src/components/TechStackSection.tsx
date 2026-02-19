const techStack = {
  frontend: ["JS", "CSS", "SCSS", "Vue.js", "React", "Tailwind CSS"],
  backend: ["Java", "Laravel", "Node.js", "Python", "PHP", "Redis", "PostgreSQL", "MongoDB", "MySQL", "REST", "GraphQL"],
  tools: ["Git", "Jujutsu (jj)", "Docker", "Jenkins", "Github", "GitLab", "AWS", "Linux", "Bash"],
};

export function TechStackSection() {
  return (
    <section id="stack" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">{"<"}</span>
            Stack Tecnológico
            <span className="text-primary">{" />"}</span>
          </h2>
          <p className="text-muted-foreground text-lg">Herramientas y tecnologías</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 space-y-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.frontend.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg font-mono text-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 space-y-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-accent">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.backend.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg font-mono text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.3)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 space-y-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary">Herramientas</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.tools.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg font-mono text-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
