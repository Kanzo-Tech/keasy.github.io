import { DashedLine } from "@/components/dashed-line";

/** A section's mono label, centred on a dashed rule, in the brand colour. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center">
      <DashedLine className="text-muted-foreground" />
      <span className="bg-background text-primary absolute px-3 font-mono text-xs font-medium tracking-[0.2em] uppercase max-md:hidden">
        {children}
      </span>
    </div>
  );
}
