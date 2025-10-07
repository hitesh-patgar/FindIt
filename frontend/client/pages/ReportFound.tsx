import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { UploadCloud, Eye, MapPin, CalendarDays, CheckCircle2 } from "lucide-react";

export default function ReportFound() {
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
            <h1 className="text-xl font-semibold">Report Found Item</h1>
            <p className="mt-1 text-sm text-muted-foreground">Help reunite lost items with their owners and earn community points!</p>

            <div className="mt-5 grid gap-4">
              <div>
                <label className="mb-1 inline-block text-sm text-muted-foreground">Item Name</label>
                <Input placeholder="e.g., Black iPhone 13, Blue Water Bottle" />
              </div>

              <div>
                <label className="mb-1 inline-block text-sm text-muted-foreground">Description</label>
                <Textarea placeholder="Provide detailed description including brand, color, distinguishing features..." className="min-h-28" />
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
                  <label className="mb-1 inline-block text-sm text-muted-foreground">Found Location</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder="Select location..." />
                  </div>
                </div>
                <div>
                  <label className="mb-1 inline-block text-sm text-muted-foreground">Date Found</label>
                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="text" inputMode="numeric" pattern="\d{2}-\d{2}-\d{4}" className="pl-9" placeholder="DD-MM-YYYY" />
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button variant="secondary" className="w-full" type="button">
                  <Eye className="mr-2 h-4 w-4" /> Preview Submission
                </Button>
                <Button className="w-full" type="submit">
                  Submit Found Item
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Preview + Tips */}
        <div className="space-y-6">
          <div className="relative rounded-2xl border bg-card p-4 shadow-sm">
            <div className="absolute -right-1 -top-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white shadow">
                <CheckCircle2 className="h-4 w-4" /> +10 Points for Reporting!
              </div>
            </div>
            <h3 className="mb-3 text-sm font-semibold">Preview</h3>
            <div className="flex aspect-video w-full items-center justify-center rounded-xl border bg-muted/30 text-muted-foreground">
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview} alt="Preview" className="h-full w-full rounded-xl object-cover" />
              ) : (
                <span className="text-sm">Fill out the form to see preview</span>
              )}
            </div>
            <div className="mt-4 space-y-2 rounded-lg bg-background p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Reward Points:</span>
                <span className="font-medium text-emerald-600">+10 Points</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Social Service Credits:</span>
                <span className="font-medium text-amber-600">+2 Hours</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border p-4 shadow-sm bg-[#eef5ff] dark:bg-[#0c1424]">
            <h3 className="text-sm font-semibold">Tips for Better Results</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">• Include clear, well‑lit photos</li>
              <li className="flex items-start gap-2">• Be specific about location details</li>
              <li className="flex items-start gap-2">• Mention unique identifying features</li>
              <li className="flex items-start gap-2">• Report as soon as possible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
