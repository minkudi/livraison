---
target: page d'accueil
total_score: 20
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
p2_count: 2
target_identity: "file:C:\\Users\\HP\\Documents\\parcel-hub\\src\\app\\[locale]\\page.tsx"
target_fingerprint: "sha256:2210208fc28c072a612962a6849d7f2ed0b2b8a03ee22e2947cfb44e0794c633"
target_path: "C:\\Users\\HP\\Documents\\parcel-hub\\src\\app\\[locale]\\page.tsx"
timestamp: 2026-10-15T12-43-49Z
slug: src-app-locale-page-tsx
closed: true
---
Method: dual-agent (A: b7c434d6-c8f1-4111-9815-fd470ca1d7f7 · B: 4ef68dcd-6e2f-4228-867c-cef0984180d4)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | A valid number opens a blocking scene that never shows status, estimate, or destination. Spaces-only submit does nothing. |
| 2 | Match System / Real World | 3 | French is plain. “Notre réseau” opens “Le parcours de votre colis”. The logo is announced “PRO SAT — Home”. |
| 3 | User Control and Freedom | 2 | The checking dialog has no Cancel and holds the page. |
| 4 | Consistency and Standards | 3 | Four controls mean “follow a parcel”; only the gold button uses the typed number. |
| 5 | Error Prevention | 2 | No example or format. Whitespace passes HTML required, then disappears. |
| 6 | Recognition Rather Than Recall | 3 | The hint stays visible, but the placeholder is 1.9:1 and vanishes while typing. |
| 7 | Flexibility and Efficiency | n/a | One-search landing. Expert accelerators belong on an operate surface. |
| 8 | Aesthetic and Minimalist Design | 2 | First screen is focused. Six equal service rows and a second tracking band repeat the pitch. |
| 9 | Error Recovery | 1 | Spaces in the field produce no message and no recovery. |
| 10 | Help and Documentation | 2 | The email hint is the only help at the field. FAQ is in the footer. |
| **Total** | | **20/36** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** Interchangeable courier page with a PRO SAT sticker. Navy, gold, Plus Jakarta Sans, and the satellite mark are the only things that would not survive a logo swap. The skeleton is the category default: headline, white search card, four stats, six icon rows, four numbered steps, a repeated close, a four-column footer. The page never shows the thing the visitor came for: status, estimate, destination, and history.

**Deterministic scan:** CLI `detect` on the home components and `src/app/[locale]/page.tsx` exited 0 with `[]`. The live injection is where the detector spoke. It agrees with the review on contrast: white on gold at 2.6:1 for “Rechercher mon colis” and “Accéder au suivi”, placeholder “Numéro de suivi” at 1.9:1, denim `#5b7c9a` on white and mist at 4.1–4.4:1 across the logo “PRO”, the locale “EN”, the stat labels, the service subtitle, and the six service blurbs. It also flagged six 48px icon tiles above the service headings, which the review had treated as a brochure problem and the detector names as a repeated tile. The overused-font hit (Plus Jakarta Sans on essentially all text) is a false positive against this brief: DESIGN.md pins that face. The four text-occlusion hits are the detector’s own “LOW CONTRAST TEXT” labels, not page content.

**Visual overlays:** Injection of `detect.js` succeeded on a fresh tab of `http://localhost:3000/fr`. Eighteen low-contrast labels and the font note were in the DOM. The tab could not be named [Human]. The live server on port 8400 was then stopped, so those overlays are not a standing layer on the page you are using.

## Overall Impression

The search is in the first screen, and the French is clear. The page still behaves like a carrier brochure: it asks for a number, then answers with a van cartoon and six services. The single biggest opportunity is to make a successful search show the parcel, and a bad one say what went wrong.

## What's Working

- “Rechercher mon colis” is a real form in the first viewport, with the sentence that the number is in the shipping email.
- The approved figures (2.4M, 98.2%, 190+, 4.6/5) stay as given and reflow to a 2×2 grid on a phone.
- FR, EN, NL, and DE stay visible, and the headline scale makes the offer readable before the rest of the page.

## Priority Issues

### [P1] A search ends in a cartoon, and a blank-looking field can fail in silence
**Why it matters:** The visitor is here for status, estimate, destination, and history. `ER999000111222FR` covers the page with “Connexion au réseau logistique…” and no way out. Spaces stay on `/fr` with no message.
**Fix:** Keep the number in the status line, replace the van scene with one calm line and a Cancel, and show “Veuillez saisir un numéro de suivi.” beside the field when the value is only whitespace.
**Suggested command:** /impeccable clarify

### [P1] The gold actions are not readable
**Why it matters:** White on `#c8973e` is 2.6:1. That is the label of the primary action on desktop and on a phone. The detector and the review measured the same pair.
**Fix:** Set those labels in navy `#0b1a33` on the gold fill. Keep white text on the navy header button.
**Suggested command:** /impeccable colorize

### [P1] “Notre réseau” opens the wrong section, and on a phone the title is under the bar
**Why it matters:** The link goes to `#reseau`, whose heading is “Le parcours de votre colis”. At 390px the sticky header covers that heading, so the section starts on “1 Prise en charge”.
**Fix:** Name the link “Parcours”, or make the section show the network. Give `#reseau` and `#services` enough scroll-margin to clear the sticky header.
**Suggested command:** /impeccable layout

### [P2] Below the stats, the page is a generic carrier brochure
**Why it matters:** Six equal rows (parcel, arrow, truck, shield, envelope, globe) and a second “Vous avez un colis à suivre ?” band never prove a tracking result. The detector marked those six as icon tiles.
**Fix:** Replace the six-row list with one specimen of status, estimate, destination, and history. Keep the approved numbers as the only performance claims.
**Suggested command:** /impeccable distill

### [P2] The phone header is a cluster of small targets, and two sections have no menu
**Why it matters:** At 390px, Accueil, Services, and Notre réseau disappear. The four language chips are about 28px tall. “Suivi” sits in the top corner, out of the thumb zone.
**Fix:** One language control and one menu, each target at least 44px. Hide the top bar under 640px.
**Suggested command:** /impeccable adapt

## Persona Red Flags

**Jordan (first-timer):** The first action is clear, then the cues fray. The visible prompt “Numéro de suivi” is 1.9:1, the real label is screen-reader only, and nothing shows what an international number looks like. “Notre réseau” does not name the section it opens. Both logo links are “PRO SAT — Home”. After a real submit, the dialog never says the number was accepted.

**Casey (distracted mobile):** The gold button is full width and in the lower half, so the main tap is reachable. The header is not: four small language chips and a short “Suivi” at the top, and no way to open Services or Notre réseau except by scrolling. The checking dialog has no Cancel if a call interrupts it.

**Riley (edge cases):** Spaces in the field, then submit: the URL stays `/fr`, no alert, the field looks blank. Header “Suivi” and “Accéder au suivi” ignore the number already typed. The in-page anchor is covered by the sticky bar.

## Minor Observations

- “Opérationnel 24/7” and “Réseau mondial” sit under the card and are not part of the approved proof set.
- The top bar states “+120 plateformes logistiques” and “Livraison standard ou express”. Those lines are in the product copy, but they read as a 12px whisper, with the gold phrase loudest.
- “4.6/5” has no source or sample size on the page. The other three stats at least have a year or a unit.
- The gold hairline between step numbers disappears on a phone, so the path becomes a plain stack.
- Focus-visible is a gold outline. The selected locale is a white chip, not `aria-current`. Accueil is never marked current.
- Denim body text sits just under 4.5:1. That token is the system’s supporting color; the failure is real even though the palette is pinned.

## Questions to Consider

- If someone on a phone only needs status, estimate, destination, and history, why does the homepage answer with a van cartoon and six service rows?
- What would this page be if the satellite mark organized the layout, instead of sitting as a 40px badge on a courier template?
- Why are there four ways to follow a parcel when only “Rechercher mon colis” accepts the number?
