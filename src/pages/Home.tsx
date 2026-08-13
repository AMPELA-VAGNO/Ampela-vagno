import DonateBanner from "../components/DonateBanner";
import HeroSection from "../components/home/HeroSection";
import MissionSection from "../components/home/MissionSection";
import AgrSection from "../components/home/AgrSection";
import ZoneInterventionSection from "../components/home/ZoneInterventionSection";
import FounderSection from "../components/home/FounderSection";
import VisionSection from "../components/home/VisionSection";
import { images } from "../data/images";
import {
  chiffresCles,
  objectifsSpecifiques,
  agr,
  zoneIntervention,
  versChangementDurable,
} from "../data/content";

export default function Home() {
  return (
    <div>
      <HeroSection
        badge="Association Ampela Vagno · Grand Sud de Madagascar"
        title="Autonomiser les femmes,"
        highlight="briser le cycle"
        subtitle="des mariages précoces"
        description="Dans le district d'Ampanihy Ouest, Ampela Vagno — « femmes valorisées, fiables » — accompagne 120 femmes de 6 villages vers l'autonomie financière et sociale, loin des traditions qui les assujettissent."
        primaryLink={{ to: "/qui-sommes-nous", label: "Découvrir notre histoire" }}
        secondaryLink={{ to: "/nous-soutenir", label: "Nous soutenir" }}
        stats={chiffresCles}
      />

      <MissionSection
        title="Donner aux femmes du Grand Sud une autre perspective d'avenir"
        description="À moins de 30 ans, de nombreuses femmes de la région se retrouvent veuves, mères de 8 enfants en moyenne, sans droit à l'héritage. Ampela Vagno leur propose une alternative : le transfert intergénérationnel de savoir-faire, l'autonomisation économique et la solidarité entre femmes."
        objectives={objectifsSpecifiques}
        primaryImage={images.groupeFemmesAtelier}
        secondaryImage={images.groupeCouture}
        tertiaryImage={images.reunionVillage2}
        quaternaryImage={images.bebe}
        linkTo="/qui-sommes-nous"
      />

      <AgrSection items={agr} />

      <ZoneInterventionSection
        image={images.brousseAnimaux}
        region={zoneIntervention.region}
        district={zoneIntervention.district}
        villages={zoneIntervention.villages}
        description="Une zone marquée par le réchauffement climatique, la sécheresse récurrente et le Kere (famine chronique), qui fragilise davantage la condition des femmes et des jeunes filles."
      />

      <FounderSection
        image={images.selfieFondatrice1}
        quote="« AMPELA VAGNO s'est constituée pour proposer à ces femmes une autre perspective d'avenir : basée sur le transfert intergénérationnel de savoir-faire manuels, l'autonomisation économique, et la solidarité entre femmes. »"
        name="Kareen NICOLESSI"
        role="Présidente et fondatrice, Ampela Vagno"
      />

      <VisionSection title={versChangementDurable.titre} text={versChangementDurable.texte} />

      <DonateBanner />
    </div>
  );
}
