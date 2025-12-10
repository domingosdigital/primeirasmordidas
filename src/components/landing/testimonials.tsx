import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-ana",
    name: "Ana P.",
    location: "Curitiba - PR",
    text: "Tinha pavor só de pensar em engasgo. O guia de cortes seguros salvou minhas noites de sono. Agora me sinto confiante de verdade em cada refeição.",
  },
  {
    id: "testimonial-lorena",
    name: "Lorena R.",
    location: "Salvador - BA",
    text: "Eu ficava perdida com tanta informação na internet. O plano de 14 dias foi a luz no fim do túnel. Simples, direto e meu bebê amou!",
  },
  {
    id: "testimonial-camila",
    name: "Camila S.",
    location: "São Paulo - SP",
    text: "Trabalho fora e não tinha tempo para planejar nada. O cardápio diário e as receitas rápidas são minha mão na roda. Facilitou demais a rotina.",
  },
  {
    id: "testimonial-julia",
    name: "Júlia F.",
    location: "Rio de Janeiro - RJ",
    text: "Meu filho era super seletivo no começo. As receitas do app, além de seguras, são muito criativas. Hoje ele come de tudo um pouco. Incrível!",
  },
  {
    id: "testimonial-fernanda",
    name: "Fernanda M.",
    location: "Belo Horizonte - MG",
    text: "O que eu ia gastar com uma consulta valeu por um ano de acesso. O checklist de alimentos me deu um controle que eu não tinha ideia que precisava.",
  },
  {
    id: "testimonial-patricia",
    name: "Patrícia L.",
    location: "Porto Alegre - RS",
    text: "A diferença do reflexo de GAG para o engasgo não estava clara para mim. O app explicou de um jeito tão simples que perdi o medo. Recomendo de olhos fechados.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full pt-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
            O que mães do Brasil
            <br />
            inteiro estão falando:
          </h2>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === testimonial.id
                );
                return (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <Card className="rounded-2xl shadow-none transition-transform flex flex-col h-full">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center flex-1">
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
                          <p className="mb-4 flex-1 text-base font-medium text-foreground">
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
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
