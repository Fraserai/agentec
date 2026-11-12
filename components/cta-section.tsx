import { InquiryForm } from "@/components/inquiry-form";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 border-t border-brand-navy/10 bg-[#f6f2df]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-brand-navy px-8 py-12 text-brand-cream shadow-[0_40px_120px_rgba(10,16,69,0.24)] sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 section-grid opacity-10" />
          <div className="absolute left-[8%] top-10 h-40 w-40 rounded-full bg-white/8 blur-3xl" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-brand-cream/58">
                Contact
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-[3.75rem]">
                Bring AI agents into your business properly.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-brand-cream/75 sm:text-lg">
                Start with a focused conversation about your workflows, your
                constraints, and where agent systems can create real operating
                leverage.
              </p>

              <div className="mt-8 text-sm leading-6 text-brand-cream/68">
                <p>hello@agentec.com.au</p>
                <p>Brisbane, Australia</p>
              </div>
            </div>

            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
