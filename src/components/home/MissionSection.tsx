import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import SectionHeading from "../SectionHeading";

type MissionGoal = {
  titre: string;
  description: string;
};

type MissionSectionProps = {
  title: string;
  description: string;
  objectives: MissionGoal[];
  primaryImage: string;
  secondaryImage: string;
  tertiaryImage: string;
  quaternaryImage: string;
  linkTo: string;
};

export default function MissionSection({
  title,
  description,
  objectives,
  primaryImage,
  secondaryImage,
  tertiaryImage,
  quaternaryImage,
  linkTo,
}: MissionSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading
            eyebrow="Notre mission"
            title={title}
            align="left"
          />
          <p className="text-ink-600 leading-relaxed mb-5">{description}</p>
          <ul className="space-y-4">
            {objectives.map((objective) => (
              <li key={objective.titre} className="flex gap-3">
                <span className="mt-1 w-6 h-6 rounded-full bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={14} />
                </span>
                <p className="text-ink-700">
                  <span className="font-semibold text-ink-900">
                    {objective.titre}
                  </span>{" "}
                  {objective.description}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to={linkTo}
            className="inline-flex items-center gap-2 mt-8 font-semibold text-terracotta-600 hover:text-terracotta-700"
          >
            En savoir plus sur notre contexte
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={primaryImage}
            alt="Réunion de femmes au village"
            className="rounded-2xl object-cover h-64 w-full shadow-lg"
          />
          <img
            src={secondaryImage}
            alt="Atelier de couture"
            className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8"
          />
          <img
            src={tertiaryImage}
            alt="Réunion communautaire"
            className="rounded-2xl object-cover h-64 w-full shadow-lg"
          />
          <img
            src={quaternaryImage}
            alt="Enfant du village d'Ejeda"
            className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8"
          />
        </div>
      </div>
    </section>
  );
}
