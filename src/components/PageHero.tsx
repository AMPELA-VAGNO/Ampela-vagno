interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/60 to-ink-900/85" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 bg-white/15 text-white">
          {eyebrow}
        </span>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-white/85 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
