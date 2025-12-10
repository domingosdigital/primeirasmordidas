import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full bg-card pt-12 md:pt-24 lg:pt-32 pb-8 md:pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
                <span className="text-3xl sm:text-4xl">
                  Primeiras Mordidas App
                </span>
                <br />
                <span className="text-3xl font-normal sm:text-4xl">
                  Seu guia completo sobre BLW e como oferecer alimentos com
                  segurança!
                </span>
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Perfeito para mães que querem praticidade, segurança e
                resultados rápidos.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://i.imgur.com/SjL8pDv.gif"
                alt="Demonstração do app Primeiras Mordidas"
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
                className="w-full max-w-xs rounded-full text-lg font-semibold text-white"
              >
                Assinar agora por R$ 47,00/ano
              </Button>
              <p className="text-sm font-bold text-muted-foreground">
                Aprovado por mais de 30 mil famílias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
