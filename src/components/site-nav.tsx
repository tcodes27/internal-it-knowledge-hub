import { Link } from "@tanstack/react-router";
import { LifeBuoy } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/topics", label: "Browse Topics" },
  { to: "/popular", label: "Popular Fixes" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/admin", label: "Admin" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <LifeBuoy className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl">IT Support Hub</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3 py-1.5 text-sm text-foreground/70 transition hover:bg-muted hover:text-foreground"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "rounded-full px-3 py-1.5 text-sm bg-muted text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/request"
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:scale-[1.02] hover:bg-primary/90"
        >
          Submit Request
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div>
          <div className="font-serif text-lg text-foreground">IT Support Hub</div>
          <div>Helping employees solve IT issues, fast.</div>
        </div>
        <div className="flex gap-6">
          <Link to="/topics" className="hover:text-foreground">Topics</Link>
          <Link to="/popular" className="hover:text-foreground">Popular</Link>
          <Link to="/how-it-works" className="hover:text-foreground">How it works</Link>
          <Link to="/request" className="hover:text-foreground">Submit a request</Link>
        </div>
      </div>
    </footer>
  );
}
