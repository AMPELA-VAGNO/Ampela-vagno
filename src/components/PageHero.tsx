interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  /** Position verticale de l'image : "center" par défaut, "center 75%" pour montrer le bas, etc. */
  imagePosition?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section className="relative flex h-[68vh] min-h-[460px] items-center justify-center overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-ink-900/50" />
      <div className="relative z-10 container-custom px-4 text-center text-white">
        <span className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur">
          {eyebrow}
        </span>
        <h1 className="font-display mb-5 text-4xl font-extrabold md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-2xl text-lg text-white/85 md:text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
