import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-accent/30 p-8 text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
          <h3 className="mt-4 text-2xl font-bold text-foreground">
            Garantia Incondicional de 7 dias
          </h3>
          <p className="mt-2 text-muted-foreground md:text-lg">
            Se não sentir mais segurança na IA do seu bebê em 7 dias, nós
            devolvemos 100% do valor. Sem perguntas, sem burocracia. O risco
            é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
}
