export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-center border-b bg-primary">
      <div className="container flex items-center justify-center">
        <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
          BabyFood®
        </h1>
      </div>
    </header>
  );
}
