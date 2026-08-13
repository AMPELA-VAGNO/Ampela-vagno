import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart, Share2, Camera } from "lucide-react";
import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="container-custom py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-11 h-11 rounded-full bg-sunset-gradient flex items-center justify-center text-white font-display font-bold text-lg">
              AV
            </span>
            <span className="font-display font-bold text-lg text-white">
              Ampela Vagno
            </span>
          </div>
          <p className="text-sm text-ink-300 leading-relaxed">
            Association humanitaire malgache œuvrant pour l'autonomisation
            des femmes du Grand Sud de Madagascar, et la lutte contre les
            mariages précoces et forcés.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              aria-label="Réseaux sociaux"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta-600 transition-colors"
            >
              <Share2 size={16} />
            </a>
            <a
              href="#"
              aria-label="Galerie photos"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta-600 transition-colors"
            >
              <Camera size={16} />
            </a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Découvrir</h4>
          <ul className="space-y-2 text-sm text-ink-300">
            <li><Link to="/qui-sommes-nous" className="hover:text-terracotta-400 transition-colors">Qui sommes-nous ?</Link></li>
            <li><Link to="/nos-actions" className="hover:text-terracotta-400 transition-colors">Nos actions</Link></li>
            <li><Link to="/notre-impact" className="hover:text-terracotta-400 transition-colors">Notre impact</Link></li>
            <li><Link to="/nous-soutenir" className="hover:text-terracotta-400 transition-colors">Nous soutenir</Link></li>
            <li><Link to="/contact" className="hover:text-terracotta-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Zone */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Zone d'intervention</h4>
          <p className="text-sm text-ink-300 leading-relaxed">
            Région Antsimo-Andrefana, District Ampanihy Ouest, Ejeda et 25 km alentour.
          </p>
          <p className="text-sm text-ink-300 mt-3">
            Villages : Ejeda, Ambolamena, Gogogogo, Ambatovaky, Belafike, Beahitse.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-ink-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-terracotta-400 shrink-0" />
              <span>{contact.adresse}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-terracotta-400 shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-terracotta-400 transition-colors break-all">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-terracotta-400 shrink-0" />
              <a href={`tel:${contact.tel.replace(/\s/g, "")}`} className="hover:text-terracotta-400 transition-colors">
                {contact.tel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <p>&copy; {new Date().getFullYear()} Association Ampela Vagno — Tous droits réservés.</p>
          <p className="flex items-center gap-1.5">
            Fait avec <Heart size={13} className="text-terracotta-500 fill-terracotta-500" /> pour les femmes du Grand Sud de Madagascar
          </p>
        </div>
      </div>
    </footer>
  );
}
