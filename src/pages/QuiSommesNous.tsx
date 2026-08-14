import type { ReactNode } from "react";
import { Landmark, Users, MapPin, Mail, Phone, Calendar, FileCheck2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import DonateBanner from "../components/DonateBanner";
import { images } from "../data/images";
import {
  identite,
  contexte,
  genese,
  zoneIntervention,
  beneficiaires,
} from "../data/content";

export default function QuiSommesNous() {
  return (
    <div>
      <PageHero
        eyebrow="Nous découvrir"
        title="Qui sommes-nous ?"
        description="Une association née dans le Grand Sud de Madagascar pour donner aux femmes une autre voie que celle du mariage précoce et forcé."
        image={images.selfieFondatrice2}
      />

      {/* GENESE */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="La genèse du projet"
              title={genese.quiSommesNous.question}
              align="left"
            />
            <p className="text-ink-600 leading-relaxed mb-5">{genese.intro}</p>
            <p className="text-ink-600 leading-relaxed">
              {genese.quiSommesNous.texte}
            </p>
          </div>
          <img
            src={images.marcheEjeda}
            alt="Marché près d'Ejeda, dans le Sud de Madagascar"
            className="rounded-2xl object-cover w-full h-[420px] shadow-xl"
          />
        </div>
      </section>

      {/* CONTEXTE */}
      <section id="contexte" className="section-padding bg-savane-50">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={images.cuisineDehors}
            alt="Paysage rural du Sud de Madagascar"
            className="rounded-2xl object-cover w-full h-[460px] shadow-xl order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Le contexte"
              title={contexte.titre}
              align="left"
            />
            <div className="space-y-4">
              {contexte.paragraphes.map((p, i) => (
                <p key={i} className="text-ink-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITE CARD */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Fiche d'identité"
            title="L'association en quelques informations clés"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard icon={<Landmark size={22} />} title="Statut" value={identite.statut} />
            <InfoCard icon={<Calendar size={22} />} title="Année de création" value={String(identite.anneeCreation)} />
            <InfoCard icon={<FileCheck2 size={22} />} title="Référence légale" value={identite.reference} />
            <InfoCard icon={<MapPin size={22} />} title="Siège social" value={identite.siege} />
            <InfoCard icon={<Users size={22} />} title="Membres actifs" value={`${identite.membresActifs} personnes`} />
            <InfoCard
              icon={<Users size={22} />}
              title="Bureau exécutif"
              value={identite.bureauExecutif.join(", ")}
            />
          </div>
        </div>
      </section>

      {/* PRESIDENTE */}
      <section className="section-padding bg-ink-900 text-white">
        <div className="container-custom grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <img
            src={images.selfieFondatrice1}
            alt={identite.presidente.nom}
            className="rounded-2xl object-cover w-full h-[400px] shadow-2xl"
          />
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 bg-white/15 text-white">
              Principale responsable
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
              {identite.presidente.nom}
            </h3>
            <p className="text-terracotta-300 font-medium mb-6">
              {identite.presidente.titre}
            </p>
            <div className="space-y-3 text-white/85">
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-terracotta-400" />
                <a href={`mailto:${identite.presidente.email}`} className="hover:underline break-all">
                  {identite.presidente.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-terracotta-400" />
                <a href={`tel:${identite.presidente.tel.replace(/\s/g, "")}`} className="hover:underline">
                  {identite.presidente.tel}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE + BENEFICIAIRES */}
      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <div className="bg-baobab-50 rounded-2xl p-8 border border-baobab-100">
            <MapPin size={28} className="text-baobab-600 mb-4" />
            <h3 className="font-display font-bold text-xl text-ink-900 mb-3">
              Zone d'intervention
            </h3>
            <p className="text-ink-600 leading-relaxed mb-4">
              Région {zoneIntervention.region}, District {zoneIntervention.district},
              village d'{zoneIntervention.village} et {zoneIntervention.rayon}.
            </p>
            <div className="flex flex-wrap gap-2">
              {zoneIntervention.villages.map((v) => (
                <span key={v} className="px-3 py-1.5 rounded-full bg-white text-baobab-700 text-sm font-medium border border-baobab-200">
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-terracotta-50 rounded-2xl p-8 border border-terracotta-100">
            <Users size={28} className="text-terracotta-600 mb-4" />
            <h3 className="font-display font-bold text-xl text-ink-900 mb-3">
              Bénéficiaires
            </h3>
            <p className="text-ink-600 leading-relaxed">{beneficiaires.description}</p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display font-extrabold text-4xl text-terracotta-600">
                {beneficiaires.total}
              </span>
              <span className="text-ink-600">femmes bénéficiaires directes</span>
            </div>
          </div>
        </div>
      </section>

      <DonateBanner />
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-savane-50 rounded-2xl p-6 border border-savane-100 hover:shadow-md transition-shadow">
      <span className="w-11 h-11 rounded-xl bg-white text-terracotta-600 flex items-center justify-center mb-4 shadow-sm">
        {icon}
      </span>
      <p className="text-xs font-bold uppercase tracking-wide text-ink-400 mb-1">
        {title}
      </p>
      <p className="text-ink-800 font-medium leading-snug">{value}</p>
    </div>
  );
}
