import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, CheckCircle2, Heart, Package, HandHeart, Megaphone } from "lucide-react";
import SectionHeading from "./SectionHeading";

type EngagementType = "don-financier" | "don-materiel" | "benevolat" | "partenariat";

const typeOptions: { value: EngagementType; label: string; icon: typeof Heart }[] = [
  { value: "don-financier", label: "Faire un don financier", icon: Heart },
  { value: "don-materiel", label: "Faire un don en matériel", icon: Package },
  { value: "benevolat", label: "Devenir bénévole", icon: HandHeart },
  { value: "partenariat", label: "Devenir partenaire ou relais", icon: Megaphone },
];

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

const frequences = ["Don ponctuel", "Don mensuel"];

const typesPartenariat = [
  "Partenariat institutionnel",
  "Relais de distribution des produits",
  "Communication / médiatisation",
  "Autre",
];

const introTextes: Record<EngagementType, string> = {
  "don-financier":
    "Votre don finance les Activités Génératrices de Revenus, le matériel, et les infrastructures (électrification solaire, accès à l'eau, locaux sécurisés).",
  "don-materiel":
    "Machines à coudre, ustensiles de cuisine, réchauds solaires, Serviettes Hygiéniques Lavables… chaque équipement compte pour lancer un atelier.",
  benevolat:
    "Formation, santé, artisanat, communication… quel que soit votre domaine, votre engagement peut faire une vraie différence pour les femmes des 6 villages autour d'Ejeda.",
  partenariat:
    "Aidez-nous à faire connaître notre action, à distribuer les produits locaux à plus grande échelle, ou à nouer des partenariats institutionnels.",
};

const successTextes: Record<EngagementType, { titre: string; texte: string }> = {
  "don-financier": {
    titre: "Merci pour votre générosité !",
    texte: "Votre demande de don a bien été envoyée. La présidente vous recontactera pour organiser les modalités.",
  },
  "don-materiel": {
    titre: "Merci pour votre don !",
    texte: "Votre proposition de don en matériel a bien été envoyée. Nous revenons vers vous rapidement pour l'organiser.",
  },
  benevolat: {
    titre: "Merci pour votre engagement !",
    texte: "Votre candidature bénévole a bien été envoyée. Nous revenons vers vous rapidement.",
  },
  partenariat: {
    titre: "Merci pour votre intérêt !",
    texte: "Votre demande de partenariat a bien été envoyée. Nous revenons vers vous rapidement.",
  },
};

const initialForm = {
  nom: "",
  email: "",
  telephone: "",
  montant: "",
  frequence: frequences[0],
  materiel: "",
  domaine: domaines[0],
  disponibilite: disponibilites[0],
  organisation: "",
  typePartenariat: typesPartenariat[0],
  message: "",
};

function isEngagementType(value: string | null): value is EngagementType {
  return value === "don-financier" || value === "don-materiel" || value === "benevolat" || value === "partenariat";
}

export default function EngagementForm() {
  const [searchParams] = useSearchParams();
  const paramType = searchParams.get("type");
  const [type, setType] = useState<EngagementType>(
    isEngagementType(paramType) ? paramType : "don-financier"
  );
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(initialForm);

  const typeLabel = typeOptions.find((t) => t.value === type)!.label;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    // Détails spécifiques au type de demande, affichés dans l'email
    const details: { label: string; value: string }[] = [
      { label: "Nom", value: form.nom },
      { label: "Email", value: form.email },
      { label: "Téléphone", value: form.telephone || "Non renseigné" },
    ];
    if (type === "don-financier") {
      details.push(
        { label: "Montant envisagé", value: form.montant || "Non précisé" },
        { label: "Fréquence", value: form.frequence }
      );
    } else if (type === "don-materiel") {
      details.push({ label: "Matériel proposé", value: form.materiel || "Non précisé" });
    } else if (type === "benevolat") {
      details.push(
        { label: "Domaine de compétence", value: form.domaine },
        { label: "Disponibilité", value: form.disponibilite }
      );
    } else {
      details.push(
        { label: "Organisation", value: form.organisation || "Non précisé" },
        { label: "Type de partenariat", value: form.typePartenariat }
      );
    }

    const detailsHtml = details
      .map(
        (d) => `
        <div style="background-color: #faf5f0; border-radius: 12px; padding: 16px; border-left: 4px solid #c95a3e;">
          <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">${d.label}</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600; color: #2a2a2a;">${d.value}</p>
        </div>`
      )
      .join("");

    const htmlMessage = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #2a2a2a; background-color: #f9f7f4;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
    <div style="background: linear-gradient(135deg, #c95a3e 0%, #a34530 100%); padding: 40px 30px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700;">🤝 ${typeLabel}</h1>
      <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">Ampela Vagno — Nouvelle demande via le site</p>
    </div>
    <div style="padding: 40px 30px;">
      <p style="margin: 0 0 30px 0; font-size: 16px; color: #2a2a2a;">
        Bonjour,<br><br>
        Une nouvelle demande « ${typeLabel} » a été reçue via le formulaire du site.
      </p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 30px 0;">
        ${detailsHtml}
      </div>
      <div style="background-color: #f9f7f4; border-radius: 12px; padding: 20px; margin: 30px 0;">
        <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
        <p style="margin: 0; font-size: 15px; color: #2a2a2a; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${form.message}</p>
      </div>
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${form.email}" style="display: inline-block; background: linear-gradient(135deg, #c95a3e 0%, #a34530 100%); color: white; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">Répondre</a>
      </div>
    </div>
    <div style="background-color: #faf5f0; border-top: 1px solid #e8e0d8; padding: 20px 30px; text-align: center;">
      <p style="margin: 0; font-size: 13px; color: #666;">
        Cet email a été généré automatiquement par le formulaire du site<br>
        <span style="color: #999;">Ampela Vagno — Empower women, Build futures</span>
      </p>
    </div>
  </div>
</body>
</html>
    `;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          message: htmlMessage,
          subject: `${typeLabel} — ${form.nom}`,
        }),
      });
      const responseBody = await response.text();
      let data: { error?: string } = {};
      if (responseBody) {
        try {
          data = JSON.parse(responseBody) as { error?: string };
        } catch {
          // Une réponse d'erreur peut ne pas être au format JSON.
        }
      }
      if (!response.ok) {
        throw new Error(data.error ?? `L'envoi de votre demande a échoué (erreur ${response.status}).`);
      }

      setSent(true);
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "L'envoi de votre demande a échoué.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="engagement" className="section-padding bg-savane-50 scroll-mt-24">
      <div className="container-custom grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <div>
          <SectionHeading
            eyebrow="Nous soutenir"
            title="Choisissez comment vous engager à nos côtés"
            align="left"
          />
          <p className="text-ink-600 leading-relaxed mb-6">{introTextes[type]}</p>
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-savane-100">
            <span className="w-11 h-11 rounded-xl bg-terracotta-100 text-terracotta-600 flex items-center justify-center shrink-0">
              <HandHeart size={20} />
            </span>
            <p className="text-sm text-ink-600 leading-relaxed">
              Quel que soit votre choix, la présidente d'Ampela Vagno vous
              recontactera personnellement pour organiser la suite, que ce
              soit à distance ou directement dans le Grand Sud de Madagascar.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 border border-savane-100 shadow-sm">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="mx-auto text-baobab-600 mb-4" />
              <h3 className="font-display font-bold text-xl text-ink-900 mb-2">
                {successTextes[type].titre}
              </h3>
              <p className="text-ink-600">{successTextes[type].texte}</p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Sélecteur du type de demande */}
              <div>
                <label className="block text-sm font-semibold text-ink-800 mb-2">
                  Je souhaite…
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {typeOptions.map((opt) => {
                    const Icon = opt.icon;
                    const active = opt.value === type;
                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => setType(opt.value)}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-left text-sm font-medium transition-colors ${
                          active
                            ? "border-terracotta-400 bg-terracotta-50 text-terracotta-700"
                            : "border-ink-200 text-ink-600 hover:border-terracotta-200"
                        }`}
                      >
                        <Icon size={16} className="shrink-0" />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

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
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
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

              {/* Champs spécifiques au type de demande */}
              {type === "don-financier" && (
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-ink-800 mb-2">
                      Montant envisagé
                    </label>
                    <input
                      type="text"
                      value={form.montant}
                      onChange={(e) => setForm({ ...form, montant: e.target.value })}
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                      placeholder="Ex. 50 000 Ar"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink-800 mb-2">
                      Fréquence
                    </label>
                    <select
                      value={form.frequence}
                      onChange={(e) => setForm({ ...form, frequence: e.target.value })}
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                    >
                      {frequences.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {type === "don-materiel" && (
                <div>
                  <label className="block text-sm font-semibold text-ink-800 mb-2">
                    Matériel que vous souhaitez offrir
                  </label>
                  <input
                    type="text"
                    value={form.materiel}
                    onChange={(e) => setForm({ ...form, materiel: e.target.value })}
                    className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                    placeholder="Ex. machines à coudre, réchauds solaires…"
                  />
                </div>
              )}

              {type === "benevolat" && (
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-ink-800 mb-2">
                      Domaine de compétence
                    </label>
                    <select
                      value={form.domaine}
                      onChange={(e) => setForm({ ...form, domaine: e.target.value })}
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                    >
                      {domaines.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink-800 mb-2">
                      Disponibilité
                    </label>
                    <select
                      value={form.disponibilite}
                      onChange={(e) => setForm({ ...form, disponibilite: e.target.value })}
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                    >
                      {disponibilites.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {type === "partenariat" && (
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-ink-800 mb-2">
                      Organisation / entreprise
                    </label>
                    <input
                      type="text"
                      value={form.organisation}
                      onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                      placeholder="Nom de votre structure"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink-800 mb-2">
                      Type de partenariat
                    </label>
                    <select
                      value={form.typePartenariat}
                      onChange={(e) => setForm({ ...form, typePartenariat: e.target.value })}
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40"
                    >
                      {typesPartenariat.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-ink-800 mb-2">
                  Votre message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-ink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracotta-400 bg-savane-50/40 resize-none"
                  placeholder="Parlez-nous de votre motivation, de votre projet ou de votre don…"
                />
              </div>

              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
                {sending ? "Envoi en cours…" : "Envoyer ma demande"}
                <Send size={16} />
              </button>
              {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
