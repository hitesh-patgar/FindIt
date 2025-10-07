import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { UploadCloud, Eye, MapPin, CalendarDays } from "lucide-react";

export default function ReportLost() {
  const [drag, setDrag] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setPreview(URL.createObjectURL(f));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setPreview(URL.createObjectURL(f));
  };

  return (
    <div className="container py-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left: Form */}
        <div className="md:col-span-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h1 className="text-xl font-semibold">Report Lost Item</h1>
            <p className="mt-1 text-sm text-muted-foreground">Help us help you find your lost item by providing detailed information.</p>

            <div className="mt-5 grid gap-4">
              <div>
                <label className="mb-1 inline-block text-sm text-muted-foreground">Item Name *</label>
                <Input placeholder="e.g., iPhone 14, Blue Backpack, Textbook" />
              </div>

              <div>
                <label className="mb-1 inline-block text-sm text-muted-foreground">Description *</label>
                <Textarea placeholder="Provide detailed description including color, brand, distinguishing features..." className="min-h-28" />
              </div>

              <div>
                <label className="mb-1 inline-block text-sm text-muted-foreground">Upload Photo</label>
                <label
                  onDragEnter={() => setDrag(true)}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDrag(true);
                  }}
                  onDragLeave={() => setDrag(false)}
                  onDrop={onDrop}
                  className={cn(
                    "flex aspect-[16/6] w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed bg-muted/40 text-center",
                    drag && "border-primary/60 bg-primary/5",
                  )}
                >
                  <input type="file" accept="image/*" className="hidden" onChange={onChange} />
                  <div className="p-6 text-sm text-muted-foreground">
                    <UploadCloud className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
                    Click to upload or drag and drop
                    <div className="text-xs">PNG, JPG up to 10MB</div>
                  </div>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 inline-block text-sm text-muted-foreground">Last Seen Location *</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder="Select Building/Area" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 inline-block text-sm text-muted-foreground">Pin on Map</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9 cursor-pointer" placeholder="Pin on Map" readOnly onClick={() => window.open("https://maps.google.com", "_blank", "noopener,noreferrer")} />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-1 inline-block text-sm text-muted-foreground">Date Lost *</label>
                <div className="relative max-w-xs">
                  <CalendarDays className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="text" inputMode="numeric" pattern="\d{2}-\d{2}-\d{4}" className="pl-9" placeholder="DD-MM-YYYY" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                <Button variant="secondary" className="w-full" type="button">Preview Submission</Button>
                <Button className="w-full" type="submit">Submit Lost Item Report</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: AI Suggestions */}
        <aside className="space-y-4">
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-semibold">AI Suggestions</h3>
            <p className="mt-1 text-xs text-muted-foreground">Start typing to see if your item might already be found!</p>

            <div className="mt-3 space-y-3">
              {[
                { title: "iPhone 14 Pro", desc: "Blue case, found in Library" },
                { title: "Blue Backpack", desc: "Nike brand, found in Cafeteria" },
                { title: "Physics Textbook", desc: "Found in Lecture Hall A" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border bg-background p-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-muted text-muted-foreground">{i + 1}</div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{s.title}</div>
                    <div className="truncate text-xs text-muted-foreground">{s.desc}</div>
                    <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-200">Found</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[11px] text-muted-foreground">All matches are based on item descriptions and locations. Click on any suggestion to view details.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
