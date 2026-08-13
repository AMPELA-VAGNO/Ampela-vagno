import { Heart, HandHeart, Package, Megaphone, Mail, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import VolunteerForm from "../components/VolunteerForm";
import { images } from "../data/images";
import { contact, budget } from "../data/content";
import { Link } from "react-router-dom";

type Facon = {
  icon: typeof Heart;
  titre: string;
  description: string;
  anchor?: string;
};

const facons: Facon[] = [
  {
    icon: Heart,
    titre: "Faire un don financier",
    description:
      "Contribuez au financement des Activités Génératrices de Revenus, du matériel, et des infrastructures (électrification solaire, accès à l'eau, locaux sécurisés).",
  },
  {
    icon: Package,
    titre: "Faire un don en matériel",
    description:
      "Machines à coudre, ustensiles de cuisine, réchauds solaires, Serviettes Hygiéniques Lavables (SHL)… chaque équipement compte pour lancer un atelier.",
  },
  {
    icon: HandHeart,
    titre: "Devenir bénévole sur le terrain",
    description:
      "Partagez vos compétences (formation, santé, artisanat) directement auprès des femmes des 6 villages cibles, aux côtés de l'équipe d'Ampela Vagno.",
    anchor: "#benevole",
  },
  {
    icon: Megaphone,
    titre: "Devenir partenaire ou relais",
    description:
      "Aidez-nous à faire connaître notre action, à distribuer les produits locaux à plus grande échelle, ou à nouer des partenariats institutionnels.",
  },
];

export default function NousSoutenir() {
  return (
    <div>
      <PageHero
        eyebrow="Nous soutenir"
        title="Chaque geste compte pour faire bouger les lignes"
        description="Votre contribution compte pour faire changer les mentalités et les comportements dans le Grand Sud de Madagascar."
        image={images.paysageSudEjeda}
      />

      {/* FACONS DE SOUTENIR */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Comment nous aider"
            title="Plusieurs façons de vous engager à nos côtés"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {facons.map((f) => {
              const Icon = f.icon;
              const content = (
                <>
                  <span className="w-14 h-14 rounded-2xl bg-white text-terracotta-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink-900 mb-2">
                      {f.titre}
                    </h3>
                    <p className="text-ink-600 text-sm leading-relaxed">
                      {f.description}
                    </p>
                    {f.anchor && (
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-terracotta-600">
                        Remplir le formulaire
                        <ArrowRight size={14} />
                      </span>
                    )}
                  </div>
                </>
              );
              return f.anchor ? (
                <a
                  key={f.titre}
                  href={f.anchor}
                  className="bg-savane-50 rounded-2xl p-8 border border-savane-100 flex gap-5 transition-shadow hover:shadow-md hover:border-terracotta-200"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={f.titre}
                  className="bg-savane-50 rounded-2xl p-8 border border-savane-100 flex gap-5"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <VolunteerForm email={contact.email} />

      {/* BUDGET CONTEXT */}
      <section className="section-padding bg-ink-900 text-white">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 bg-white/15 text-white">
              Où va votre don
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              Un budget estimatif de {budget.montantFormate} sur {budget.periode}
            </h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Ce budget doit permettre de construire des locaux sécurisés
              d'apprentissage, d'électrifier les villages à l'énergie
              solaire, de mettre en place des systèmes d'accès à l'eau
              potable, et de développer la distribution à grande échelle
              des produits des femmes de l'association.
            </p>
            <p className="text-white/70 text-sm">{budget.note}</p>
          </div>
          <img
            src={images.cuisineAV}
            alt="Atelier cuisine d'Ampela Vagno"
            className="rounded-2xl object-cover w-full h-[380px] shadow-2xl"
          />
        </div>
      </section>

      {/* CONTACT DON CTA */}
      <section className="section-padding bg-savane-50">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <Mail size={30} className="mx-auto text-terracotta-600 mb-5" />
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ink-900 mb-4">
            Envie de nous soutenir dès aujourd'hui ?
          </h2>
          <p className="text-ink-600 leading-relaxed mb-8">
            Contactez directement la présidente de l'association pour
            organiser votre don, votre mission bénévole ou votre partenariat.
          </p>
          <Link to="/contact" className="btn-primary">
            Écrire à Ampela Vagno
            <ArrowRight size={16} />
          </Link>
          <p className="text-ink-500 text-sm mt-4">
            {contact.email} · {contact.tel}
          </p>
        </div>
      </section>
    </div>
  );
}
