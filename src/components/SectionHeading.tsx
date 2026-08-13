interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  return (
    <div
      className={`max-w-3xl mb-12 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
            light
              ? "bg-white/15 text-white"
              : "bg-terracotta-100 text-terracotta-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl leading-tight ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/85" : "text-ink-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
