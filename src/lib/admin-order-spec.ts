/**
 * Spécification admin (implémentation ultérieure — pas de page admin pour l’instant).
 *
 * ## Langue des e-mails
 * - À la création / édition d’une commande, l’admin choisit `notificationLocale` (fr | en | nl | de).
 * - Tous les e-mails au client (statut, rappels) utilisent **cette** langue, pas la langue du site public.
 * - Le site public garde son sélecteur UI ; les templates e-mail = `getDictionary(notificationLocale)`.
 *
 * ## Actions admin prévues (par colis)
 * - Enregistrer / mettre à jour les infos colis (destinataire, e-mail, adresse, événements).
 * - Boutons de **changement de statut** (ex. « passer en livraison ») → met à jour la timeline + option d’envoi mail.
 * - Bouton **« Envoyer l’e-mail de notification »** : envoie le template du statut **actuel** sans tout re-sauvegarder.
 * - Option : envoi automatique à chaque changement de statut (case à cocher par colis ou global).
 * - Journal : `email_log` (date, locale, statut, succès/échec Resend).
 *
 * ## Compte admin
 * - Un seul compte fixe (credentials en variables d’environnement).
 */

import type { Locale } from "@/i18n/config";

/** Langue des notifications client pour une commande (choix admin). */
export type NotificationLocale = Locale;

export type ParcelStatus = "processing" | "in_transit" | "delivered" | "exception";

/** Données minimales stockées en base (schéma cible). */
export type OrderRecord = {
  trackingNumber: string;
  recipientEmail: string;
  notificationLocale: NotificationLocale;
  status: ParcelStatus;
  /** Si true, chaque changement de statut déclenche un e-mail. */
  autoNotify: boolean;
  updatedAt: string;
};

export type AdminAction =
  | { type: "save_order"; order: OrderRecord }
  | { type: "set_status"; trackingNumber: string; status: ParcelStatus; sendEmail?: boolean }
  | { type: "send_status_email"; trackingNumber: string };
