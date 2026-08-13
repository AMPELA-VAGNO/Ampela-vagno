import type { ElementType } from "react";
import {
  Target,
  Users2,
  ShoppingBag,
  ShieldCheck,
  BookHeart,
  Scissors,
  ChefHat,
  Shirt,
  CheckCircle2,
  Construction,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import DonateBanner from "../components/DonateBanner";
import { images } from "../data/images";
import {
  objectifGlobal,
  axesActivites,
  agr,
  realisations,
  aDevelopper,
} from "../data/content";

const axeIcons = [Users2, BookHeart, ShoppingBag, ShieldCheck, Target];
const agrIcons: Record<string, ElementType> = {
  scissors: Scissors,
  "chef-hat": ChefHat,
  shirt: Shirt,
};

export default function NosActions() {
  return (
    <div>
      <PageHero
        eyebrow="Nos actions"
        title="Cinq axes d'intervention au service de l'autonomie des femmes"
        description="De la formation entre pairs à l'éducation à la sexualité, chaque action vise un objectif commun : rendre les femmes actrices de leur vie."
        image={images.groupeFemmesAtelier}
      />

      {/* OBJECTIF GLOBAL */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <span className="inline-flex w-14 h-14 rounded-2xl bg-terracotta-100 text-terracotta-600 items-center justify-center mb-6">
            <Target size={26} />
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ink-900 mb-4">
            Objectif global
          </h2>
          <p className="text-ink-600 leading-relaxed text-lg">{objectifGlobal}</p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-baobab-100 text-baobab-700 font-semibold text-sm">
              ODD 1 — Pas de pauvreté
            </span>
            <span className="px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 font-semibold text-sm">
              ODD 5 — Égalité des sexes
            </span>
          </div>
        </div>
      </section>

      {/* 5 AXES */}
      <section className="section-padding bg-savane-50">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Nos 5 axes d'intervention"
            title="Comment nous agissons au quotidien"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {axesActivites.map((axe, i) => {
              const Icon = axeIcons[i % axeIcons.length];
              return (
                <div
                  key={axe.numero}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-ink-100 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <p className="font-display font-extrabold text-3xl text-terracotta-200 mb-3">
                    {axe.numero}
                  </p>
                  <span className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display font-bold text-ink-900 mb-2">
                    {axe.titre}
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {axe.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AGR */}
      <section id="agr" className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center mb-16">
          <img
            src={images.materielAgr}
            alt="Matériel distribué pour les Activités Génératrices de Revenus"
            className="rounded-2xl object-cover w-full h-[400px] shadow-xl"
          />
          <div>
            <SectionHeading
              eyebrow="Activités Génératrices de Revenus"
              title="3 AGR choisies par les femmes elles-mêmes"
              align="left"
            />
            <p className="text-ink-600 leading-relaxed">
              Dans les 6 villages ayant un jour de marché conséquent pour les
              débouchés, les femmes ont identifié 3 activités génératrices
              de revenus, ainsi que les besoins en matériel et le mode
              d'acheminement vers le village principal d'Ejeda.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {agr.map((item) => {
            const Icon = agrIcons[item.icon];
            return (
              <div
                key={item.nom}
                className="bg-savane-50 rounded-2xl p-8 border border-savane-100"
              >
                <span className="w-14 h-14 rounded-2xl bg-white text-terracotta-600 flex items-center justify-center mb-6 shadow-sm">
                  <Icon size={26} />
                </span>
                <h3 className="font-display font-bold text-xl text-ink-900 mb-3">
                  {item.nom}
                </h3>
                <p className="text-ink-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REALISATIONS */}
      <section id="realisations" className="section-padding bg-ink-900 text-white">
        <div className="container-custom grid lg:grid-cols-2 gap-14">
          <div>
            <span className="inline-flex w-12 h-12 rounded-2xl bg-white/10 text-terracotta-400 items-center justify-center mb-5">
              <CheckCircle2 size={22} />
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              Ce qui a déjà été réalisé
            </h2>
            <ul className="space-y-4">
              {realisations.map((r, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 size={20} className="text-terracotta-400 shrink-0 mt-0.5" />
                  <p className="text-white/85 leading-relaxed">{r}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="inline-flex w-12 h-12 rounded-2xl bg-white/10 text-savane-300 items-center justify-center mb-5">
              <Construction size={22} />
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              Ce qu'il reste à développer
            </h2>
            <ul className="space-y-5">
              {aDevelopper.map((item) => (
                <li key={item.titre} className="border-l-2 border-savane-400/50 pl-4">
                  <p className="font-semibold text-white mb-1">{item.titre}</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="section-padding bg-white">
        <SectionHeading
          eyebrow="Sur le terrain"
          title="Les ateliers, en images"
        />
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            images.reunionVillage1,
            images.groupeCouture,
            images.reunionVillage2,
            images.groupeFemmesAtelier,
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Photo terrain Ampela Vagno"
              className="rounded-2xl object-cover w-full h-52 md:h-64 shadow-md hover:shadow-xl transition-shadow"
            />
          ))}
        </div>
      </section>

      <DonateBanner />
    </div>
  );
}
