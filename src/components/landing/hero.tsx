"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleClick = () => {
    const element = document.getElementById("offer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full bg-card pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <h1 className="text-3xl font-light tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Introdução Alimentar
              <br />
              <span className="font-bold">prática, segura</span>
              <br />e <span className="font-bold">sem enrolação!</span>
            </h1>
            <div className="space-y-4">
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                <span className="text-foreground">
                  Receitas rápidas, cardápios saudáveis e orientações seguras
                </span>{" "}
                -{" "}
                <span className="font-bold text-foreground">
                  tudo reunido em um Único Aplicativo para facilitar a correria
                  do dia a dia.
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://i.imgur.com/7gQGUMc.gif"
                alt="Demonstração do app BabyFood®"
                width={720}
                height={405}
                className="rounded-lg"
                data-ai-hint="app mockup"
                unoptimized
                priority
              />
            </div>
            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-full max-w-sm">
                <Button
                  size="lg"
                  className="w-full rounded-full text-xl font-semibold animate-pulse-slow h-14"
                  onClick={handleClick}
                >
                  Plano anual por R$ 47,00
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Aprovado e recomendado por
                <br />
                <span className="text-foreground">nutricionistas</span> e{" "}
                <span className="text-foreground">mães</span> de
                todo Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
