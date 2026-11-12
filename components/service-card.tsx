type ServiceCardProps = {
  title: string;
  description: string;
  detail?: string;
  tone?: "light" | "default";
};

export function ServiceCard({
  title,
  description,
  detail,
  tone = "default",
}: ServiceCardProps) {
  const isLight = tone === "light";

  return (
    <div
      className={`reveal rounded-[2rem] border p-8 shadow-[0_20px_64px_rgba(10,16,69,0.08)] ${
        isLight
          ? "border-brand-navy/10 bg-white/60 backdrop-blur"
          : "border-brand-navy/8 bg-white"
      }`}
    >
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-navy">
        {title}
      </h3>
      <p className="mt-4 text-base leading-8 text-brand-navy/68">{description}</p>
      {detail ? (
        <>
          <div className="mt-8 h-px bg-brand-navy/10" />
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-brand-navy/42">
            {detail}
          </p>
        </>
      ) : null}
    </div>
  );
}
