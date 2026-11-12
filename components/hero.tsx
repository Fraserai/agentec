const highlights = [
  "Australian SMEs",
  "Strategy + implementation",
  "Ongoing support",
];

export function Hero() {
  return (
    <section
      id="top"
      className="surface-dark relative overflow-hidden pt-28 text-brand-cream sm:pt-32"
    >
      <div className="absolute inset-0 section-grid opacity-45" />
      <div className="hero-orb left-[-8rem] top-28 opacity-70" />
      <div className="hero-orb bottom-8 right-[-6rem] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-28">
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.34em] text-brand-cream/55">
          AI Agent Firm — Brisbane
        </p>

        <div className="max-w-4xl">
          <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-[7.25rem] lg:leading-[0.9]">
            Operational AI agents for ambitious Australian businesses.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-brand-cream/72 sm:text-xl">
            Strategy, implementation, and managed AI agent solutions for small
            to medium-sized businesses across Australia.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-cream px-8 text-base font-semibold text-brand-navy transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/4 px-8 text-base font-semibold text-brand-cream transition-colors duration-300 hover:bg-white/10"
            >
              Explore Capabilities
            </a>
          </div>

          <div className="mt-10 flex max-w-4xl flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex rounded-full border border-white/10 bg-white/4 px-5 py-2 font-mono text-[0.78rem] uppercase tracking-[0.2em] text-brand-cream/78"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-10 max-w-xl text-base leading-8 text-brand-cream/70">
            We help SMEs choose the right use cases, build practical agents,
            and keep them running well.
          </p>
        </div>
      </div>
    </section>
  );
}
