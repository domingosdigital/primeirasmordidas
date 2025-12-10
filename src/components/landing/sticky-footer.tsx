"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function StickyFooter() {
  const isMobile = useIsMobile();

  if (typeof isMobile === "undefined" || !isMobile) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/80 p-4 backdrop-blur-sm md:hidden">
      <Button size="lg" className="w-full rounded-full text-lg font-semibold">
        Assinar por R$ 47.00/ano
      </Button>
    </footer>
  );
}
