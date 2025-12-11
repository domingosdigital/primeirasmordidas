import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Offer } from "./offer";

const problems = [
  "E-books chatos e guias que não funcionam na prática.",
  "Informações bagunçadas e contraditórias na internet.",
  "Materiais pouco explicados e sem um passo a passo claro.",
  "Insegurança e falta de clareza sobre o que fazer.",
  "Receitas que o bebê não se adapta e você não sabe como variar.",
];

const solutions = [
  "+150 receitas simples para todas as refeições.",
  "Guias, dicas e checklists para uma introdução alimentar segura.",
  "Atualizações mensais com novas receitas e recursos.",
  "Design fácil e intuitivo, pensado para a rotina corrida.",
  "Rotina prática com cardápios e receitas que funcionam.",
  "Tudo organizado em um só lugar, na palma da sua mão.",
];

export function ValueProp() {
  return (
    <section
      id="value-prop"
      className="w-full bg-card pt-8 md:pt-12 pb-8 md:pb-12"
    >
      <div className="container mx-auto px-4 md:px-6">
        <Offer />
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 mt-0">
          <h2 className="text-3xl tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Por que o <span className="font-bold">BabyFood®</span>
            <br />é diferente?
          </h2>
        </div>
        <Card className="mx-auto mt-8 max-w-5xl rounded-2xl border-2 border-primary shadow-lg shadow-primary/10">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col space-y-4 rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-destructive/5 p-8">
                <h3 className="text-2xl font-bold text-center text-destructive">
                  Sem o App BabyFood®
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
              <div className="flex flex-col space-y-4 rounded-b-xl md:rounded-bl-none md:rounded-r-xl bg-primary/5 p-8 md:border-l-2 md:border-primary">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
