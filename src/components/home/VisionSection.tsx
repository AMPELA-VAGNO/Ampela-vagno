import SectionHeading from "../SectionHeading";

type VisionSectionProps = {
  title: string;
  text: string;
};

export default function VisionSection({ title, text }: VisionSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl text-center">
        <SectionHeading eyebrow="Notre vision" title={title} />
        <p className="text-ink-600 leading-relaxed">{text}</p>
      </div>
    </section>
  );
}
