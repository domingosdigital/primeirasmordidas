import { Check, X } from "lucide-react";

const problems = [
  "E-books chatos e guias que não funcionam na prática.",
  "Informações bagunçadas e contraditórias na internet.",
  "Materiais pouco explicados e sem um passo a passo claro.",
  "Insegurança e falta de clareza sobre o que fazer.",
];

const solutions = [
  "+150 receitas simples para todas as refeições.",
  "Guias, dicas e checklists para uma introdução alimentar segura.",
  "Plano de 14 dias para iniciar a jornada com o pé direito.",
  "Design fácil e intuitivo, pensado para a rotina corrida.",
  "Rotina prática com cardápios e receitas que funcionam.",
  "Tudo organizado em um só lugar, na palma da sua mão.",
];

export function ValueProp() {
  return (
    <section className="w-full bg-card py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Por que o BabyFood®
            <br />
            é diferente?
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col space-y-4 rounded-xl border border-destructive/20 bg-destructive/10 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-center text-destructive">
              O jeito antigo e confuso
            </h3>
            <ul className="flex-1 space-y-4">
              {problems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/20">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4 rounded-xl border-2 border-primary bg-primary/10 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-primary">
              Com o App BabyFood®
            </h3>
            <ul className="flex-1 space-y-4">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
