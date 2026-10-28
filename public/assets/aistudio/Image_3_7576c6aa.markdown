---
name: Clinical Clarity & Reassurance
colors:
  surface: '#f7f9ff'
  surface-dim: '#c9dcf2'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#d8eaff'
  surface-container-highest: '#d1e4fb'
  on-surface: '#091d2d'
  on-surface-variant: '#3e494a'
  inverse-surface: '#203243'
  inverse-on-surface: '#e8f2ff'
  outline: '#6e797b'
  outline-variant: '#bdc9ca'
  surface-tint: '#006874'
  primary: '#00646f'
  on-primary: '#ffffff'
  primary-container: '#087f8c'
  on-primary-container: '#effdff'
  inverse-primary: '#79d4e2'
  secondary: '#46617a'
  on-secondary: '#ffffff'
  secondary-container: '#c3e0fe'
  on-secondary-container: '#48637d'
  tertiary: '#505d5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#687675'
  on-tertiary-container: '#eefdfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#95f1ff'
  primary-fixed-dim: '#79d4e2'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f57'
  secondary-fixed: '#cde5ff'
  secondary-fixed-dim: '#adcae7'
  on-secondary-fixed: '#001d32'
  on-secondary-fixed-variant: '#2e4961'
  tertiary-fixed: '#d7e5e5'
  tertiary-fixed-dim: '#bbc9c9'
  on-tertiary-fixed: '#111e1e'
  on-tertiary-fixed-variant: '#3c4949'
  background: '#f7f9ff'
  on-background: '#091d2d'
  surface-variant: '#d1e4fb'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  title-md:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  code-instruction:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is engineered for public health literacy, school exhibition engagement, and rapid crisis response. It targets students, educators, and community members seeking immediate actionable protocols alongside educational deep dives. 

The aesthetic is grounded in **Corporate / Modern Medical Functionalism** combined with **Accessible Utility**:
- **Tone:** Authoritative yet calm, approachable, and urgent only when safety demands it.
- **Visual Rhythm:** Balanced whitespace, structured data containers, high typographic contrast, and elimination of decorative noise. Visual elements never obscure critical information.
- **Intentional Restraint:** Glassmorphism and ambient gradients are avoided in favor of crisp boundaries, light tinted surfaces, and legible content hierarchy that functions under high stress or low-light classroom environments.

## Colors

The palette establishes clinical authority and emotional calm while preserving strict WCAG AAA color contrast ratios across informative and emergency states.

- **Primary (`#087F8C`):** Used for interactive triggers, primary buttons, focal borders, active icons, and primary tabs.
- **High-Emphasis Navy (`#123047`):** Reserved for headline typography, section headers, card titles, and high-priority alerts.
- **Subtle Surface Highlight (`#E8F7F6`):** Applied to key callout backgrounds, pill badge fills, secondary button states, and active container fills.
- **Body Neutral (`#425466`):** Dedicated to continuous reading, secondary label metadata, and subtle border dividers.
- **Canvas Base (`#F7FAFC`):** The primary off-white viewport background, softening glare during extended viewing.
- **Pure Surface (`#FFFFFF`):** High-layer cards, modals, and input fields.
- **Emergency Vital (`#C62828`):** Reserved exclusively for high-stakes emergency triggers, triage warnings, contraindications, and urgent life-support instructions. Never used for marketing or general badges.
- **Validation Success (`#23845B`):** Applied to completed steps, verified symptoms, safe action indicators, and confirmed states.

## Typography

The typographic hierarchy couples **Manrope** for structured, human-centric headlines with **Inter** for neutral, utilitarian legibility in informational paragraphs and emergency directives.

- **Scale & Rhythm:** Uses a distinct base line-height of 1.4 to 1.6 to ensure that medical terms, clinical statistics, and step-by-step instructions remain scannable without line collisions.
- **Emergency Priority Overrides:** Any immediate action instruction (such as CPR compressions or stroke FAST protocol steps) renders in `title-md` or `headline-sm` with a weight of `700` in Dark Navy `#123047` or Emergency Red `#C62828`.
- **Labels & Badges:** `label-sm` utilizes slight uppercase styling and positive tracking (`0.03em`) for triage categories and protocol indicators.

## Elevation & Depth

This design system avoids heavy shadows, glowing neon drops, and high-blur glass surfaces. Instead, depth is communicated through **structural tonal layering** and **low-contrast outline separation**:

- **Ground Level (Level 0):** Background Canvas `#F7FAFC`. Default plane for the entire exhibition display.
- **Layer 1 (Card & Content Blocks):** Pure White `#FFFFFF` backed by a 1px solid border of `#E1E8ED` or Light Teal `#E8F7F6`. A micro-shadow provides crisp edge definition: `0 1px 3px rgba(18, 48, 71, 0.05)`.
- **Layer 2 (Interactive Floating & Hover):** Lifted interactive cards and dropdown popovers gain subtle ambient elevation: `0 4px 12px rgba(18, 48, 71, 0.08)` with the border transitioning to Primary Teal `#087F8C`.
- **Layer 3 (Modals & Emergency Drawers):** High-priority crisis panels use `0 12px 32px rgba(18, 48, 71, 0.16)` overlaying a scrim tint of `#123047` at 40% opacity.
- **Warning Depth:** Emergency callout cards replace standard borders with a bold 4px solid left border in `#C62828`.

## Shapes

The design system employs a **Rounded** (Level 2) shape specification to balance clinical precision with warm approachability for a school audience.

- **Standard Elements (`rounded`, 0.5rem / 8px):** Standard buttons, text input fields, selector chips, and inline tooltips.
- **Cards & Data Groups (`rounded-lg`, 1rem / 16px):** Educational modules, protocol instruction panels, symptom checkers, and step-by-step exhibition kiosks.
- **Large Modals & Containers (`rounded-xl`, 1.5rem / 24px):** Interactive simulation viewports and modal dialogs.
- **Pills / Status Chips:** Pill-radius (`9999px`) is strictly reserved for triage status badges, numerical step sequence markers, and search tags.

## Components

### Buttons
- **Primary:** Background `#087F8C`, text `#FFFFFF`, border none, 8px radius. Hover: `#066772`. Focus: 3px outline in `#E8F7F6` with `#087F8C` ring.
- **Secondary / Soft:** Background `#E8F7F6`, text `#087F8C`, border 1px solid `#087F8C`. Hover: `#D4EFEB`.
- **Emergency Vital:** Background `#C62828`, text `#FFFFFF`, border none, font weight 700. Hover: `#A82222`. Used only for 911/emergency dialers and fatal risk warnings.
- **Ghost:** Background transparent, text `#123047`, hover background `#E8F7F6`.

### Cards & Educational Modules
- **Information Card:** Base `#FFFFFF`, border 1px solid `#E1E8ED`, 16px radius, padding `space-lg`. Header in `#123047`, body in `#425466`.
- **Emergency Action Card:** Base `#FFFFFF`, 4px solid accent on the left border using `#C62828`, background tint on header of `#FFEBEE`.

### Badges & Chips
- **Status Pills:** Padding `4px 12px`, radius 9999px, typography `label-sm`.
  - *Educational/Standard:* Background `#E8F7F6`, text `#087F8C`.
  - *Safe/Preventative:* Background `#E8F5E9`, text `#23845B`.
  - *Emergency/Immediate:* Background `#FFEBEE`, text `#C62828`.
- **Interactive Filter Chips:** `#FFFFFF` fill with 1px solid `#E1E8ED`, shifting to `#087F8C` background and `#FFFFFF` text when selected.

### Inputs & Form Fields
- Surface `#FFFFFF`, border 1.5px solid `#D8E2EA`, radius 8px, padding `12px 16px`, text `#123047`, placeholder `#425466` (60% opacity). Focus: border `#087F8C` with a 2px `#E8F7F6` outer halo. Error state: border `#C62828`.

### Checklists & Radio Selectors
- Checkbox and radio outlines measure 20px x 20px with a 2px border in `#087F8C`.
- Checked state fills with `#087F8C` featuring a pure white checkmark or center pip.
- Hover state presents a 4px soft ripple halo in `#E8F7F6`.

### Step-by-Step Emergency Protocol Guides
- Ordered lists feature a 32px circular indicator filled with `#123047` (or `#C62828` for resuscitation guides) containing bold white numbering.
- Connected via a 2px dashed guide line in `#D8E2EA`.
- Action verbs are styled with `label-md` in `#123047` followed by concise instructional text in `body-sm`.