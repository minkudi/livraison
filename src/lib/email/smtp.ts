import nodemailer from "nodemailer";

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
};

export function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure =
    process.env.SMTP_SECURE === "true" || process.env.SMTP_SECURE === "1" || port === 465;
  const from = process.env.EMAIL_FROM?.trim() || user;

  return { host, port, secure, user, pass, from };
}

export async function sendSmtpMail(options: {
  to: string;
  subject: string;
  html: string;
}): Promise<{ messageId: string }> {
  const cfg = getSmtpConfig();
  if (!cfg) {
    throw new Error("SMTP non configuré (SMTP_HOST, SMTP_USER, SMTP_PASS)");
  }

  const transport = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  const info = await transport.sendMail({
    from: cfg.from,
    to: options.to,
    subject: options.subject,
    html: options.html,
  });

  const messageId = typeof info.messageId === "string" ? info.messageId : String(info.messageId);
  return { messageId };
}
