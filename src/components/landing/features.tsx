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
    title: "Primeiros Passos",
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
    title: "Sugestão do Dia",
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
              O que o app faz por você
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Recursos pensados para tornar a introdução alimentar uma jornada
              tranquila e segura.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-col items-center gap-4 pb-4">
                {feature.icon({ className: "h-10 w-10 text-accent-foreground opacity-50" })}
                <CardTitle className="text-center text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
