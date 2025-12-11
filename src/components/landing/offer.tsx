"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Hourglass } from "lucide-react";
import Link from "next/link";

export function Offer() {
  return (
    <section id="offer" className="w-full bg-card pt-0 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <Card className="overflow-hidden rounded-2xl border-2 border-primary shadow-2xl shadow-primary/20">
            <div className="bg-primary p-6 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold">
                Baby<span className="font-normal">Food App</span>
              </h2>
              <p className="mt-2 text-lg">
                A <span className="font-bold">introdução alimentar</span> do
                seu bebê na palma da sua mão 📱
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <p className="font-medium line-through text-muted-foreground text-lg">
                  De <span className="text-xl">R$ 147,00</span>
                </p>
                <p className="font-bold text-foreground">Por apenas 12x de</p>
                <p className="my-2 text-6xl font-bold text-primary">R$ 4,77</p>
                <p className="text-base font-bold text-foreground">
                  ou R$ 47,00 à vista por ano.
                </p>
                <div className="mt-4 flex flex-col items-start gap-2 text-sm font-bold">
                  <span className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    +50.637 mães usam diariamente
                  </span>
                  <span className="flex items-center gap-2 text-foreground">
                    <Hourglass className="h-5 w-5 text-primary" />
                    Últimas vagas com desconto
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t px-4 sm:px-6 py-8">
              <Link
                href="https://checkout.dinamicasdafe.site/VCCL1O8SCM00"
                className="w-full block"
              >
                <Button
                  size="lg"
                  className="w-full rounded-full text-base font-bold animate-pulse-slow"
                >
                  GARANTIR MEU ACESSO AGORA
                </Button>
              </Link>
              <div className="mt-3 text-center text-xs text-muted-foreground">
                <p>Pagamento seguro | Acesso imediato</p>
                <p>Garantia de 7 dias</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
