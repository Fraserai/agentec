const heroHighlights = [
  "Australian SMEs",
  "Strategy + implementation",
  "Ongoing support",
];

export function Hero() {
  return (
    <section
      id="top"
      className="surface-dark relative overflow-hidden border-b border-white/10 text-brand-cream"
    >
      <div className="hero-orb left-[8%] top-24" />
      <div className="hero-orb bottom-10 right-[8%]" />
      <div className="absolute inset-0 hero-mesh opacity-60" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-16 pt-28 sm:px-8 lg:min-h-[860px] lg:px-12 lg:pb-20 lg:pt-36">
        <div className="flex max-w-4xl flex-col justify-center">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-brand-cream/58">
            AI Agent Firm - Brisbane
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-balance text-brand-cream sm:text-6xl lg:text-[6.1rem]">
            Operational AI agents for ambitious Australian businesses.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-brand-cream/74 sm:text-lg sm:leading-8">
            Strategy, implementation, and managed AI agent solutions for small
            to medium-sized businesses across Australia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-cream px-6 text-sm font-semibold text-brand-navy transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 text-sm font-semibold text-brand-cream transition-colors duration-300 hover:bg-white/12"
            >
              Explore Capabilities
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium tracking-[0.08em] text-brand-cream/74"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-xl text-sm leading-6 text-brand-cream/56">
            We help SMEs choose the right use cases, build practical agents, and
            keep them running well.
          </p>
        </div>
      </div>
    </section>
  );
}
