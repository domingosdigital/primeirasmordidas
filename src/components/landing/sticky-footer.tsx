"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function StickyFooter() {
  const isMobile = useIsMobile();

  const handleClick = () => {
    const element = document.getElementById("offer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (typeof isMobile === "undefined" || !isMobile) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/80 p-4 backdrop-blur-sm md:hidden">
      <Button
        size="lg"
        className="w-full rounded-full text-lg"
        onClick={handleClick}
      >
        GARANTIR MEU ACESSO
      </Button>
    </footer>
  );
}
