import {
  Footprints,
  ClipboardCheck,
  CalendarDays,
  Lightbulb,
  BookOpenText,
  TrendingUp,
  ShieldCheck,
  Star,
  Stethoscope,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import React from "react";

const features = [
  {
    icon: (props: LucideProps) => <Footprints {...props} />,
    title: "Dicas úteis",
    description: "Tudo que a mãe precisa saber antes de começar.",
  },
  {
    icon: (props: LucideProps) => <ClipboardCheck {...props} />,
    title: "Checklist de Alimentos",
    description: "Veja o que já ofereceu e o que falta.",
  },
  {
    icon: (props: LucideProps) => <CalendarDays {...props} />,
    title: "Plano de 14 Dias",
    description: "Sugestões prontas para facilitar o início.",
  },
  {
    icon: (props: LucideProps) => <Lightbulb {...props} />,
    title: "Cardápio Diário",
    description: "Cardápio automático para não perder tempo.",
  },
  {
    icon: (props: LucideProps) => <BookOpenText {...props} />,
    title: "Receitas por Idade",
    description: "Refeições rápidas e seguras para cada fase.",
  },
  {
    icon: (props: LucideProps) => <TrendingUp {...props} />,
    title: "Evolução do Bebê",
    description: "Acompanhe cada etapa com clareza.",
  },
  {
    icon: (props: LucideProps) => <ShieldCheck {...props} />,
    title: "Guia de Segurança",
    description: "Cortes seguros e como evitar acidentes.",
  },
  {
    icon: (props: LucideProps) => <Star {...props} />,
    title: "Favoritos",
    description: "Salve tudo o que precisar no dia a dia.",
  },
  {
    icon: (props: LucideProps) => <Stethoscope {...props} />,
    title: "Exames Essenciais",
    description: "Saiba quais exames são importantes.",
  },
];

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              O que você
              <br />
              encontra no App
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Recursos pensados para tornar a introdução alimentar uma jornada
              tranquila e segura.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
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
