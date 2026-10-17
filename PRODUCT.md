# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Public :** destinataires ou expéditeurs qui attendent un colis PRO SAT, souvent sur mobile et parfois pressés. Ils utilisent leur numéro de suivi pour comprendre rapidement le statut, les détails, l’estimation ou la destination affichés, ainsi que l’historique. La réussite consiste à obtenir ces informations sans devoir contacter le support, en français, anglais, allemand ou néerlandais.
- **Admin :** opérateurs internes qui créent et mettent à jour les colis, les événements de parcours et les notifications. La réussite consiste à refléter correctement les changements dans le suivi public et les notifications prévues.

## Product Purpose

PRO SAT est un opérateur de livraison de colis sur un réseau international : prise en charge, tri, acheminement et livraison au destinataire. Chaque colis dispose d’un numéro de suivi de bout en bout. La plateforme permet au public de consulter son suivi et de recevoir des notifications transactionnelles par e-mail lors des changements de statut. Le succès produit signifie que les personnes comprennent l’avancement de leur colis et que les mises à jour internes se répercutent correctement dans les canaux destinés au public.

## Positioning

Le produit associe la gestion interne d’un colis, son historique de parcours, son suivi public et ses notifications transactionnelles multilingues. L’offre comprend des options standard et express selon la destination. Ne pas étendre le périmètre à la tarification, aux étiquettes transporteur ou à un TMS complet sans brief produit.

## Operating Context

Le public recherche un colis par son numéro de suivi. L’admin authentifié enregistre ou met à jour le colis, son statut, ses événements et la langue des notifications ; il peut gérer ou prévisualiser les e-mails de statut. L’assistance est annoncée 7 jours sur 7 à support@pro-sat.com, avec une réponse visée sous 24 heures ouvrées.

## Capabilities and Constraints

- Le suivi public et les contenus de l’application sont disponibles en français, anglais, néerlandais et allemand, avec des routes localisées.
- La source de vérité des colis réels est l’admin et sa base Prisma : numéro de suivi, e-mail destinataire, langue de notification, statut, destination, textes de statut, événements et journal des e-mails.
- Conserver la séparation entre le site public et l’admin authentifié.
- Des numéros de démonstration servent aux ventes et aux tests. Préserver la transparence indiquant que certaines données affichées peuvent être des données de démonstration.
- Conserver les pages légales existantes : CGU, confidentialité, cookies, livraison, délais, emballage, FAQ, réclamations, contact et carrières.
- Stack existante : Next.js App Router, React, Tailwind, Prisma et PostgreSQL.

## Brand Commitments

Conserver le nom PRO SAT et l’identité PRO + SAT, dont le logo satellite. Les quatre langues produit sont des engagements à préserver. Ne pas contredire les engagements métier de livraison et de communication sans accord.

## Evidence on Hand

- Logo PRO SAT, contenus multilingues et textes légaux dans le dépôt.
- E-mails transactionnels associés aux statuts.
- Chiffres approuvés pour la communication publique : plus de 120 plateformes logistiques, plus de 190 destinations, 2,4 millions de colis livrés en 2025, 98,2 % de livraisons réussies et 4,6/5 de satisfaction client. Ne pas remplacer ni inventer ces chiffres sans demande explicite.
- Les textes métier présentent PRO SAT comme un réseau de transport et de distribution ; cette description est validée par le métier.

## Product Principles

- Faire comprendre rapidement le statut et le parcours d’un colis.
- Garder le suivi public, les événements et les notifications cohérents avec le dossier colis interne.
- Préserver l’expérience multilingue sur les parcours concernés.
- Ne pas présenter les données de démonstration comme des données réelles.
- Ne pas ajouter de fonctionnalités de transport hors périmètre sans validation produit.

## Accessibility & Inclusion

Préserver les libellés accessibles des champs de suivi, le focus visible et la prise en charge de `prefers-reduced-motion`. Le parcours doit rester utilisable au clavier et lisible sur mobile. Aucun audit WCAG formel n’est actuellement exigé.
