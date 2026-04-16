import { cn } from "@/lib/utils";

export interface BrandPanelProps {
  tagline?: string;
  className?: string;
}

function ResourceManagementIllustration() {
  return (
    <svg
      viewBox="0 0 400 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-sm"
    >
      {/* ── Background circle ── */}
      <ellipse cx="200" cy="170" rx="160" ry="150" fill="white" fillOpacity="0.05" />

      {/* ── Central hub node ── */}
      <circle cx="200" cy="155" r="28" fill="white" fillOpacity="0.15" />
      <circle cx="200" cy="155" r="18" fill="white" fillOpacity="0.25" />

      {/* Person icon — center */}
      <circle cx="200" cy="147" r="7" fill="white" fillOpacity="0.9" />
      <path
        d="M186 168c0-7.732 6.268-14 14-14s14 6.268 14 14"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* ── Left node ── */}
      <circle cx="80" cy="120" r="22" fill="white" fillOpacity="0.12" />
      <circle cx="80" cy="120" r="14" fill="white" fillOpacity="0.22" />
      {/* Person icon — left */}
      <circle cx="80" cy="113" r="5.5" fill="white" fillOpacity="0.85" />
      <path
        d="M69 130c0-6.075 4.925-11 11-11s11 4.925 11 11"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ── Right node ── */}
      <circle cx="320" cy="120" r="22" fill="white" fillOpacity="0.12" />
      <circle cx="320" cy="120" r="14" fill="white" fillOpacity="0.22" />
      {/* Person icon — right */}
      <circle cx="320" cy="113" r="5.5" fill="white" fillOpacity="0.85" />
      <path
        d="M309 130c0-6.075 4.925-11 11-11s11 4.925 11 11"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ── Bottom-left node ── */}
      <circle cx="100" cy="240" r="20" fill="white" fillOpacity="0.10" />
      <circle cx="100" cy="240" r="12" fill="white" fillOpacity="0.20" />
      <circle cx="100" cy="234" r="4.5" fill="white" fillOpacity="0.80" />
      <path
        d="M91 248c0-4.97 4.03-9 9-9s9 4.03 9 9"
        stroke="white"
        strokeOpacity="0.80"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ── Bottom-right node ── */}
      <circle cx="300" cy="240" r="20" fill="white" fillOpacity="0.10" />
      <circle cx="300" cy="240" r="12" fill="white" fillOpacity="0.20" />
      <circle cx="300" cy="234" r="4.5" fill="white" fillOpacity="0.80" />
      <path
        d="M291 248c0-4.97 4.03-9 9-9s9 4.03 9 9"
        stroke="white"
        strokeOpacity="0.80"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ── Connection lines ── */}
      {/* Center ↔ Left */}
      <line x1="182" y1="148" x2="98" y2="128" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Center ↔ Right */}
      <line x1="218" y1="148" x2="302" y2="128" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Center ↔ Bottom-left */}
      <line x1="186" y1="172" x2="112" y2="228" stroke="white" strokeOpacity="0.20" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Center ↔ Bottom-right */}
      <line x1="214" y1="172" x2="288" y2="228" stroke="white" strokeOpacity="0.20" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Left ↔ Bottom-left */}
      <line x1="82" y1="140" x2="96" y2="222" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 5" />
      {/* Right ↔ Bottom-right */}
      <line x1="318" y1="140" x2="304" y2="222" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 5" />

      {/* ── Task card — top center ── */}
      <rect x="162" y="55" width="76" height="52" rx="0" fill="white" fillOpacity="0.12" />
      <rect x="162" y="55" width="76" height="52" rx="0" stroke="white" strokeOpacity="0.20" strokeWidth="1" />
      {/* Card rows */}
      <rect x="172" y="67" width="36" height="4" rx="0" fill="white" fillOpacity="0.50" />
      <rect x="172" y="77" width="46" height="4" rx="0" fill="white" fillOpacity="0.35" />
      {/* Checkmark circle */}
      <circle cx="212" cy="69" r="5" fill="white" fillOpacity="0.20" />
      <path d="M209 69l2 2 4-4" stroke="white" strokeOpacity="0.80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Progress bar */}
      <rect x="172" y="88" width="46" height="5" rx="0" fill="white" fillOpacity="0.12" />
      <rect x="172" y="88" width="30" height="5" rx="0" fill="white" fillOpacity="0.50" />
      {/* Connector from card to center hub */}
      <line x1="200" y1="107" x2="200" y2="127" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ── Kanban mini board — bottom center ── */}
      <rect x="150" y="270" width="100" height="52" rx="0" fill="white" fillOpacity="0.08" />
      <rect x="150" y="270" width="100" height="52" rx="0" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
      {/* Three columns */}
      <rect x="156" y="278" width="26" height="36" rx="0" fill="white" fillOpacity="0.12" />
      <rect x="187" y="278" width="26" height="36" rx="0" fill="white" fillOpacity="0.12" />
      <rect x="218" y="278" width="26" height="36" rx="0" fill="white" fillOpacity="0.12" />
      {/* Col 1 cards */}
      <rect x="159" y="282" width="20" height="7" rx="0" fill="white" fillOpacity="0.40" />
      <rect x="159" y="293" width="20" height="7" rx="0" fill="white" fillOpacity="0.25" />
      {/* Col 2 cards */}
      <rect x="190" y="282" width="20" height="7" rx="0" fill="white" fillOpacity="0.40" />
      {/* Col 3 cards */}
      <rect x="221" y="282" width="20" height="7" rx="0" fill="white" fillOpacity="0.40" />
      <rect x="221" y="293" width="20" height="7" rx="0" fill="white" fillOpacity="0.25" />
      {/* Connector from center to board */}
      <line x1="200" y1="183" x2="200" y2="270" stroke="white" strokeOpacity="0.20" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  );
}

export function BrandPanel({
  tagline = "Manage your resources smarter",
  className,
}: BrandPanelProps) {
  return (
    <div
      className={cn(
        "flex h-full min-h-screen w-full flex-col items-center justify-center gap-10 px-8 py-12",
        "bg-gradient-to-b from-primary-800 to-primary-950",
        className
      )}
      aria-hidden="true"
    >
      {/* Illustration */}
      <div className="flex w-full items-center justify-center">
        <ResourceManagementIllustration />
      </div>

      {/* Tagline */}
      <p className="max-w-xs text-center text-xl font-semibold uppercase tracking-widest text-white/90">
        {tagline}
      </p>

      {/* Sub-copy */}
      <p className="max-w-xs text-center text-sm font-normal tracking-wide text-primary-200">
        Assign, track, and optimise your team's workload in one place.
      </p>
    </div>
  );
}
