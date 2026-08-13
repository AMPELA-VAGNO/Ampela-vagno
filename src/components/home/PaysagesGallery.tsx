type GalleryImage = {
  src: string;
  alt: string;
};

type PaysagesGalleryProps = {
  images: GalleryImage[];
};

// Bande de paysages réels du Grand Sud, fournis par l'association
// (photos prises autour d'Ejeda).
export default function PaysagesGallery({ images }: PaysagesGalleryProps) {
  return (
    <div className="bg-white pb-20 md:pb-28 -mt-2">
      <div className="container-custom">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm md:aspect-[16/10]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
