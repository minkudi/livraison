---
name: PRO SAT
description: A clear, connected visual system for parcel tracking and delivery operations.
colors:
  navy: "#0b1a33"
  navy-2: "#132744"
  navy-3: "#1b3558"
  gold: "#c8973e"
  gold-lt: "#e0b866"
  white: "#ffffff"
  g50: "#f8fafc"
  g100: "#f1f5f9"
  g200: "#e2e8f0"
  g300: "#cbd5e1"
  g400: "#94a3b8"
  denim: "#5b7c9a"
  heading: "#2e4a66"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.05em"
  action:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "16px"
spacing:
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-track:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.heading}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "24px"
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.denim}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
---

# Design System: PRO SAT

## Overview

**Creative North Star: "The Connected Route"**

PRO SAT’s visual system connects a public tracking experience with the operational tools behind each shipment. Deep navy creates a steady, recognizable frame; gold marks emphasis and moments of action; cool blue-grays keep shipment information calm and easy to scan. The satellite identity gives the logistics brand a specific mark without turning the interface into transport-themed decoration.

Typography and components are direct and practical rather than ornamental. Public pages use generous, centered content widths and a prominent tracking search; admin screens bring the same color and type vocabulary to denser forms and tables. Both remain responsive, with compact mobile navigation and content that reflows rather than shrinking into desktop layouts.

**Key Characteristics:**
- A deep navy foundation with restrained gold emphasis.
- Clear, high-weight headings paired with readable, compact supporting text.
- White cards and cool gray-blue borders that organize shipment details.
- Rounded, touch-friendly controls within a spacious responsive grid.

## Colors

The palette pairs a recognizable navy route with a warm gold signal, supported by cool blue-gray surfaces and text.

### Primary
- **Satellite Navy** (`navy`): The principal brand field, hero background, and primary action color.
- **Deep Route Navy** (`navy-2`): A secondary dark surface for supporting sections and deeper states.
- **Dockside Navy** (`navy-3`): The deepest supporting navy for layered brand treatments.

**The Navy-First Route Rule.** Keep navy as the stable anchor for primary navigation and key actions; use gold to distinguish emphasis rather than replacing the anchor.

### Secondary
- **Route Gold** (`gold`): The accent for key highlights and the tracking action in the hero.
- **Signal Gold** (`gold-lt`): A lighter emphasis used against dark navy surfaces.

### Neutral
- **Clear White** (`white`): The main card and control surface.
- **Cool Mist** (`g50`): The default page canvas.
- **Pale Slate** (`g100`): Subtle grouping and hover backgrounds.
- **Route Divider** (`g200`): The standard quiet border between content regions.
- **Soft Slate** (`g300`): A stronger border and hover edge.
- **Blue Haze** (`g400`): Secondary labels and low-priority metadata.
- **Denim Text** (`denim`): Supporting copy and navigation text.
- **Heading Blue** (`heading`): Strong content headings and input text.

## Typography

**Display Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)  
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)  
**Label/Mono Font:** Plus Jakarta Sans for labels; a system monospace stack for tracking numbers.

**Character:** Geometric, confident headings give the service a clear voice; compact supporting text keeps status details and operational forms quick to scan.

### Hierarchy
- **Display** (800, 2.75rem at large screens, tight leading): The main public hero heading, reduced at narrower widths.
- **Headline** (800, 1.875rem, tight leading): Page and section headings, with tracking pages scaling up on wider screens.
- **Title** (700, 1.25rem): Card and supporting section titles.
- **Body** (400, 1rem): Explanatory copy; smaller 0.875rem text is common for compact details.
- **Label** (700, 0.75rem, lightly tracked, often uppercase): Form labels, metadata captions, and status context.

**The Legible Label Rule.** Keep labels compact and clearly subordinate to their values; use weight and restrained tracking for hierarchy, not display-sized uppercase text.

## Layout

Public and admin content typically sits in a centered container capped at 72rem, with 1rem horizontal padding on small screens and 2rem from the small breakpoint upward. The public site uses a loose vertical rhythm and switches feature sections to two columns at the large breakpoint; statistic and detail grids also reflow for narrow screens. The header remains sticky, keeps the full navigation at medium widths and above, and reduces to a compact tracking action on mobile. Admin forms use a denser two-column grid where space allows.

## Elevation & Depth

The interface is mostly border- and tone-led: cards sit on cool neutral canvases, with quiet borders doing most of the structural work. Shadows are selective rather than ambient—stronger under the hero search card, subtle on tracking cards and selected controls, and occasional on hover to signal lift.

### Shadow Vocabulary
- **Hero search lift** (`0 25px 60px rgba(0,0,0,0.22)`): Separates the tracking card from the dark hero field.
- **Quiet card lift** (`0 1px 2px rgba(0,0,0,0.05)`, Tailwind `shadow-sm`): Adds a restrained edge to status cards and selected controls.

**The Purposeful Lift Rule.** Reserve stronger elevation for the hero search card; use borders and surface contrast for ordinary content.

## Shapes

Controls and cards use softly rounded corners, with radius increasing slightly for larger surfaces: navigation links at 8px, tracking fields at 10px, common buttons and admin forms at 12px, and feature/status cards at 16px. Borders are thin and cool-toned; the tracking input uses a more pronounced 2px outline to make the primary public task easy to locate. Pills are reserved for compact badges and status-like labels.

## Components

### Buttons
- **Shape:** Softly rounded (8–12px), adjusted to the surrounding control.
- **Primary:** Navy with white text for navigation and admin actions; the hero tracking action uses gold. Common admin actions use 12px vertical and 24px horizontal padding.
- **Hover / Focus:** Public navigation links shift to a pale surface; primary actions deepen their navy or brighten their gold. Preserve a visible keyboard focus treatment.
- **Disabled:** Admin form actions reduce opacity while saving.

### Chips
- **Style:** Compact pill-shaped labels with a softly tinted background; hero badges sit on a translucent light surface.
- **State:** Gold and green dots distinguish the two hero badges; use status colors only where their meaning is explicit.

### Cards / Containers
- **Corner Style:** Rounded 12px for service cards and 16px for hero and tracking-status cards.
- **Background:** White on the cool page canvas, or navy for brand sections.
- **Shadow Strategy:** Follow Elevation & Depth; prefer quiet borders and reserve the pronounced shadow for the hero search.
- **Border:** Cool gray-blue, with stronger or status-specific edges only when the component calls for them.
- **Internal Padding:** Common card padding is 24px, increasing to 28–36px for the hero search card.

### Inputs / Fields
- **Style:** White surface, cool border, 10px corners, and generous 14px vertical padding in the public tracking search.
- **Focus:** The public search strengthens its border and adds a subtle focus ring; keep keyboard focus apparent in admin forms too.
- **Error / Disabled:** Errors use a clear red text treatment; disabled actions lower opacity.

### Navigation
- The public header pairs the brand mark with compact, medium-weight text links. Desktop navigation appears from the medium breakpoint; on smaller screens the locale switcher and a short tracking action remain available. The sticky header uses a white surface and a quiet bottom border.

### Tracking Search
- A prominent, horizontally paired input and action on larger screens; it stacks on narrow layouts. It is the primary public task and appears both as a floating white card in the dark hero and in a simpler tracking-page container.

## Do's and Don'ts

### Do:
- **Do** use the established navy, gold, and cool blue-gray palette as the shared thread between public pages and admin tools.
- **Do** keep tracking actions, shipment status, and metadata visually distinct through hierarchy, spacing, and restrained color.
- **Do** let content grids and search controls reflow at the existing responsive breakpoints.
- **Do** preserve the PRO SAT satellite mark as the brand identifier.
- **Do** respect reduced-motion preferences for animated page, tracking, and timeline states.

### Don't:
- **Don't** replace the established satellite brand mark with a generic parcel or truck logo.
- **Don't** use the hero’s strongest shadow as the default treatment for every card.
- **Don't** make gold the dominant page background or the default surface for unrelated content.
- **Don't** hide the mobile tracking action when collapsing desktop navigation.
