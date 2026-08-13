import SectionHeading from "../SectionHeading";

type ZoneInterventionSectionProps = {
  image: string;
  region: string;
  district: string;
  villages: string[];
  description: string;
};

export default function ZoneInterventionSection({
  image,
  region,
  district,
  villages,
  description,
}: ZoneInterventionSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1 relative">
          <img
            src={image}
            alt="Paysage du Sud de Madagascar"
            className="rounded-2xl object-cover w-full h-[420px] shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[220px] hidden md:block">
            <p className="font-display font-bold text-3xl text-terracotta-600">6</p>
            <p className="text-sm text-ink-600">villages engagés autour d'Ejeda</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Notre zone d'intervention"
            title="Le Grand Sud de Madagascar, aux portes du désert"
            align="left"
          />
          <p className="text-ink-600 leading-relaxed mb-4">
            Ampela Vagno intervient dans la région{" "}
            <strong className="text-ink-900">{region}</strong>, district {district},
            autour du village d'Ejeda et sur 25 km à la ronde.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {villages.map((village) => (
              <span
                key={village}
                className="px-4 py-2 rounded-full bg-baobab-50 text-baobab-700 text-sm font-medium border border-baobab-100"
              >
                {village}
              </span>
            ))}
          </div>
          <p className="text-ink-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
