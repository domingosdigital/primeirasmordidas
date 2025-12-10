import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  "Para quem quer receitas rápidas e saudáveis para o bebê.",
  "Para quem deseja facilitar a rotina sem perder segurança.",
  "Para quem quer saber o que oferecer em cada fase, sem confusão.",
  "Para quem busca alimentação mais natural e nutritiva desde o início.",
  "Para quem tem medo de engasgo e reflexo de GAG",
];

export function TargetAudience() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Para quem é o App:
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Se você se identifica com algum destes pontos, nosso app foi feito
            para você.
          </p>
        </div>
        <div className="mx-auto mt-8 w-full max-w-md space-y-4">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <span className="text-left text-lg text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
