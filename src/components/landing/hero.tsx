"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function Hero() {
  const handleClick = () => {
    const element = document.getElementById("offer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const expert = PlaceHolderImages.find((img) => img.id === "expert-debora");

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
              <p className="mx-auto max-w-[600px] text-base text-foreground">
                Receitas, cardápios, checklists, dicas e orientações -
                <span className="font-bold">
                  {" "}
                  tudo reunido em um Aplicativo para deixar sua rotina mais leve
                  e organizada.
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://i.imgur.com/ljcMwKU.gif"
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

              <div className="mt-6 flex flex-col items-center gap-4 text-center border p-12 rounded-2xl max-w-2xl">
                {expert && (
                  <Avatar className="h-32 w-32 border-4 border-primary">
                    <AvatarImage
                      src={expert.imageUrl}
                      alt={expert.description}
                    />
                    <AvatarFallback>DV</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <p className="text-base text-muted-foreground">
                    Debora Valentin <br /> Nutricionista e mãe.
                  </p>
                  <div className="mt-4 text-foreground text-base space-y-4">
                    <p>
                      Ao viver a ansiedade de não saber o que oferecer primeiro,
                      transformei essa dor em um caminho claro e seguro — para
                      que nenhuma mãe precise passar por isso sozinha.
                    </p>
                    <p>
                      O BabyFood nasceu da minha própria insegurança e hoje
                      compartilho ele com você para tornar essa fase mais leve,
                      segura e cheia de boas descobertas. Que cada receitinha
                      traga mais confiança e momentos especiais com seu bebê ❤️
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-foreground">
                  Aprovado por mães
                  <br />
                  Recomendado por nutricionistas.
                </p>
                <Image
                  src="https://i.imgur.com/oAT3Thv.png"
                  alt="Selo de aprovação"
                  width={150}
                  height={38}
                  className="mt-2"
                  data-ai-hint="approval seal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
