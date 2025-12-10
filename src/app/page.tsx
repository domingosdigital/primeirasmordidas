import { Features } from "@/components/landing/features";
import { FinalCTA } from "@/components/landing/final-cta";
import { Guarantee } from "@/components/landing/guarantee";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { StickyFooter } from "@/components/landing/sticky-footer";
import { TargetAudience } from "@/components/landing/target-audience";
import { Testimonials } from "@/components/landing/testimonials";
import { ValueProp } from "@/components/landing/value-prop";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <Hero />
        <TargetAudience />
        <Features />
        <Testimonials />
        <ValueProp />
        <Offer />
        <Guarantee />
        <FinalCTA />
      </main>
      <StickyFooter />
    </div>
  );
}
