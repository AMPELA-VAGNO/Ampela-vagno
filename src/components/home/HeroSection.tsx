import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images } from "../../data/images";

type HeroStat = {
  valeur: string;
  label: string;
};

type HeroSectionProps = {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  primaryLink: { to: string; label: string };
  secondaryLink: { to: string; label: string };
  stats: HeroStat[];
};

export default function HeroSection({
  badge,
  title,
  highlight,
  subtitle,
  description,
  primaryLink,
  secondaryLink,
  stats,
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Image plein cadre */}
      <div className="absolute inset-0">
        <img
          src={images.sunset1}
          alt="Coucher de soleil sur le Sud de Madagascar"
          className="h-full w-full scale-105 object-cover object-center"
        />
        {/* Dégradé intégré à l'image, pas de carte plaquée */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Repère géographique — élément signature */}
      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <span className="h-16 w-px bg-white/40" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70 [writing-mode:vertical-rl]">
          25°S · Sud de Madagascar
        </span>
        <span className="h-16 w-px bg-white/40" />
      </div>

      <div className="container-custom relative z-10 pb-14 pt-40 md:pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-200">
            <span className="h-px w-8 bg-amber-200" />
            {badge}
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-savane-300 via-terracotta-300 to-amber-200 bg-clip-text text-transparent">
              {highlight}
            </span>{" "}
            {subtitle}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to={primaryLink.to}
              className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-terracotta-700 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:bg-savane-50 hover:shadow-xl"
            >
              {primaryLink.label}
              <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-terracotta-100 text-terracotta-700 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              to={secondaryLink.to}
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              {secondaryLink.label}
            </Link>
          </div>
        </div>

        {/* Stats — intégrées au bloc sombre, plus de bandeau blanc */}
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              {i !== 0 && (
                <span className="absolute -left-4 top-1 hidden h-10 w-px bg-white/15 sm:block" />
              )}
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                {stat.valeur}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}