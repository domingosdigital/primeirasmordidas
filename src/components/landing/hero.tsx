import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
                Primeiras Mordidas App - Faça uma introdução alimentar de forma saudável e respeitosa.
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Aprenda de forma fácil e segura como fazer introdução alimentar através da abordagem BLW
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://i.imgur.com/zsj2O9I.png"
                alt="Bebê feliz comendo"
                width={720}
                height={405}
                className="rounded-lg shadow-lg"
                data-ai-hint="baby eating"
              />
            </div>
            <div className="flex w-full flex-col items-center gap-4">
              <Button
                size="lg"
                className="w-full max-w-xs rounded-full text-lg font-semibold"
              >
                Assinar agora por R$ 47,00/ano
              </Button>
              <p className="text-sm text-muted-foreground">
                +12.000 mães já começaram a IA com mais confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
