import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:px-6">
        <h2 className="text-2xl tracking-tighter text-primary sm:text-3xl">
          A <span className="font-bold">introdução alimentar</span>
          <br />
          do seu bebê com <span className="font-bold">segurança</span>
          <br />
          e <span className="font-bold">tranquilidade.</span>
        </h2>
        <div className="flex flex-col gap-2">
          <p className="max-w-[600px] text-sm text-muted-foreground">
            © 2025 BabyFood® | Todos os direitos reservados.
          </p>
          <p className="max-w-[600px] text-xs text-muted-foreground">
            Política de Privacidade | Termos de uso | Sobre o App
          </p>
        </div>
      </div>
    </section>
  );
}
