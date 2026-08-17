import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, HandHeart } from "lucide-react";
import SectionHeading from "./SectionHeading";

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

export default function VolunteerForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState(initialForm);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
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
    void subject;
    void body;

    const htmlMessage = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #2a2a2a; background-color: #f9f7f4;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #c95a3e 0%, #a34530 100%); padding: 40px 30px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">🤝 Nouvelle Candidature</h1>
      <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">Ampela Vagno</p>
    </div>

    <!-- Content -->
    <div style="padding: 40px 30px;">
      <!-- Greeting -->
      <p style="margin: 0 0 30px 0; font-size: 16px; color: #2a2a2a;">
        Bonjour,<br>
        <br>
        Une nouvelle candidature bénévole a été reçue via le formulaire d'engagement.
      </p>

      <!-- Info Cards -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 30px 0;">
        <div style="background-color: #faf5f0; border-radius: 12px; padding: 16px; border-left: 4px solid #c95a3e;">
          <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">Nom</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600; color: #2a2a2a;">${form.nom}</p>
        </div>
        <div style="background-color: #faf5f0; border-radius: 12px; padding: 16px; border-left: 4px solid #c95a3e;">
          <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600; color: #2a2a2a;"><a href="mailto:${form.email}" style="color: #c95a3e; text-decoration: none;">${form.email}</a></p>
        </div>
        <div style="background-color: #faf5f0; border-radius: 12px; padding: 16px; border-left: 4px solid #c95a3e;">
          <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">Téléphone</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600; color: #2a2a2a;">${form.telephone || "Non renseigné"}</p>
        </div>
        <div style="background-color: #faf5f0; border-radius: 12px; padding: 16px; border-left: 4px solid #c95a3e;">
          <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">Domaine</p>
          <p style="margin: 0; font-size: 15px; font-weight: 600; color: #2a2a2a;">${form.domaine}</p>
        </div>
      </div>

      <!-- Availability -->
      <div style="background-color: #faf5f0; border-radius: 12px; padding: 16px; border-left: 4px solid #c95a3e; margin: 20px 0;">
        <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">Disponibilité</p>
        <p style="margin: 0; font-size: 15px; font-weight: 600; color: #2a2a2a;">${form.disponibilite}</p>
      </div>

      <!-- Message Section -->
      <div style="background-color: #f9f7f4; border-radius: 12px; padding: 20px; margin: 30px 0;">
        <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
        <p style="margin: 0; font-size: 15px; color: #2a2a2a; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${form.message}</p>
      </div>

      <!-- CTA -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${form.email}" style="display: inline-block; background: linear-gradient(135deg, #c95a3e 0%, #a34530 100%); color: white; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">Répondre au candidat</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #faf5f0; border-top: 1px solid #e8e0d8; padding: 20px 30px; text-align: center;">
      <p style="margin: 0; font-size: 13px; color: #666;">
        Cet email a été généré automatiquement par le formulaire de candidature<br>
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
          subject: `Candidature bénévole — ${form.nom}`,
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
        throw new Error(data.error ?? `L'envoi de la candidature a échoué (erreur ${response.status}).`);
      }

      setSent(true);
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "L'envoi de la candidature a échoué.");
    } finally {
      setSending(false);
    }
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
                Votre candidature a bien été envoyée. Nous revenons vers vous rapidement.
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

              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
                {sending ? "Envoi en cours…" : "Envoyer ma candidature"}
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
