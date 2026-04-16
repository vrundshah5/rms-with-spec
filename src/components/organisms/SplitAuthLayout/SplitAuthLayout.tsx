import { cn } from "@/lib/utils";

export interface SplitAuthLayoutProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  className?: string;
}

export function SplitAuthLayout({ leftPanel, rightPanel, className }: SplitAuthLayoutProps) {
  return (
    <div className={cn("flex min-h-screen", className)}>
      {/* Left slot — hidden on mobile/tablet, visible on lg+ */}
      <div className="hidden lg:flex lg:w-1/2 lg:flex-col" aria-hidden="true">
        {leftPanel}
      </div>

      {/* Right slot — full-width on mobile/tablet, half-width on lg+ */}
      <div className="flex w-full flex-col items-center justify-center lg:w-1/2 bg-white dark:bg-[var(--color-background)]">
        {rightPanel}
      </div>
    </div>
  );
}
