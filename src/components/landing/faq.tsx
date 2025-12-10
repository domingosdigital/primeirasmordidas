import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "As receitas são realmente fáceis e com ingredientes simples?",
    answer:
      "Sim! Todas as receitas foram pensadas para a rotina corrida, usando ingredientes fáceis de encontrar em qualquer supermercado. O objetivo é simplificar, e não complicar seu dia a dia.",
  },
  {
    question: "O acesso é pagamento único ou mensal?",
    answer:
      "O pagamento é anual. Você paga R$ 47,00 e tem acesso a tudo por 12 meses, incluindo todas as atualizações e novos recursos que forem adicionados.",
  },
  {
    question: "Como vou receber o acesso ao app?",
    answer:
      "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para baixar e acessar o aplicativo na hora.",
  },
  {
    question: "O app serve para bebês de qual idade?",
    answer:
      "O aplicativo foi pensado para acompanhar toda a jornada da introdução alimentar, desde os 6 meses (ou quando seu bebê apresentar os sinais de prontidão) até os 2 anos de idade.",
  },
  {
    question: "Preciso ter conhecimento prévio sobre introdução alimentar?",
    answer:
      "Não! O app foi feito para todas as mães, desde as que estão começando do zero até as que já pesquisaram, mas ainda se sentem inseguras. Guiamos você em cada passo para uma introdução alimentar segura, saudável e prática.",
  },
  {
    question: "E se eu tiver dificuldades ou o bebê não aceitar?",
    answer:
      "Fique tranquila! O app possui dicas específicas para lidar com a seletividade alimentar inicial e os desafios mais comuns. Além disso, a comunidade e o suporte estão lá para ajudar.",
  },
];

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:pb-32">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
