import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const includedFeatures = [
  "Dicas úteis e Primeiros Passos",
  "Checklist de Alimentos",
  "Plano de 14 dias",
  "Cardápio Diário Personalizado",
  "Receitas por Idade",
  "Guia de Cortes e Segurança",
  "Acompanhe a Evolução do Bebê",
  "Salve seus Favoritos",
  "Exames Essenciais",
  "Atualizações constantes e novas funcionalidades!",
];

export function Offer() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <Card className="overflow-hidden rounded-2xl border-2 border-primary shadow-2xl shadow-primary/20">
            <div className="bg-primary p-6 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold">Plano de Acesso Completo</h2>
              <p className="mt-2 text-lg">
                Sua jornada de introdução alimentar segura e tranquila começa
                agora.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <p className="font-medium line-through text-muted-foreground">
                  De <span className="text-lg">R$ 197</span>
                </p>
                <p className="font-bold text-foreground">Por apenas 12x de</p>
                <p className="my-2 text-6xl font-bold text-primary">R$ 4,77</p>
                <p className="text-sm font-semibold text-muted-foreground">
                  (ou R$ 47,00 à vista por ano)
                </p>
              </div>

              <div className="p-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Você terá acesso imediato a:
                </h3>
                <ul className="space-y-3">
                  {includedFeatures.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t bg-accent/20 p-8">
              <h3 className="mb-4 text-center text-lg font-bold text-foreground">
                E muito mais!
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {includedFeatures.slice(5).map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8">
              <Button
                size="lg"
                className="w-full rounded-full text-lg font-bold"
              >
                ASSINAR AGORA POR R$ 47,00/ano
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Pagamento seguro | Acesso imediato | Garantia de 7 dias
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
