import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Comece hoje a introdução alimentar do seu bebê com segurança e
          tranquilidade.
        </h2>
        <Button
          size="lg"
          className="w-full max-w-md rounded-full text-xl font-semibold"
        >
          <span role="img" aria-label="finger pointing right" className="mr-2">
            👉
          </span>
          Quero Começar Agora
        </Button>
        <p className="max-w-[600px] text-muted-foreground">
          A fase mais importante da alimentação do seu bebê merece carinho,
          segurança e clareza.
        </p>
      </div>
    </section>
  );
}
