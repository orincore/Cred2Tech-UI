# Design System Specification: The Architectural Fintech Standard

## 1. Overview & Creative North Star: "The Digital Sovereign"
This design system rejects the "template" aesthetic in favor of **The Digital Sovereign**. In a world of cluttered fintech interfaces, our North Star is an experience that feels authoritative, surgically precise, and architecturally sound. 

We break the generic "SaaS" mold through **Intentional Asymmetry** and **Tonal Depth**. By utilizing a "No-Line" philosophy, we create a layout that feels grown, not assembled. We use high-contrast editorial typography (Manrope) for data storytelling, paired with a functional workhorse (Inter) for utility. The goal is to make the user feel like they are looking at a premium physical dashboard—think high-end automotive displays or swiss-made chronographs—rather than a webpage.

---

## 2. Color & Tonal Architecture
The palette is rooted in the "Deep Professional Navy" (`#0A2540`) to establish immediate institutional trust.

### 2.1 The "No-Line" Rule
**Designers are prohibited from using 1px solid borders for sectioning.** 
Structural separation is achieved through background color shifts.
*   **The Transition:** A `surface-container-low` section sitting on a `surface` background is the primary method of containment. 
*   **The Intent:** This creates a softer, more sophisticated flow that mimics the way light hits physical materials.

### 2.2 Surface Hierarchy & Nesting
Think of the UI as a series of stacked sheets of fine paper. 
*   **Base Layer:** `surface` (#f7fafc)
*   **Secondary Content:** `surface-container-low` (#f1f4f6)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff)
*   **System Overlays:** `surface-container-highest` (#e0e3e5)

### 2.3 The "Glass & Gradient" Rule
To inject "soul" into the data-driven experience:
*   **Floating Elements:** Use semi-transparent `surface` colors with a `backdrop-blur` of 12px–20px.
*   **Signature Textures:** Main Action buttons or Hero data points should utilize a subtle linear gradient: `primary` (#004bca) to `primary-container` (#0061ff) at a 135-degree angle.

---

## 3. Typography: Editorial Authority
We utilize a dual-font strategy to balance high-tech efficiency with data-driven trustworthiness.

*   **Display & Headlines (Manrope):** High-character, geometric, and authoritative. Use `display-lg` to `headline-sm` for large data points and section headers. 
    *   *Strategy:* Wide tracking (-1%) for headlines to feel "locked-in" and professional.
*   **Body & UI (Inter):** The ultimate tool for legibility. 
    *   *Strategy:* Use `body-md` for standard data rows and `label-sm` for micro-data. Inter's tall x-height ensures readability in complex financial tables.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for a "Modern Fintech" feel. We use **Tonal Layering**.

*   **The Layering Principle:** Instead of adding a shadow to a card, place a `surface-container-lowest` card on top of a `surface-container-low` background. The contrast in value creates a natural "lift."
*   **Ambient Shadows:** If an element must float (e.g., a Modal), use an extra-diffused shadow: `Y: 8px, Blur: 24px, Color: rgba(10, 37, 64, 0.06)`. Note the use of the Navy primary color in the shadow to keep it "branded."
*   **The Ghost Border:** For accessibility in forms, use `outline-variant` at **20% opacity**. Never use a 100% opaque border unless it is a focused state.

---

## 5. Components: Precision Primitives

### 5.1 Buttons
*   **Primary:** High-contrast `primary` background. Radius: `md` (6px). No border.
*   **Secondary:** `secondary-container` background with `on-secondary-container` text.
*   **States:** On hover, apply a `surface-tint` overlay at 8% opacity. On press, scale to 98% to provide tactile feedback.

### 5.2 Input Fields
*   **Style:** Background `surface-container-low`. No border in default state.
*   **Focus State:** A 2px `primary` "Ghost Border" (at 40% opacity) and a subtle `surface-bright` fill.
*   **Spacing:** Use `spacing-3` (12px) for internal padding to maintain a "tight" professional feel.

### 5.3 Data Cards & Lists
*   **Rule:** **Forbid dividers.** Use `spacing-4` (16px) or `spacing-6` (24px) of vertical white space to separate list items. 
*   **Alternating Rows:** For dense data tables, use a subtle shift between `surface` and `surface-container-low` instead of lines.

### 5.4 Fintech-Specific Components
*   **The "Trend Micro-Graph":** Small sparklines integrated into list items using `primary` for growth or `error` for decline. 
*   **The Trust Badge:** A specialized Chip using `tertiary-container` to highlight verified transactions or secure status.

---

## 6. Token Reference

### 6.1 Spacing (8px Grid)
*   `1`: 0.25rem (4px) - Micro adjustments
*   `2`: 0.5rem (8px) - Internal component padding
*   `4`: 1rem (16px) - Standard gutter
*   `8`: 2rem (32px) - Section breathing room

### 6.2 Roundedness (The "Curvy" Edge)
*   `md`: 0.375rem (6px) - **System Default** (Buttons, Inputs, Cards)
*   `lg`: 0.5rem (8px) - Large Containers/Modals
*   `full`: 9999px - Pills/Chips

---

## 7. Do’s and Don’ts

### Do:
*   **Do** use `primary-fixed-dim` for inactive but important states.
*   **Do** utilize `surface-bright` for the backgrounds of complex charts to ensure the data is the hero.
*   **Do** treat white space as a structural element. If a layout feels messy, increase the `spacing` scale rather than adding a border.

### Don’t:
*   **Don’t** use pure black (#000) for text. Always use `on-surface` (#181c1e) for a softer, more premium contrast.
*   **Don’t** use the `error` color for anything other than critical alerts. Financial anxiety is real; keep the interface calm.
*   **Don’t** use "Drop Shadows" on standard cards. Stick to Tonal Layering.