<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# 🚀 Project Rules & Development Guidelines

## 1. Core Principles

- Build everything using **modular, reusable components**
- Follow a **clean, scalable architecture**
- Maintain **strict consistency in design and code**
- Avoid hardcoding values (especially colors, spacing, typography)

---

## 2. Component Architecture

### ✅ Rules

- Every UI element must be a **component**
- Components should be:
  - Reusable
  - Isolated
  - Single-responsibility

### 📁 Structure
/components
/ui → buttons, inputs, cards, badges
/layout → navbar, footer, wrappers
/sections → hero, features, etc
/shared → reusable logic-based components

### ❌ Avoid

- Large monolithic components
- Duplicate UI logic
- Inline JSX clutter

---

## 3. Theming System (STRICT)

### 🔴 Mandatory Rule

> **ALL colors MUST come from `theme.ts`**
> No hardcoded color values are allowed anywhere in the project.

---

### ✅ How to Use

```ts
import { theme } from "@/theme"

style={{ backgroundColor: theme.colors.primary }}
<!-- END:nextjs-agent-rules -->
