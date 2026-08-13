interface Props {
  valeur: string;
  label: string;
}

export default function StatCard({ valeur, label }: Props) {
  return (
    <div className="text-center px-4">
      <p className="font-display font-extrabold text-4xl md:text-5xl text-gradient">
        {valeur}
      </p>
      <p className="mt-2 text-sm md:text-base text-ink-600 font-medium">{label}</p>
    </div>
  );
}
