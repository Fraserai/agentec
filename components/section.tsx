import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="reveal mb-12 max-w-4xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-current/45">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-[4rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-3xl text-base leading-8 text-current/70 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
