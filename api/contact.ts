import type { IncomingMessage, ServerResponse } from "node:http";
import nodemailer from "nodemailer";

type ContactRequest = {
  nom?: unknown;
  email?: unknown;
  message?: unknown;
  subject?: unknown;
};

function sendJson(response: ServerResponse, status: number, body: object) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(body));
}

async function readBody(request: IncomingMessage): Promise<ContactRequest> {
  let rawBody = "";
  for await (const chunk of request) {
    rawBody += chunk;
    if (rawBody.length > 20_000) throw new Error("Message trop long.");
  }
  return JSON.parse(rawBody) as ContactRequest;
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Méthode non autorisée." });
  }

  try {
    const { nom, email, message, subject } = await readBody(request);
    if (typeof nom !== "string" || typeof email !== "string" || typeof message !== "string" || !nom.trim() || !message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return sendJson(response, 400, { error: "Veuillez remplir tous les champs correctement." });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    if (!smtpUser || !smtpPassword) {
      console.error("Variables SMTP absentes.");
      return sendJson(response, 500, { error: "Le service de messagerie n'est pas encore configuré." });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: { user: smtpUser, pass: smtpPassword },
    });

    const emailSubject = typeof subject === "string" && subject.trim()
      ? subject.trim().replace(/[\r\n]/g, " ")
      : `Message depuis le site — ${nom.trim().replace(/[\r\n]/g, " ")}`;

    // Déterminer si le message est du HTML
    const isHtml = message.trim().includes("<!DOCTYPE") || message.trim().includes("<html");
    
    const mailOptions: any = {
      from: process.env.SMTP_FROM ?? `Site Ampela Vagno <${smtpUser}>`,
      to: process.env.CONTACT_RECIPIENT ?? "mioramh@gmail.com",
      replyTo: email.trim(),
      subject: emailSubject,
    };

    if (isHtml) {
      // Envoyer comme HTML avec une version texte fallback
      mailOptions.html = message.trim();
      mailOptions.text = `De : ${nom.trim()} (${email.trim()})`;
    } else {
      // Envoyer comme texte simple
      mailOptions.text = `${message.trim()}\n\n---\nDe : ${nom.trim()} (${email.trim()})`;
    }

    await transporter.sendMail(mailOptions);

    return sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error("Erreur d'envoi du formulaire :", error);
    return sendJson(response, 500, { error: "L'envoi du message a échoué. Réessayez plus tard." });
  }
}
