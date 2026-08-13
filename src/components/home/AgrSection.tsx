import type { ElementType } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Scissors, ChefHat, Shirt } from "lucide-react";
import SectionHeading from "../SectionHeading";

type AgrItem = {
  nom: string;
  icon: string;
  description: string;
};

type AgrSectionProps = {
  items: AgrItem[];
};

const iconMap: Record<string, ElementType> = {
  scissors: Scissors,
  "chef-hat": ChefHat,
  shirt: Shirt,
};

export default function AgrSection({ items }: AgrSectionProps) {
  return (
    <section className="section-padding bg-savane-50">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Nos actions"
          title="3 Activités Génératrices de Revenus"
          description="Identifiées par les femmes elles-mêmes lors des ateliers de sensibilisation dans les 6 villages cibles."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = iconMap[item.icon] ?? HeartHandshake;
            return (
              <div
                key={item.nom}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-ink-100"
              >
                <span className="w-14 h-14 rounded-2xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center mb-6">
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
        <div className="text-center mt-10">
          <Link to="/nos-actions" className="btn-primary">
            Découvrir nos 5 axes d'intervention
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
