import { MARQUEE_ITEMS } from "@/data/portfolio";

export function TechMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section aria-label="Technologies" className="relative border-y border-border py-6">
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-duration:70s]">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-mono text-sm tracking-[0.22em] text-muted-foreground"
            >
              {item}
              <span className="size-1 rounded-full bg-primary/60" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
