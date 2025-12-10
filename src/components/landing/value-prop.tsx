import { Check, X } from "lucide-react";

const problems = [
  "Internet lotada de informações contraditórias",
  "Médicos com opiniões diferentes",
  "Conteúdos soltos que não mostram passo a passo",
  "Falta de clareza sobre como servir alimentos com segurança",
];

const solutions = [
  "Método simples",
  "Design fácil",
  "Rotina prática",
  "Tudo organizado em um só lugar",
];

export function ValueProp() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Por que o App funciona tão bem?
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4 rounded-lg border border-red-200/50 bg-red-50/20 p-6 dark:border-destructive/20 dark:bg-destructive/10">
            <h3 className="text-2xl font-semibold text-center text-destructive">
              O caos da informação
            </h3>
            <ul className="space-y-3">
              {problems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 flex-shrink-0 mt-1 text-destructive" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-lg border border-primary/20 bg-primary/10 p-6">
            <h3 className="text-2xl font-semibold text-center text-primary">
              A clareza do método
            </h3>
            <ul className="space-y-3">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-1 text-primary" />
                  <span className="font-medium text-foreground">
                    ✔ {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
