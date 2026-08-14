import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { images } from "../data/images";
import { contact, identite } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message depuis le site — ${form.nom}`);
    const body = encodeURIComponent(
      `${form.message}\n\n---\nDe : ${form.nom} (${form.email})`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Parlons ensemble de votre engagement"
        description="Une question, un projet de partenariat, une envie de rejoindre l'association ? Écrivez-nous."
        image={images.sousVoiture}
        imagePosition="center 54%"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-[1fr_1.2fr] gap-14">
          {/* Info */}
          <div>
            <SectionHeading
              eyebrow="Nos coordonnées"
              title="Association AMPELA VAGNO"
              align="left"
            />
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Siège social</p>
                  <p className="text-ink-600 text-sm">{contact.adresse}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Zone de terrain</p>
                  <p className="text-ink-600 text-sm">{contact.zoneTerrain}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-ink-600 text-sm hover:text-terracotta-600 break-all">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">Téléphone</p>
                  <a href={`tel:${contact.tel.replace(/\s/g, "")}`} className="text-ink-600 text-sm hover:text-terracotta-600">
                    {contact.tel}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-10 p-6 rounded-2xl bg-savane-50 border border-savane-100">
              <p className="font-semibold text-ink-900 mb-1">
                {identite.presidente.nom}
              </p>
              <p className="text-sm text-ink-600">{identite.presidente.titre}, {identite.nom}</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-savane-50 rounded-3xl p-8 md:p-10 border border-savane-100">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="mx-auto text-baobab-600 mb-4" />
                <h3 className="font-display font-bold text-xl text-ink-900 mb-2">
                  Merci pour votre message !
                </h3>
                <p className="text-ink-600">
                  Votre client mail devrait s'être ouvert. Nous vous répondrons
                  dès que possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-ink-800 mb-2">
                    Nom complet
                  </label>
                  <input
                    required
                    type="text"
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink-800 mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-white"
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink-800 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-white resize-none"
                    placeholder="Votre message pour Ampela Vagno…"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Envoyer le message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
