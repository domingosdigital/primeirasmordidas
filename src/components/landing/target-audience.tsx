import { Check } from "lucide-react";

const checklistItems = [
  "Para quem quer receitas rápidas e saudáveis pro bebê.",
  "Precisa agilizar a rotina com segurança.",
  "Quer saber exatamente o que oferecer em cada fase.",
  "Prefere uma alimentação mais natural e nutritiva.",
  "Tem medo de engasgo e quer aprender sobre o reflexo de GAG.",
];

export function TargetAudience() {
  return (
    <section className="w-full bg-card pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-24 lg:pb-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl tracking-tighter text-primary md:text-4xl/tight">
            Para quem é o App
          </h2>
        </div>
        <div className="mx-auto mt-4 w-full max-w-md space-y-4">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-left font-semibold text-base text-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
