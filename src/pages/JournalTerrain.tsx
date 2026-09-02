import { useState } from "react";
import { MapPin, Info } from "lucide-react";
import PageHero from "../components/PageHero";
import DonateBanner from "../components/DonateBanner";
import { images } from "../data/images";
import { journalTerrain } from "../data/journal";

export default function JournalTerrain() {
  const [activeId, setActiveId] = useState(journalTerrain[0].id);
  const active = journalTerrain.find((e) => e.id === activeId) ?? journalTerrain[0];

  return (
    <div>
      <PageHero
        eyebrow="Sur le terrain"
        title="Journal de terrain"
        description="Récits, village par village, des premières missions de l'association dans le Grand Sud de Madagascar."
        image={images.marcheEjeda}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {/* Onglets villages */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {journalTerrain.map((entry) => (
              <button
                key={entry.id}
                onClick={() => setActiveId(entry.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-colors border ${
                  activeId === entry.id
                    ? "bg-terracotta-600 text-white border-terracotta-600 shadow-md"
                    : "bg-white text-ink-700 border-ink-200 hover:border-terracotta-300 hover:text-terracotta-600"
                }`}
              >
                <MapPin size={15} />
                {entry.village}
              </button>
            ))}
          </div>

          {/* Contenu de l'onglet actif */}
          <div key={active.id}>
            <div className="flex items-baseline gap-3 mb-8 flex-wrap">
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-700">
                {active.jour}
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-ink-900">
                {active.village}
              </h2>
              {active.region && (
                <span className="text-ink-400 text-sm">{active.region}</span>
              )}
            </div>

            <div className="space-y-10">
              {active.sections.map((section, i) => (
                <div key={i}>
                  {section.titre && (
                    <h3 className="font-display font-bold text-lg text-ink-900 mb-3">
                      {section.titre}
                    </h3>
                  )}
                  <div className="space-y-4">
                    {section.paragraphes.map((p, j) => (
                      <p key={j} className="text-ink-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                  {section.hashtags && section.hashtags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {section.hashtags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {active.note && (
              <div className="mt-10 flex gap-3 bg-savane-50 border border-savane-100 rounded-2xl p-6">
                <Info size={20} className="text-terracotta-600 shrink-0 mt-0.5" />
                <p className="text-ink-600 leading-relaxed text-sm">{active.note}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <DonateBanner />
    </div>
  );
}
