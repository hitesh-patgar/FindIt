import { Button } from "@/components/ui/button";
import { Search, CheckCircle2, Users2, Star } from "lucide-react";
import NeonSign from "@/components/graphics/NeonSign";

export default function Index() {
  return (
    <div id="home">
      {/* HERO */}
      <section className="relative">
        <div className="container py-16 text-foreground md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl">
                Find what's lost.
                <br />
                <span className="text-amber-300">Help what's found.</span>
              </h1>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Join our community‑driven platform where students help each other recover lost items. Earn points, build connections, and make a difference.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#report-lost">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-500/90 text-white shadow-glow">
                    + Report Item
                  </Button>
                </a>
                <a href="#browse">
                  <Button size="lg" variant="outline">Browse Found Items</Button>
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-3xl bg-card p-6 shadow-lg ring-1 ring-border">
                <p className="text-sm text-muted-foreground">
                  diverse college students exchanging lost items, helping each other, modern illustration style, friendly atmosphere
                </p>
                <div className="mt-4 aspect-[4/3] w-full">
                  <NeonSign text="FindIt" className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container -mt-8 grid gap-6 md:grid-cols-3">
        <Stat icon={<CheckCircle2 className="h-6 w-6 text-emerald-500" />} value="247" label="Items Found Today" />
        <Stat icon={<Users2 className="h-6 w-6 text-indigo-500" />} value="1,542" label="Active Users" />
        <Stat icon={<Star className="h-6 w-6 text-amber-500" />} value="8,934" label="Points Distributed" />
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="container py-16">
        <h2 className="text-center text-3xl font-bold">How FindIt Works</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
          Simple steps to reunite lost items with their owners while earning community points
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <Step num={1} title="Report Items" desc="Found something? Lost something? Report it with photos and details. Our AI helps match items automatically." />
          <Step num={2} title="Get Matched" desc="Our smart system notifies you when potential matches are found. Browse and claim your items easily." />
          <Step num={3} title="Earn Rewards" desc="Help others and earn community points. Your contributions count towards social service credits." />
        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section id="browse" className="container pb-10">
        <h3 className="text-center text-2xl font-semibold">Recent Activity</h3>
        <p className="mx-auto mt-1 max-w-2xl text-center text-muted-foreground">See what's happening in the community</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2 font-medium"><Search className="h-4 w-4 text-rose-600" /> Recently Lost</div>
            <div className="space-y-3">
              <ItemCard title="iPhone 13 Pro" subtitle="Lost near Library Block B" time="2 hours ago" action="I Found This" actionColor="indigo" />
              <ItemCard title="Blue Backpack" subtitle="Lost at Cafeteria" time="5 hours ago" action="I Found This" actionColor="indigo" />
            </div>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2 font-medium"><Search className="h-4 w-4 text-emerald-600" /> Recently Found</div>
            <div className="space-y-3">
              <ItemCard title="Red Water Bottle" subtitle="Found at Sports Complex" time="1 hour ago" action="Claim Item" actionColor="emerald" />
              <ItemCard title="Wireless Headphones" subtitle="Found in Lecture Hall 3" time="3 hours ago" action="Claim Item" actionColor="emerald" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="container py-16 text-center text-foreground">
          <h3 className="text-3xl font-semibold">Ready to Make a Difference?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Join thousands of students who are helping build a more connected and caring community.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg">Get Started Now</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Hidden anchor sections for nav targets */}
      <div id="report-lost" className="container py-10">
        <h4 className="text-lg font-semibold">Report Lost</h4>
        <p className="text-sm text-muted-foreground">Use the Report Item button above to submit details. Full flow coming next.</p>
      </div>
      <div id="report-found" className="container pb-16">
        <h4 className="text-lg font-semibold">Report Found</h4>
        <p className="text-sm text-muted-foreground">Use the Report Item button above to submit details. Full flow coming next.</p>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-sm">
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-muted">{icon}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-lg font-bold text-foreground">
        {num}
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function ItemCard({ title, subtitle, time, action, actionColor }: { title: string; subtitle: string; time: string; action: string; actionColor: "emerald" | "indigo" }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border bg-card p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-muted" />
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-muted-foreground">{subtitle} • {time}</div>
        </div>
      </div>
      <Button className={actionColor === "emerald" ? "bg-emerald-500 hover:bg-emerald-500/90" : "bg-indigo-600 hover:bg-indigo-600/90"}>{action}</Button>
    </div>
  );
}
