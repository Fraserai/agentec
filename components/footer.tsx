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
        <div className="space-y-4">
          <a href="#top" className="inline-flex items-center" aria-label="AGENTEC">
            <Image
              src="/agentec-wordmark.png"
              alt="AGENTEC"
              width={920}
              height={220}
              className="h-auto w-[110px]"
            />
          </a>
          <div className="space-y-1 text-sm leading-6 text-brand-cream/72">
            <p>AI agent firm for Australian SMEs.</p>
            <p>agentec.com.au</p>
            <p>Brisbane, Australia</p>
          </div>
        </div>

        <div className="space-y-4 lg:text-right">
          <nav className="flex flex-wrap gap-6 text-sm text-brand-cream/78 lg:justify-end">
            {items.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="space-y-1 text-sm leading-6 text-brand-cream/72">
            <p>hello@agentec.com.au</p>
            <p>© 2026 AGENTEC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
