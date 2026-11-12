type ToolCardProps = {
  title: string;
  category: string;
  description: string;
  tag?: string;
};

export function ToolCard({ title, category, description, tag }: ToolCardProps) {
  return (
    <article className="reveal group rounded-[2rem] border border-white/10 bg-white/4 p-8 shadow-[0_24px_80px_rgba(5,8,30,0.22)] backdrop-blur transition-transform duration-300 hover:-translate-y-1">
      <div className="relative z-10">
        {tag ? (
          <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brand-cream/68">
            {tag}
          </span>
        ) : null}
        <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-brand-cream/42">
          {category}
        </p>
        <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-brand-cream">
          {title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-8 text-brand-cream/72">
          {description}
        </p>
      </div>
    </article>
  );
}
