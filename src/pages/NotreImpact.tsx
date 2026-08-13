import type { ElementType } from "react";
import {
  TrendingUp,
  Wheat,
  CalendarHeart,
  Baby,
  Wallet,
  GraduationCap,
  Sparkles,
  Users,
  Coins,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import DonateBanner from "../components/DonateBanner";
import { images } from "../data/images";
import {
  resultatsAttendus,
  impactsPilote,
  impactsFinaux,
  budget,
} from "../data/content";

const finalIcons: Record<string, ElementType> = {
  "Distribution à grande échelle": TrendingUp,
  "Réduction du Kere": Wheat,
  "Âge moyen du mariage": CalendarHeart,
  "Âge moyen de la 1ère grossesse": Baby,
  "Nombre d'enfants par femme": Baby,
  "Revenus des femmes mariées": Wallet,
  "Scolarisation des filles": GraduationCap,
  "Épanouissement des femmes": Sparkles,
};

export default function NotreImpact() {
  return (
    <div>
      <PageHero
        eyebrow="Notre impact"
        title="Des résultats concrets, une vision à long terme"
        description="De la phase pilote aux objectifs 2027, chaque avancée rapproche les femmes du Grand Sud d'une vie choisie plutôt que subie."
        image={images.sunset2}
      />

      {/* RESULTATS ATTENDUS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Résultats attendus"
            title="Ce que le projet vise à transformer durablement"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {resultatsAttendus.map((r, i) => (
              <div
                key={r.titre}
                className="bg-savane-50 rounded-2xl p-7 border border-savane-100 flex gap-4"
              >
                <span className="font-display font-extrabold text-2xl text-terracotta-300 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-bold text-ink-900 mb-2">
                    {r.titre}
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE PILOTE */}
      <section className="section-padding bg-ink-900 text-white">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 bg-white/15 text-white">
              Impacts déjà visibles
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              Principaux impacts visés au terme de la phase pilote
            </h2>
            <ul className="space-y-4">
              {impactsPilote.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <Users size={18} className="text-terracotta-400 shrink-0 mt-1" />
                  <p className="text-white/85 leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={images.reunionVillage2}
            alt="Femmes réunies dans un village"
            className="rounded-2xl object-cover w-full h-[440px] shadow-2xl"
          />
        </div>
      </section>

      {/* IMPACTS FINAUX */}
      <section className="section-padding bg-savane-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Vision 2027"
            title="Principaux impacts visés au terme du projet"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactsFinaux.map((item) => {
              const Icon = finalIcons[item.titre] ?? Sparkles;
              return (
                <div
                  key={item.titre}
                  className="bg-white rounded-2xl p-6 border border-ink-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <span className="w-11 h-11 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display font-bold text-ink-900 mb-2 leading-snug">
                    {item.titre}
                  </h3>
                  {item.objectif && (
                    <span className="inline-block text-xs font-bold text-terracotta-600 bg-terracotta-50 px-2.5 py-1 rounded-full mb-2">
                      {item.objectif}
                    </span>
                  )}
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUDGET */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-terracotta-600 to-savane-600 rounded-3xl p-10 md:p-14 text-white shadow-xl">
            <Coins size={32} className="mx-auto mb-5 text-white/90" />
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3">
              Budget estimatif {budget.periode}
            </p>
            <p className="font-display font-extrabold text-4xl md:text-5xl mb-4">
              {budget.montantFormate}
            </p>
            <p className="text-white/85 leading-relaxed">{budget.note}</p>
          </div>
        </div>
      </section>

      <DonateBanner />
    </div>
  );
}
