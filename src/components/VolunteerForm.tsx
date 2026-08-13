import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, HandHeart } from "lucide-react";
import SectionHeading from "./SectionHeading";

type VolunteerFormProps = {
  email: string;
};

const domaines = [
  "Formation / éducation",
  "Santé / hygiène",
  "Artisanat / couture",
  "Agriculture / élevage",
  "Communication / collecte de fonds",
  "Autre",
];

const disponibilites = [
  "Quelques heures à distance",
  "Une mission courte sur le terrain (1 à 2 semaines)",
  "Une mission longue sur le terrain (1 mois ou plus)",
  "Ponctuellement, selon les besoins",
];

const initialForm = {
  nom: "",
  email: "",
  telephone: "",
  domaine: domaines[0],
  disponibilite: disponibilites[0],
  message: "",
};

export default function VolunteerForm({ email }: VolunteerFormProps) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(initialForm);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Candidature bénévole — ${form.nom}`
    );
    const body = encodeURIComponent(
      `Nom : ${form.nom}\n` +
        `Email : ${form.email}\n` +
        `Téléphone : ${form.telephone || "Non renseigné"}\n` +
        `Domaine de compétence : ${form.domaine}\n` +
        `Disponibilité : ${form.disponibilite}\n\n` +
        `Message :\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="benevole" className="section-padding bg-savane-50 scroll-mt-24">
      <div className="container-custom grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <div>
          <SectionHeading
            eyebrow="Devenir bénévole"
            title="Rejoignez l'équipe sur le terrain ou à distance"
            align="left"
          />
          <p className="text-ink-600 leading-relaxed mb-6">
            Formation, santé, artisanat, communication… quel que soit votre
            domaine, votre engagement peut faire une vraie différence pour
            les femmes des 6 villages autour d'Ejeda. Décrivez-nous votre
            profil et vos disponibilités : la présidente d'Ampela Vagno vous
            recontactera pour organiser votre mission.
          </p>
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-savane-100">
            <span className="w-11 h-11 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0">
              <HandHeart size={20} />
            </span>
            <p className="text-sm text-ink-600 leading-relaxed">
              Pas besoin d'expérience associative : nous adaptons chaque
              mission à vos compétences et au temps que vous pouvez donner,
              que ce soit à distance ou directement dans le Grand Sud de
              Madagascar.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 border border-savane-100 shadow-sm">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="mx-auto text-baobab-600 mb-4" />
              <h3 className="font-display font-bold text-xl text-ink-900 mb-2">
                Merci pour votre engagement !
              </h3>
              <p className="text-ink-600">
                Votre client mail devrait s'être ouvert avec votre
                candidature pré-remplie. Nous revenons vers vous rapidement.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setSent(false);
                }}
                className="mt-6 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
              >
                Envoyer une autre candidature
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-ink-800 mb-2">
                    Nom complet
                  </label>
                  <input
                    required
                    type="text"
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink-800 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={(e) =>
                      setForm({ ...form, telephone: e.target.value })
                    }
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                    placeholder="+261 34 00 000 00"
                  />
                </div>
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
                  className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                  placeholder="vous@exemple.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-ink-800 mb-2">
                    Domaine de compétence
                  </label>
                  <select
                    value={form.domaine}
                    onChange={(e) =>
                      setForm({ ...form, domaine: e.target.value })
                    }
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                  >
                    {domaines.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink-800 mb-2">
                    Disponibilité
                  </label>
                  <select
                    value={form.disponibilite}
                    onChange={(e) =>
                      setForm({ ...form, disponibilite: e.target.value })
                    }
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                  >
                    {disponibilites.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink-800 mb-2">
                  Votre message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40 resize-none"
                  placeholder="Parlez-nous de votre motivation et de votre expérience…"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Envoyer ma candidature
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
