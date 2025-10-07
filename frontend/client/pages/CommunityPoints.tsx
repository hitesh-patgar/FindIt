import { Trophy, Medal, ChevronDown, CheckCircle2, Flame, Star, Smile, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function CommunityPoints() {
  return (
    <div className="container py-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Personal Dashboard */}
        <section className="space-y-6 md:col-span-1">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><span className="inline-grid place-items-center rounded-full bg-amber-100 p-1 text-amber-600"><Trophy className="h-4 w-4"/></span> Personal Dashboard</div>
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/80?img=15" alt="avatar" className="h-12 w-12 rounded-full object-cover"/>
              <div>
                <div className="font-medium">Alex Johnson</div>
                <div className="text-xs text-muted-foreground">Engineering Student</div>
                <div className="text-xs text-amber-600">★ Level 5 Helper</div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <CardStat value="2,450" label="Total Points" color="indigo"/>
              <CardStat value="12" label="Badges Earned" color="emerald"/>
            </div>
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Next Reward Unlock</span>
                <span>550 points to go</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[81%] rounded-full bg-indigo-500"/>
              </div>
              <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>2,450</span>
                <span>3,000</span>
              </div>
            </div>
            <div className="mt-6 rounded-xl p-4 text-sm bg-amber-50 text-slate-900 ring-1 ring-amber-200/60 dark:bg-amber-900/20 dark:text-foreground dark:ring-amber-400/20">
              <div className="mb-2 font-medium">Pending Verifications</div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between"><span>Found iPhone 13</span><span className="text-emerald-600 dark:text-emerald-400">+50 pts</span></li>
                <li className="flex items-center justify-between"><span>Returned Wallet</span><span className="text-emerald-600 dark:text-emerald-400">+75 pts</span></li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 p-5 text-white shadow-sm">
            <div className="flex items-center gap-2 text-sm font-medium"><GraduationCap className="h-4 w-4"/> AICTE Integration</div>
            <p className="mt-2 text-sm/6 opacity-90">Your community service points will be automatically added to your AICTE social service credits portfolio.</p>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs"><CheckCircle2 className="h-4 w-4"/> Auto‑sync enabled</span>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="md:col-span-2">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold"><span className="inline-grid place-items-center rounded-full bg-yellow-100 p-1 text-yellow-600"><Trophy className="h-4 w-4"/></span> Community Leaderboard</div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">This Week <ChevronDown className="h-4 w-4"/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>This Week</DropdownMenuItem>
                  <DropdownMenuItem>This Month</DropdownMenuItem>
                  <DropdownMenuItem>All Time</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Podium */}
            <div className="grid grid-cols-3 gap-4 py-3 text-center">
              <Podium place={2} name="Sarah Chen" points={3890} color="slate"/>
              <Podium place={1} name="Mike Rodriguez" points={4250} color="yellow"/>
              <Podium place={3} name="Emma Davis" points={3120} color="orange"/>
            </div>

            {/* List */}
            <div className="mt-4 space-y-2">
              {rows.map((r) => (
                <LeaderboardRow key={r.rank} {...r} />
              ))}
            </div>

            <div className="mt-4 text-right text-sm text-primary"><a href="#">View Full Leaderboard</a></div>
          </div>

          {/* Achievements */}
          <div className="mt-6 rounded-2xl border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><span className="inline-grid place-items-center rounded-full bg-amber-100 p-1 text-amber-600"><Medal className="h-4 w-4"/></span> Your Achievements</div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-6">
              <BadgeCard icon={<SearchIcon/>} label="First Find" status="Earned" color="emerald"/>
              <BadgeCard icon={<Smile className="h-5 w-5"/>} label="Helper" status="Earned" color="indigo"/>
              <BadgeCard icon={<Star className="h-5 w-5"/>} label="Rising Star" status="Earned" color="violet"/>
              <BadgeCard icon={<Flame className="h-5 w-5"/>} label="On Fire" status="Earned" color="amber"/>
              <BadgeCard icon={<CrownIcon/>} label="Legend" status="Locked" color="slate" locked/>
              <BadgeCard icon={<DiamondIcon/>} label="Diamond" status="Locked" color="slate" locked/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function CardStat({ value, label, color }: { value: string; label: string; color: "indigo" | "emerald" }) {
  const cls = color === "indigo" ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600";
  return (
    <div className="rounded-xl border p-4 text-center">
      <div className={`mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg ${cls}`}> {color === "indigo" ? <Star className="h-5 w-5"/> : <CheckCircle2 className="h-5 w-5"/>}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Podium({ place, name, points, color }: { place: 1 | 2 | 3; name: string; points: number; color: "yellow" | "orange" | "slate" }) {
  const colorCls = color === "yellow" ? "bg-yellow-400" : color === "orange" ? "bg-orange-300" : "bg-slate-200";
  return (
    <div>
      <div className={`mx-auto h-14 w-10 rounded-md ${colorCls}`} />
      <div className="mt-2 text-sm font-medium">{name}</div>
      <div className="text-xs text-muted-foreground">{points.toLocaleString()} pts</div>
    </div>
  );
}

const rows = [
  { rank: 4, name: "Alex Johnson (You)", major: "Engineering Student", points: 2450, change: "+125 this week", highlight: true },
  { rank: 5, name: "David Kim", major: "Computer Science", points: 2180, change: "+89 this week" },
  { rank: 6, name: "Lisa Wang", major: "Business Administration", points: 1950, change: "+67 this week" },
  { rank: 7, name: "James Wilson", major: "Mechanical Engineering", points: 1820, change: "+45 this week" },
];

function LeaderboardRow({ rank, name, major, points, change, highlight }: { rank: number; name: string; major: string; points: number; change: string; highlight?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-3 rounded-xl border p-3 ${highlight ? "bg-indigo-50 dark:bg-indigo-950/40 ring-1 ring-indigo-200" : "bg-background"}`}>
      <div className="flex items-center gap-3">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-muted text-xs">{rank}</span>
        <img src={`https://i.pravatar.cc/40?img=${rank}`} alt="" className="h-8 w-8 rounded-full object-cover" />
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-muted-foreground">{major}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm font-semibold">{points.toLocaleString()} pts</div>
        <div className="text-xs text-muted-foreground">{change}</div>
      </div>
    </div>
  );
}

function BadgeCard({ icon, label, status, color, locked }: { icon: React.ReactNode; label: string; status: string; color: string; locked?: boolean }) {
  const base = locked ? "bg-muted text-muted-foreground" : color === "emerald" ? "bg-emerald-50 text-emerald-700" : color === "indigo" ? "bg-indigo-50 text-indigo-700" : color === "violet" ? "bg-violet-50 text-violet-700" : color === "amber" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500";
  return (
    <div className="rounded-xl border p-4">
      <div className={`mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full ${base}`}>{icon}</div>
      <div className="text-sm font-medium">{label}</div>
      <div className="text-xs text-muted-foreground">{status}</div>
    </div>
  );
}

function SearchIcon(){ return (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>); }
function CrownIcon(){ return (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 8l5 4 4-6 4 6 5-4v9H3z"/></svg>); }
function DiamondIcon(){ return (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2l4 5-4 15-4-15 4-5zm-6 5l6 15L2 7h4zm12 0h4l-10 15 6-15z"/></svg>); }
