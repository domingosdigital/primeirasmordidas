import { Features } from "@/components/landing/features";
import { FinalCTA } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { StickyFooter } from "@/components/landing/sticky-footer";
import { TargetAudience } from "@/components/landing/target-audience";
import { Testimonials } from "@/components/landing/testimonials";
import { ValueProp } from "@/components/landing/value-prop";
import { FAQ } from "@/components/landing/faq";
import { Header } from "@/components/landing/header";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1 pt-16 pb-24 md:pb-0">
        <Hero />
        <Features />
        <TargetAudience />
        <Testimonials />
        <ValueProp />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <StickyFooter />
    </div>
  );
}
