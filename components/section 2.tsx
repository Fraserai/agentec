import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  title?: string;
};

export function Section({
  children,
  className = "",
  description,
  eyebrow,
  id,
  title,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        {(eyebrow || title || description) && (
          <div className="reveal mb-12 max-w-3xl">
            {eyebrow ? (
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-current/55">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-7 text-current/68 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
