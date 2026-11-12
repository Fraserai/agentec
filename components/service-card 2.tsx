type ServiceCardProps = {
  description: string;
  detail?: string;
  title: string;
  tone?: "default" | "light";
};

export function ServiceCard({
  description,
  detail,
  title,
  tone = "default",
}: ServiceCardProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`reveal rounded-[1.75rem] border p-6 transition-transform duration-300 hover:-translate-y-1 ${
        isLight
          ? "border-brand-navy/10 bg-white/60 shadow-[0_18px_60px_rgba(10,16,69,0.06)]"
          : "border-brand-navy/10 bg-white/72 shadow-[0_18px_60px_rgba(10,16,69,0.06)]"
      }`}
    >
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-navy">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-brand-navy/72">{description}</p>
      {detail ? (
        <p className="mt-5 border-t border-brand-navy/10 pt-4 text-xs font-medium uppercase tracking-[0.14em] text-brand-navy/45">
          {detail}
        </p>
      ) : null}
    </div>
  );
}
