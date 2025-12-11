import {
  UtensilsCrossed,
  BookOpenText,
  Lightbulb,
  CalendarDays,
  ClipboardCheck,
  Footprints,
  ShieldCheck,
  Star,
  Stethoscope,
  BrainCircuit,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: (props: LucideProps) => <UtensilsCrossed {...props} />,
    title: "+150 Receitas simples, nutritivas e organizadas",
    description: "Refeições rápidas e seguras para cada fase.",
  },
  {
    icon: (props: LucideProps) => <BookOpenText {...props} />,
    title: "Receitas por Idade",
    description: "Encontre facilmente a receita ideal para a fase do seu bebê.",
  },
  {
    icon: (props: LucideProps) => <Lightbulb {...props} />,
    title: "Cardápio Diário",
    description:
      "Sugestões automáticas para não perder tempo pensando no que fazer.",
  },
  {
    icon: (props: LucideProps) => <CalendarDays {...props} />,
    title: "Plano de 14 Dias",
    description: "Um passo a passo pronto para facilitar o início da jornada.",
  },
  {
    icon: (props: LucideProps) => <ClipboardCheck {...props} />,
    title: "Checklist de Alimentos",
    description: "Acompanhe o que já ofereceu e o que ainda falta.",
  },
  {
    icon: (props: LucideProps) => <Footprints {...props} />,
    title: "Dicas Úteis",
    description: "Tudo que você precisa saber antes de começar, de forma clara.",
  },
  {
    icon: (props: LucideProps) => <ShieldCheck {...props} />,
    title: "Guia de Segurança",
    description: "Aprenda os cortes seguros e como agir em emergências.",
  },
  {
    icon: (props: LucideProps) => <Star {...props} />,
    title: (
      <span className="flex items-center gap-2">
        Favoritos <Badge>Função Nova</Badge>
      </span>
    ),
    description:
      "Salve as receitas e dicas que mais gosta para consultar sempre.",
  },
  {
    icon: (props: LucideProps) => <Stethoscope {...props} />,
    title: (
      <span className="flex items-center gap-2">
        Exames Essenciais <Badge>Função Nova</Badge>
      </span>
    ),
    description: "Saiba quais são os exames importantes nesta fase.",
  },
  {
    icon: (props: LucideProps) => <BrainCircuit {...props} />,
    title: (
      <span className="flex items-center gap-2">
        Nutri IA <Badge variant="secondary">Em construção</Badge>
      </span>
    ),
    description:
      "Tire suas dúvidas sobre alimentação com nossa inteligência artificial.",
  },
];

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl tracking-tighter text-primary sm:text-5xl">
              O que você encontra
              <br />
              no App <span className="font-bold">BabyFood®</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border bg-background shadow-sm">
                {feature.icon({ className: "h-6 w-6 text-primary" })}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
