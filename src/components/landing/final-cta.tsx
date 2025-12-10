import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter">
          A introdução alimentar
          <br />
          do seu bebê com segurança
          <br />
          e tranquilidade.
        </h2>
        <p className="max-w-[600px] text-muted-foreground">
          A fase mais importante da alimentação do seu bebê merece carinho,
          segurança e clareza.
        </p>
      </div>
    </section>
  );
}
