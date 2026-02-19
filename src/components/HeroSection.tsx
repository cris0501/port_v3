import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Cristian Ramirez
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-muted-foreground">Desarrollador Full Stack</h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Hola! Soy Cristian, desarrollador full stack con estudios en física y matemáticas. La lógica es mi aliada en cada proyecto.
        </p>

        <div className="flex items-center justify-center gap-4 pt-8">
          <a
            href="https://github.com/cris0501"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent p-3 rounded-full"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-ramirez-178814288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent p-3 rounded-full"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:cristian050198@hotmail.com"
            className="border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-transparent p-3 rounded-full"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
