type ToolCardProps = {
  category: string;
  description: string;
  tag?: string;
  title: string;
};

export function ToolCard({
  category,
  description,
  tag,
  title,
}: ToolCardProps) {
  return (
    <article className="reveal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-[0_24px_80px_rgba(5,8,30,0.3)] transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        {tag ? (
          <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-brand-cream/78">
            {tag}
          </span>
        ) : null}
        <p
          className={`font-mono text-[0.68rem] uppercase tracking-[0.26em] text-brand-cream/52 ${
            tag ? "mt-4" : ""
          }`}
        >
          {category}
        </p>
        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-brand-cream">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-brand-cream/72">
          {description}
        </p>
      </div>
    </article>
  );
}
