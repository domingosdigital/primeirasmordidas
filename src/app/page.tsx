import { Features } from "@/components/landing/features";
import { FinalCTA } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { StickyFooter } from "@/components/landing/sticky-footer";
import { TargetAudience } from "@/components/landing/target-audience";
import { Testimonials } from "@/components/landing/testimonials";
import { ValueProp } from "@/components/landing/value-prop";
import { FAQ } from "@/components/landing/faq";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
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
