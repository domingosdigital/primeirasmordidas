import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const includedFeatures = [
  "Primeiros Passos",
  "Checklist",
  "Plano de 14 dias",
  "Sugestões diárias",
  "Receitas",
  "Guia de segurança",
  "Favoritos",
  "Evolução do bebê",
  "Atualizações constantes",
];

export function Offer() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Card className="rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-[1fr_0.8fr]">
              <div className="p-8 bg-card flex flex-col justify-center text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Tudo que você precisa na introdução alimentar
                </h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  ...por um valor acessível.
                </p>
                <div className="mt-8 space-y-4 text-muted-foreground">
                  <div className="line-through">
                    <p>Nutricionista → R$ 200 a R$ 350</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-xl font-semibold text-foreground">
                      Acesso ao Primeiras Mordidas
                    </p>
                    <p className="text-5xl font-bold text-primary">R$ 47</p>
                    <p className="font-medium">Pagamento único, acesso imediato!</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-accent/20 dark:bg-accent/10">
                <h3 className="text-2xl font-bold mb-6">O que está incluso:</h3>
                <ul className="space-y-4">
                  {includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 border-t bg-card">
              <Button
                size="lg"
                className="w-full rounded-full text-xl font-semibold"
              >
                <span
                  role="img"
                  aria-label="finger pointing right"
                  className="mr-2"
                >
                  👉
                </span>
                Garantir Acesso por R$ 47
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
