import Image from "next/image";

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="pointer-events-auto rounded-full border border-white/10 bg-brand-navy/88 px-4 py-3 shadow-[0_14px_44px_rgba(10,16,69,0.24)] backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              aria-label="AGENTEC home"
              className="inline-flex items-center"
            >
              <Image
                src="/agentec-wordmark.png"
                alt="AGENTEC"
                width={920}
                height={220}
                priority
                className="h-auto w-[118px] sm:w-[142px] lg:w-[168px]"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-brand-cream px-4 text-sm font-semibold text-brand-navy transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white sm:min-h-11 sm:px-6"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
