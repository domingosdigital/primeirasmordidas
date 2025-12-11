import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full bg-card pt-12 md:pt-24 lg:pt-32 pb-8 md:pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <h1 className="text-3xl tracking-tighter text-primary sm:text-4xl">
              Introdução Alimentar
              <br />
              <span className="font-bold">prática, segura</span>
              <br />e <span className="font-bold">sem enrolação</span>
            </h1>
            <div className="space-y-4">
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                <span className="text-foreground">
                  Receitas rápidas, cardápios saudáveis, orientações seguras e
                  muito mais
                </span>{" "}
                -{" "}
                <span className="font-bold text-foreground">
                  tudo reunido em um único app para facilitar a rotina familiar.
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://i.imgur.com/SjL8pDv.gif"
                alt="Demonstração do app BabyFood®"
                width={720}
                height={405}
                className="rounded-lg shadow-lg"
                data-ai-hint="app mockup"
                unoptimized
              />
            </div>
            <div className="w-full flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="w-full max-w-xs rounded-full text-lg font-semibold"
              >
                Assinar agora por R$ 47,00/ano
              </Button>
              <p className="text-sm font-bold text-muted-foreground">
                Aprovado por mais de 50 mil famílias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
