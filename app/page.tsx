import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { ToolCard } from "@/components/tool-card";
import {
  capabilityPillars,
  deliveryModes,
  launchTools,
  navItems,
  positioningPoints,
  services,
} from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip bg-brand-cream">
        <Hero />

        <Section
          id="what-we-do"
          eyebrow="What we do"
          title="From AI interest to operational agent systems."
          description="AGENTEC helps Australian SMEs turn interest in AI agents into useful business systems."
          className="bg-brand-cream"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="reveal rounded-[2rem] border border-brand-navy/10 bg-white/60 p-8 shadow-[0_24px_80px_rgba(10,16,69,0.08)] backdrop-blur">
              <p className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-brand-navy sm:text-4xl">
                Practical AI agent support for businesses that want clarity
                before they commit.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {capabilityPillars.map((pillar) => (
                <ServiceCard
                  key={pillar.title}
                  title={pillar.title}
                  description={pillar.description}
                  tone="light"
                />
              ))}
            </div>
          </div>

          <div className="reveal mt-8 grid gap-4 rounded-[2rem] border border-brand-navy/10 bg-brand-navy px-6 py-6 text-brand-cream shadow-[0_28px_72px_rgba(10,16,69,0.18)] sm:grid-cols-3 sm:px-8">
            {deliveryModes.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-brand-cream/55">
                  Delivery
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-brand-cream/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="Core capabilities"
          title="Hands-on support across the full implementation path."
          description="Practical engagements built around real workflows, business constraints, and the operational realities of small to medium-sized organisations."
          className="border-t border-brand-navy/10 bg-[#f6f2df]"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                detail={service.detail}
              />
            ))}
          </div>
        </Section>

        <Section
          id="expertise"
          eyebrow="Launch expertise"
          title="Specialised in leading agent platforms."
          description="AGENTEC focuses on the tools most relevant to practical business agent deployment."
          className="surface-dark border-t border-white/10 text-brand-cream"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {launchTools.map((tool) => (
              <ToolCard
                key={tool.title}
                title={tool.title}
                category={tool.category}
                description={tool.description}
                tag={tool.tag}
              />
            ))}
          </div>
        </Section>

        <Section
          id="why-agentec"
          eyebrow="Why Agentec"
          title="Positioned for businesses that want practical leverage, not noise."
          description="No inflated promises. No generic automation theatre. Just sharp, commercially aware work focused on helping Australian SMEs adopt AI agents properly."
          className="border-t border-white/10 bg-brand-navy text-brand-cream"
        >
          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_80px_rgba(5,8,30,0.35)]">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-brand-cream/55">
                Positioning
              </p>
              <p className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-balance sm:text-4xl">
                AGENTEC is an implementation-led AI agent firm focused on
                helping Australian businesses move from interest to real,
                managed adoption.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {positioningPoints.map((point) => (
                <div
                  key={point.title}
                  className="reveal rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-brand-cream">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-cream/72">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <CtaSection />
      </main>
      <Footer items={navItems} />
    </>
  );
}
