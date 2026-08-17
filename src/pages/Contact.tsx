import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { images } from "../data/images";
import { contact, identite } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ nom: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

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
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">✉️ Nouveau Message</h1>
      <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">Ampela Vagno</p>
    </div>

    <!-- Content -->
    <div style="padding: 40px 30px;">
      <!-- Greeting -->
      <p style="margin: 0 0 30px 0; font-size: 16px; color: #2a2a2a;">
        Bonjour,<br>
        <br>
        Un nouveau message a été reçu via le formulaire de contact.
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
      </div>

      <!-- Message Section -->
      <div style="background-color: #f9f7f4; border-radius: 12px; padding: 20px; margin: 30px 0;">
        <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 600; color: #c95a3e; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
        <p style="margin: 0; font-size: 15px; color: #2a2a2a; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${form.message}</p>
      </div>

      <!-- CTA -->
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${form.email}" style="display: inline-block; background: linear-gradient(135deg, #c95a3e 0%, #a34530 100%); color: white; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px;">Répondre</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #faf5f0; border-top: 1px solid #e8e0d8; padding: 20px 30px; text-align: center;">
      <p style="margin: 0; font-size: 13px; color: #666;">
        Cet email a été généré automatiquement par le formulaire de contact<br>
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
          subject: `Message de ${form.nom}`,
        }),
      });
      const responseBody = await response.text();
      let data: { error?: string } = {};
      if (responseBody) {
        try {
          data = JSON.parse(responseBody) as { error?: string };
        } catch {
          // Une réponse d'erreur du serveur peut ne pas être au format JSON.
        }
      }
      if (!response.ok) {
        throw new Error(data.error ?? `L'envoi du message a échoué (erreur ${response.status}).`);
      }

      setSent(true);
      setForm({ nom: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "L'envoi du message a échoué.");
    } finally {
      setSending(false);
    }
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
                  Votre message a bien été envoyé. Nous vous répondrons dès que possible.
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
                <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
                  {sending ? "Envoi en cours…" : "Envoyer le message"}
                  <Send size={16} />
                </button>
                {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
