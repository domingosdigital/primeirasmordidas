import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-ana",
    name: "Ana P.",
    text: "Eu tinha medo da IA, mas com o app ficou tudo claro.",
  },
  {
    id: "testimonial-lorena",
    name: "Lorena R.",
    text: "O checklist ajudou demais. Parou minha ansiedade.",
  },
  {
    id: "testimonial-camila",
    name: "Camila S.",
    text: "As sugestões do dia são perfeitas para a rotina.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full pt-0 pb-12 md:pb-24 lg:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            O que as mães estão dizendo
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Depoimentos reais de quem já transformou a introdução alimentar.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === testimonial.id
            );
            return (
              <Card
                key={testimonial.name}
                className="rounded-2xl shadow-sm transition-transform"
              >
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={80}
                      height={80}
                      className="mb-4 rounded-full object-cover aspect-square"
                    />
                  )}
                  <p className="mb-4 flex-1 text-lg font-medium text-foreground">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 font-semibold text-muted-foreground">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
