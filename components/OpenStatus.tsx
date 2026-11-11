"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/** Works out, in Irish time, whether the doors are open right now. */
function read(): { open: boolean; label: string } {
  const hour = Number(
    new Intl.DateTimeFormat("en-IE", { hour: "numeric", hourCycle: "h23", timeZone: "Europe/Dublin" }).format(
      new Date(),
    ),
  );
  const { opens, closes } = site.hours;
  const open = hour >= opens || hour < closes;
  return open
    ? { open, label: `Open now until ${closes} AM` }
    : { open, label: `Closed now. Opens at ${opens} AM` };
}

export function OpenStatus({ className = "" }: { className?: string }) {
  // Server render shows the standing hours; the live state swaps in after mount.
  const [state, setState] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    setState(read());
    const id = setInterval(() => setState(read()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative flex h-2 w-2" aria-hidden>
        {state?.open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-gold-warm opacity-60 [animation-duration:2.4s]" />
        )}
        <span className={`relative h-2 w-2 rounded-full ${state && !state.open ? "bg-mute" : "bg-gold-warm"}`} />
      </span>
      <span aria-live="polite">{state ? state.label : `Open daily, ${site.hours.display}`}</span>
    </span>
  );
}
