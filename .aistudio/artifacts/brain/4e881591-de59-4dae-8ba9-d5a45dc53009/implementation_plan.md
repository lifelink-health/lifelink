# Clinical Clarity & Reassurance — Interactive Emergency Protocols & School Health Exhibition Kiosk

A responsive public health literacy and rapid crisis response web kiosk designed for schools, exhibition centers, and community spaces. It provides immediate, high-visibility emergency protocol execution (CPR audio-visual metronome, FAST stroke triage, choking, bleeding control) alongside interactive health literacy modules adhering to the Clinical Clarity & Reassurance design specification.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural decisions were confirmed via interactive clarification:
> - **Primary Application Focus**: Interactive Emergency Protocols & School Health Exhibition Kiosk, balancing rapid life-saving crisis guidance with public health education modules.
> - **Core Clinical Simulation**: All emergency protocols switchable via quick-access tabs with real-time interactive trainers (CPR 100–120 BPM audio-visual rhythm metronome + depth guide, FAST stroke assessment interactive checklist, choking universal sign protocol, and bleeding control tourniquet/pressure guide).
> - **Crisis Access Pattern**: An instant high-visibility "Emergency Mode" header toggle and floating quick-dialer for immediate crisis protocol override across all device breakpoints.
> - **Visual & Component System**: Strict implementation of the "Clinical Clarity & Reassurance" design system (`#087F8C` primary, `#123047` high-emphasis navy, `#E8F7F6` subtle highlight, `#C62828` emergency vital, `#23845B` validation success, Manrope & Inter typography, 32px numbered step sequences with dashed guides, and WCAG AAA clinical contrast).

---

## 1. Overview & Core Concept

- **What It Does**: A dual-purpose clinical kiosk and educational web platform. In standard mode, it serves as an engaging school exhibition kiosk where students and visitors explore human vitals, first-aid principles, interactive symptom checkers, and health literacy guides. In Emergency Mode (or via direct protocol selection), it transforms into a distraction-free, high-contrast crisis companion offering step-by-step timed emergency directives (CPR chest compressions with audible metronome, FAST stroke timing, adult/pediatric choking maneuvers, severe hemorrhage control, and one-tap 911 / emergency dispatch prompts).
- **Target Audience / Persona**:
  - *School Students & Educators*: Exploring interactive health science exhibits, first-aid workshops, and emergency preparedness.
  - *First Responders / Bystanders*: Seeking instantaneous, authoritative, zero-lag step-by-step guidance during real-life acute emergencies.
  - *Community Health Visitors*: Checking common symptoms, triage advice, and preventative care checklists.
- **Key Value**: Delivers life-saving clarity under stress with zero cognitive overload, zero dead buttons, and full responsive usability across phones, tablets, and exhibition touch displays.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Crisis Emergency Flow (Instant Override)**:
   - Bystander taps high-contrast Emergency Mode toggle in the top bar or selects a vital emergency card (e.g., CPR / Cardiac Arrest).
   - Interface transitions instantly to the Crisis Action Deck: clean full-screen emergency drawer with bold 32px numbered circular steps, 4px emergency crimson accent border, and clear action verbs.
   - For CPR: user taps "Start Metronome (110 BPM)" with a pulsating visual compression guide, audio clicks via Web Audio API, compression counter, and 30:2 breath prompt cycle.
   - Direct emergency dispatch confirmation bar with local 911/112 dial link and address locator copy.

2. **Exhibition Exploration Flow (School Health Kiosk)**:
   - Visitors browse categorized exhibition modules: **Emergency Triage**, **Vital Signs Lab**, **Stroke & Neuro Response (FAST)**, and **First-Aid Practical Skills**.
   - Interactive filtering allows toggling between All, Cardiovascular, Respiratory, Trauma, and School Safety.
   - Each module opens a two-zone interactive sandbox: visual anatomical/process diagram on the left/top, interactive parameter controls and self-test checkpoints on the right.

3. **Interactive FAST Stroke & Triage Assessment**:
   - Step-by-step assessment checks: Face drooping test, Arm weakness check, Speech difficulty verification, and Time recording.
   - Real-time tally calculates stroke likelihood score with immediate clinical guidance and safe triage indicators.

4. **Public Health Knowledge & Quiz Challenge**:
   - Interactive 4-question crisis preparedness challenge allowing students to test their first-aid knowledge with immediate corrective explanations.

### Visual Identity & Theme

- **Aesthetic Direction**: Corporate / Modern Medical Functionalism with Accessible Utility. Crisp boundary lines, clinical off-white canvas, structured data containers, high typographic contrast, and zero AI-slop decorative fluff.
- **Color Palette**:
  - `Canvas Base`: `#F7FAFC` (soft anti-glare viewport background)
  - `Primary Interactive`: `#087F8C` (interactive triggers, active tabs, focus halos)
  - `High-Emphasis Navy`: `#123047` (headlines, section titles, primary numbered steps)
  - `Subtle Surface Highlight`: `#E8F7F6` (callout cards, active tab pills, soft states)
  - `Pure Surface`: `#FFFFFF` (content cards, interactive modals, input surfaces)
  - `Emergency Vital`: `#C62828` (life-support instructions, crisis border accents, dialer CTA)
  - `Validation Success`: `#23845B` (completed steps, safe status indicators)
  - `Body Neutral`: `#425466` (reading paragraphs, secondary metadata)
  - `Outline Dividers`: `#E1E8ED` and `#D8E2EA`
- **Typography**:
  - Display & Headlines: **Manrope** (`font-extrabold` 36px–56px for heroes, `font-bold` 24px–36px for section headers)
  - Body & Emergency Directives: **Inter** (`font-normal` 15px–16px, 1.5–1.6 line height; `font-bold` for emergency directives)
  - Tabular & Timers: `tabular-nums font-mono` for CPR beats per minute and timers.
- **Top Bar Contract**:
  - Zone 1 (Brand): Single wordmark element `Vitalis Health Exhibition`
  - Zone 2 (Nav Links): 4 clean single-line links (`Protocols`, `FAST Triage`, `Vital Signs`, `School Quiz`)
  - Zone 3 (Action): High-contrast `EMERGENCY MODE` toggle button with red/teal visual feedback.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Web Audio API Metronome for CPR**:
  - *Chosen Approach*: Synthesize crisp 110 BPM rhythmic audio clicks directly using the browser's native `AudioContext` with visual compression pulses.
  - *Why*: Guarantees zero latency, zero network dependency during crisis scenarios, and works reliably offline.
  - *Alternatives Considered*: External MP3 audio files (vulnerable to loading delays and network failures).
- **Decision 2: Unified Responsive Kiosk Navigation**:
  - *Chosen Approach*: Single-page responsive tabs with modal emergency override drawer rather than multi-page navigation.
  - *Why*: Allows instantaneous switching during stress without page reloads or broken state, preserving touch kiosk responsiveness on phones, tablets, and large screens.
- **Decision 3: Zero-Pill Metadata & Anti-Slop Discipline**:
  - *Chosen Approach*: Adhere strictly to the design system and frontend constitution: unboxed text metadata with `·` separators, functional segmented control buttons for tabs, no fake telemetry tickers or arbitrary scoreboards.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                   Top Navigation Bar (3-Zone Contract)                 │
│  [Vitalis Health Kiosk] ── [Protocols · FAST · Vitals · Quiz] ── [CRISIS]
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           │                                                   │
┌──────────▼──────────────────────────┐    ┌───────────────────▼──────────────────┐
│       Standard Exhibition Mode      │    │        Emergency Crisis Mode         │
│  - Hero Overview & Quick Protocol   │    │  - Full-screen high-contrast drawer  │
│  - Interactive Protocol Tabs        │    │  - Instant 911 dispatch bar          │
│    * CPR Audio-Visual Metronome     │    │  - Big 32px numbered step sequence   │
│    * FAST Stroke Diagnostic         │    │  - CPR 110 BPM Metronome             │
│    * Severe Bleeding & Tourniquet   │    │  - Choking Heimlich Protocol         │
│    * Airway & Anaphylaxis Epipen    │    │  - Red 4px clinical vital borders    │
│  - Vital Signs Range Explorer       │    └──────────────────────────────────────┘
│  - Interactive First-Aid Quiz       │
└─────────────────────────────────────┘
```

### Component Hierarchy & State Store

- **`App.tsx`**: Central application shell managing active mode (`standard` vs `emergency`), active protocol tab, active triage state, and audio metronome state.
- **`Header.tsx`**: Strict 3-zone header with brand title, nav links, and emergency switch.
- **`EmergencyDrawer.tsx`**: High-priority modal drawer with instant 911 dialing, audible audio clicks, step-by-step resuscitation and choking guides.
- **`CPRMetronome.tsx`**: Audio-visual rhythm trainer (100–120 BPM slider, audio tick generator, depth guidance, 30:2 compression/breath counter).
- **`StrokeAssessment.tsx`**: Interactive FAST protocol checker with visual tests and symptom checklist.
- **`ProtocolGuide.tsx`**: Step-by-step emergency card rendering with 32px circular numbered badges and dashed guide connectors.
- **`VitalSignsExplorer.tsx`**: Interactive clinical slider sandbox for heart rate, blood pressure, oxygen saturation, and respiratory rate with normal vs alert ranges.
- **`ExhibitionQuiz.tsx`**: 4-question interactive public health quiz with instant feedback.
- **`Footer.tsx`**: Quiet educational attribution and public health emergency contacts.

---
