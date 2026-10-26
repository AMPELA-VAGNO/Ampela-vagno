import DonateBanner from "../components/DonateBanner";
import HeroSection from "../components/home/HeroSection";
import MissionSection from "../components/home/MissionSection";
import AgrSection from "../components/home/AgrSection";
import ZoneInterventionSection from "../components/home/ZoneInterventionSection";
import PaysagesGallery from "../components/home/PaysagesGallery";
import FounderSection from "../components/home/FounderSection";
import VisionSection from "../components/home/VisionSection";
import { images } from "../data/images";
import {
  chiffresCles,
  zoneIntervention,
  versChangementDurable,
} from "../data/content";

export default function Home() {
  return (
    <div>
      <HeroSection
        badge="Association Ampela Vagno · Grand Sud de Madagascar"
        title="Les femmes sont libres"
        highlight="de choisir"
        subtitle="— fortes de réussir"
        description="Ampela Vagno favorise la conscientisation des femmes du Sud de Madagascar sur leur valeur intrinsèque, leurs droits et leur liberté de choix."
        primaryLink={{ to: "/nous-soutenir", label: "Je soutiens leur indépendance" }}
        secondaryLink={{ to: "/nos-actions", label: "Découvrir nos actions" }}
        stats={chiffresCles}
      />

      <MissionSection
        title="Rompre le cycle de la précarité"
        description="Nous combattons l'appauvrissement continuel de la région en confiant aux femmes un rôle économique et social majeur au sein de leurs communautés. Pas d'assistanat : l'autonomie par l'action."
        objectives={[
          {
            titre: "Droits & Responsabilités",
            description:
              "Permettre à chaque femme de s'affirmer comme un être humain doté de droits fondamentaux et d'une totale liberté de choix.",
          },
          {
            titre: "Transmission de Savoir-Faire",
            description:
              "Développer des compétences pratiques et entrepreneuriales pour générer des revenus autonomes et durables.",
          },
          {
            titre: "Partage Intergénérationnel",
            description:
              "Transformer les expériences des aînées en leviers de réussite pour les jeunes générations à travers un réseau de sororité actif.",
          },
        ]}
        primaryImage={images.groupeFemmesAtelier}
        secondaryImage={images.groupeCouture}
        tertiaryImage={images.paysageBaobabCactus}
        quaternaryImage={images.bebe}
        linkTo="/qui-sommes-nous"
      />

      <AgrSection
        title="Nos projets concrets : Ejeda"
        description="Notre déploiement sur le terrain cible des communes clés comme Ejeda, dans la région Atsimo Andrefana, pour initier une dynamique d'inclusion économique directe."
        items={[
          {
            nom: "Mécanisation et transformation locale",
            icon: "tractor",
            description:
              "Implantation d'outils de production, comme des broyeurs à canne à sucre, gérés par les communautés locales.",
          },
          {
            nom: "Digitalisation & Éducation",
            icon: "graduation-cap",
            description:
              "Formations de base aux technologies de l'information et de la communication (TIC), avec un accompagnement vers l'insertion professionnelle numérique.",
          },
        ]}
      />

      <ZoneInterventionSection
        region={zoneIntervention.region}
        district={zoneIntervention.district}
        villages={zoneIntervention.villages}
        description="Une zone marquée par le réchauffement climatique, la sécheresse récurrente et le Kere (famine chronique), qui fragilise davantage la condition des femmes et des jeunes filles."
      />

      <PaysagesGallery
        images={[
          { src: images.paysageFiguiersBarbarie, alt: "Figuiers de barbarie dans le Sud aride de Madagascar" },
          { src: images.paysageCharretteEau, alt: "Corvée d'eau dans un village autour d'Ejeda" },
          { src: images.paysageEnclosPeint, alt: "Enclos traditionnel peint près d'Ejeda" },
        ]}
      />

      <FounderSection
        image={images.selfieFondatricePrincipale}
        quote="« AMPELA VAGNO s'est constituée pour proposer à ces femmes une autre perspective d'avenir : basée sur le transfert intergénérationnel de savoir-faire manuels, l'autonomisation économique, et la solidarité entre femmes. »"
        name="Kareen NICOLESSI"
        role="Présidente et fondatrice, Ampela Vagno"
      />

      <VisionSection title={versChangementDurable.titre} text={versChangementDurable.texte} />

      <DonateBanner />
    </div>
  );
}
