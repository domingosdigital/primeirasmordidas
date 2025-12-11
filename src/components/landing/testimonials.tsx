"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

const testimonials1 = [
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
];

const testimonials2 = [
  {
    id: "testimonial-bruna",
    name: "Bruna A.",
    location: "Recife - PE",
    text: "Voltar a trabalhar foi um caos, e a culpa me consumia. Com o app, deixo tudo organizado pro meu marido e pra babá. Saber que meu filho está se alimentando bem, mesmo longe de mim, não tem preço.",
  },
  {
    id: "testimonial-renata",
    name: "Renata G.",
    location: "Fortaleza - CE",
    text: "Me sentia tão sozinha e julgada. A comunidade do app é um abraço quentinho. Trocamos dicas, medos... Hoje sei que não sou a única a passar por isso. É uma rede de apoio que toda mãe merece.",
  },
  {
    id: "testimonial-carolina",
    name: "Carolina V.",
    location: "Manaus - AM",
    text: "Meu bebê tinha restrições alimentares e eu estava apavorada. O app tem receitas específicas e dicas que me ajudaram a adaptar tudo com segurança. Foi um alívio enorme encontrar essa ajuda.",
  },
  {
    id: "testimonial-laura",
    name: "Laura B.",
    location: "Porto Alegre - RS",
    text: "A diferença entre GAG e engasgo era um fantasma pra mim. O app não só me ensinou a diferenciar, como me deu a calma que eu precisava pra lidar com os dois. Hoje vejo meu filho explorar a comida sem aquele medo paralisante.",
  },
];

export function Testimonials() {
  const [api1, setApi1] = React.useState<CarouselApi>();
  const [api2, setApi2] = React.useState<CarouselApi>();
  const [scrollSnaps1, setScrollSnaps1] = React.useState<number[]>([]);
  const [scrollSnaps2, setScrollSnaps2] = React.useState<number[]>([]);
  const [selectedIndex1, setSelectedIndex1] = React.useState(0);
  const [selectedIndex2, setSelectedIndex2] = React.useState(0);

  React.useEffect(() => {
    if (!api1) return;
    setScrollSnaps1(api1.scrollSnapList());
    const onSelect = () => setSelectedIndex1(api1.selectedScrollSnap());
    api1.on("select", onSelect);
    return () => {
      api1.off("select", onSelect);
    };
  }, [api1]);

  React.useEffect(() => {
    if (!api2) return;
    setScrollSnaps2(api2.scrollSnapList());
    const onSelect = () => setSelectedIndex2(api2.selectedScrollSnap());
    api2.on("select", onSelect);
    return () => {
      api2.off("select", onSelect);
    };
  }, [api2]);

  return (
    <section className="w-full pt-4 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl tracking-tighter text-primary sm:text-4xl">
            <span className="font-bold">Mães do Brasil inteiro</span>
            <br />
            estão comentando
          </h2>
        </div>
        <div className="mx-auto max-w-5xl pt-4 pb-8">
          <Carousel
            setApi={setApi1}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials1.map((testimonial, index) => {
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
                        <CardContent className="flex flex-col items-center p-8 text-center flex-1">
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
                          <p className="mb-4 text-base text-foreground flex-1">
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
        <div className="mx-auto max-w-5xl pt-0 pb-12">
          <Carousel
            setApi={setApi2}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials2.map((testimonial, index) => {
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
                        <CardContent className="flex flex-col items-center p-8 text-center flex-1">
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
                          <p className="mb-4 text-base text-foreground flex-1">
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
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {scrollSnaps2.map((_, index) => (
              <button
                key={index}
                onClick={() => api2?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === selectedIndex2 ? "bg-primary" : "bg-primary/20"
                }`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Arraste para o lado</p>
        </div>
      </div>
    </section>
  );
}
