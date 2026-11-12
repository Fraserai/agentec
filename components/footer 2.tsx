import Image from "next/image";

type FooterItem = {
  label: string;
  href: string;
};

type FooterProps = {
  items: FooterItem[];
};

export function Footer({ items }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-brand-navy text-brand-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <a
            href="#top"
            aria-label="AGENTEC home"
            className="inline-flex"
          >
            <Image
              src="/agentec-wordmark.png"
              alt="AGENTEC"
              width={920}
              height={220}
              className="h-auto w-[140px]"
            />
          </a>
          <p className="mt-4 text-sm leading-6 text-brand-cream/70">
            AI agent firm for Australian SMEs.
          </p>
          <p className="text-sm leading-6 text-brand-cream/70">
            agentec.com.au
          </p>
          <p className="text-sm leading-6 text-brand-cream/70">
            Brisbane, Australia
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-brand-cream/68 transition-colors duration-300 hover:text-brand-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm leading-6 text-brand-cream/70 sm:text-right">
            <p>hello@agentec.com.au</p>
            <p>© {new Date().getFullYear()} AGENTEC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
