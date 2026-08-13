import { Users } from "lucide-react";

type FounderSectionProps = {
  image: string;
  quote: string;
  name: string;
  role: string;
};

export default function FounderSection({
  image,
  quote,
  name,
  role,
}: FounderSectionProps) {
  return (
    <section className="section-padding bg-ink-900 text-white overflow-hidden relative">
      <div className="container-custom grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center relative z-10">
        <div className="relative">
          <img
            src={image}
            alt="Kareen Nicolessi, Présidente d'Ampela Vagno, avec des femmes du village"
            className="rounded-2xl object-cover w-full h-[420px] shadow-2xl"
          />
        </div>
        <div>
          <Users size={32} className="text-terracotta-400 mb-4" />
          <p className="font-display text-xl md:text-2xl leading-relaxed text-white/95">
            {quote}
          </p>
          <div className="mt-6">
            <p className="font-semibold text-white">{name}</p>
            <p className="text-white/60 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
