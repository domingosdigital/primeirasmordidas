import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Offer() {
  return (
    <section className="w-full bg-card pt-12 md:pt-12 lg:pt-16 pb-12 md:pb-24 lg:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <Card className="overflow-hidden rounded-2xl border-2 border-primary shadow-2xl shadow-primary/20">
            <div className="bg-primary p-6 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold">Plano Completo</h2>
              <p className="mt-2 font-bold text-lg">
                A introdução alimentar do seu bebê na palma da sua mão 📱
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <p className="font-medium line-through text-muted-foreground">
                  De <span className="text-lg">R$ 147,00</span>
                </p>
                <p className="font-bold text-foreground">Por apenas 12x de</p>
                <p className="my-2 text-6xl font-bold text-primary">R$ 4,77</p>
                <p className="text-sm font-bold text-foreground">
                  (ou R$ 47,00 à vista por ano)
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  +12.000 mães já usam.
                </p>
              </div>
            </div>

            <div className="p-8 border-t">
              <Button
                size="lg"
                className="w-full rounded-full text-base font-bold"
              >
                ASSINAR AGORA POR R$ 47,00/ano
              </Button>
              <div className="mt-3 text-center text-xs text-muted-foreground font-bold">
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
