import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Footprints,
  ClipboardCheck,
  CalendarDays,
  Lightbulb,
  BookOpenText,
  TrendingUp,
  ShieldCheck,
  Star,
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
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 md:grid-cols-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center space-y-4 rounded-2xl border bg-background p-6 text-center shadow-sm transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border bg-background shadow-sm">
                {feature.icon({ className: "h-8 w-8 text-primary" })}
              </div>
              <div className="relative z-10 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
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
