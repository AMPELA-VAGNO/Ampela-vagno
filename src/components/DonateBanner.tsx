import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images } from "../data/images";

export default function DonateBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.sunset3}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta-800/90 via-terracotta-700/85 to-savane-700/85" />
      </div>
      <div className="container-custom relative z-10 py-16 md:py-20 text-center">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-white max-w-2xl mx-auto leading-tight">
          Chaque geste compte pour faire bouger les lignes
        </h2>
        <p className="mt-4 text-white/90 max-w-xl mx-auto">
          Votre contribution compte pour faire changer les mentalités et les
          comportements dans le Grand Sud de Madagascar.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            to="/nous-soutenir"
            className="btn-primary bg-white !text-terracotta-700 hover:bg-savane-50"
            style={{ backgroundColor: "white", color: "#9e360d" }}
          >
            Je fais un don
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="btn-secondary !border-white !text-white hover:bg-white/10"
            style={{ borderColor: "white", color: "white", backgroundColor: "transparent" }}
          >
            Devenir bénévole
          </Link>
        </div>
      </div>
    </section>
  );
}
