import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/misc/ThemeToggle";

function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary shadow ring-1 ring-black/5">
        <Search className="h-5 w-5" />
      </span>
      <span className="text-lg font-extrabold tracking-tight">FindIt</span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const navItems = (
    <nav className="flex flex-col gap-2 p-4 md:p-0 md:flex-row md:items-center md:gap-6">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
      <Link to="/report-lost" className="text-sm text-muted-foreground hover:text-foreground">Report Lost</Link>
      <Link to="/report-found" className="text-sm text-muted-foreground hover:text-foreground">Report Found</Link>
      <Link to="/community-points" className="text-sm text-muted-foreground hover:text-foreground">Community Points</Link>
    </nav>
  );
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden md:flex md:items-center md:gap-8">
          {navItems}
          <div className="flex items-center gap-1 md:gap-2">
            <ThemeToggle />
            <Button asChild variant="ghost" className="hidden lg:inline-flex">
              <a href="#login">Login</a>
            </Button>
            <Button asChild>
              <a href="#signup">Sign Up</a>
            </Button>
          </div>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && <div className="md:hidden border-t bg-background">{navItems}</div>}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-[#0f172a] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-2 text-white">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white text-primary shadow ring-1 ring-black/5">
                <Search className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">FindIt</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/70">Connecting students through lost and found items, building stronger communities one match at a time.</p>
          </div>
          <div>
            <p className="mb-2 font-semibold">Platform</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/report-lost" className="hover:text-white">Report Lost</Link></li>
              <li><Link to="/report-found" className="hover:text-white">Report Found</Link></li>
              <li><a href="#browse" className="hover:text-white">Browse Items</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold">Community</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#leaderboard" className="hover:text-white">Leaderboard</a></li>
              <li><a href="#points" className="hover:text-white">Points System</a></li>
              <li><a href="#stories" className="hover:text-white">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold">Support</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#help" className="hover:text-white">Help Center</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">© {new Date().getFullYear()} FindIt. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="content" className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
