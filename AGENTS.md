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

````md
# Windsurf IDE Rules

## Project Goal

This project uses an existing `Reference Frontend` directory provided by the backend team as the implementation reference. The objective is to rebuild and integrate those pages into the actual application while replacing all mock/demo APIs with real production APIs.

Windsurf IDE must strictly follow all rules defined below while generating, modifying, or refactoring code.

---

# Reference Frontend Rules

## Reference Frontend is the Source of Truth

Always use the `Reference Frontend` directory as the primary implementation reference.

Before implementing any page or feature, analyze:

- UI structure
- Layout hierarchy
- Components
- Routing
- State management
- API calls
- Request/response flow
- Form validation
- Animations
- Responsive behavior
- Error handling
- Loading states
- User flow

Do not redesign pages unless explicitly instructed.

Maintain:
- same layout structure
- same interaction flow
- same feature behavior
- same animation feel
- same responsiveness

while adapting the implementation to the actual application architecture.

---

# API Integration Rules

## Replace Reference APIs With Actual APIs

Reference frontend may contain:
- mock APIs
- static JSON
- fake endpoints
- hardcoded responses

All of these must be replaced with actual production APIs.

Never leave mock data in production code.

---

## API Structure

All API logic must be modularized.

Required structure:

```txt
src/
 ├── api/
 │    ├── auth/
 │    ├── dashboard/
 │    ├── users/
 │    ├── payments/
 │    ├── settings/
 │    └── common/
````

Rules:

* No direct API calls inside pages
* No direct API calls inside UI components
* No inline fetch/axios logic
* All API calls must go through service modules

---

## Centralized API Client

Create and use a centralized API client.

Example:

```txt
src/lib/api-client.ts
```

Responsibilities:

* base URL management
* auth token injection
* refresh token handling
* interceptors
* error handling
* timeout handling
* request transformation
* response transformation

---

## Environment Variables

Never hardcode:

* API URLs
* keys
* secrets
* tokens
* environment configs

Use environment variables only.

Example:

```env
VITE_API_BASE_URL=
NEXT_PUBLIC_API_BASE_URL=
```

---

# Frontend Architecture Rules

## Modular Component Architecture

All UI must be component-based.

Required structure:

```txt
src/
 ├── components/
 │    ├── ui/
 │    ├── forms/
 │    ├── cards/
 │    ├── modals/
 │    ├── tables/
 │    ├── charts/
 │    ├── layouts/
 │    └── sections/
```

Rules:

* Reuse components wherever possible
* Avoid duplicate UI code
* Split large components into reusable modules
* Keep components scalable and maintainable

---

## Page Structure

Pages must remain clean and modular.

Allowed responsibilities:

* page composition
* API hooks usage
* layout assembly
* feature orchestration

Avoid:

* large business logic inside pages
* duplicate logic
* giant files

---

# Theme & Styling Rules

## Theme System is Mandatory

Always use centralized theme configuration.

Required file:

```txt
src/theme/theme.ts
```

OR

```txt
src/styles/theme.ts
```

---

## Never Hardcode Colors

Forbidden:

```tsx
className="bg-blue-500"
style={{ color: "#ffffff" }}
```

Required:

```tsx
theme.colors.primary
theme.colors.background
theme.colors.text
```

If any new color is required:

1. Add it inside `theme.ts`
2. Use semantic naming
3. Then consume it throughout components

---

## Design Consistency

Maintain consistency for:

* typography
* spacing
* shadows
* border radius
* animations
* hover states
* transitions
* card styles
* responsive spacing

Use design tokens whenever possible.

---

# Animation Rules

## Animation Standards

Animations must be:

* smooth
* production-grade
* GPU optimized
* non-laggy
* non-jittery

Preferred libraries:

* Framer Motion
* GSAP only if absolutely necessary

Avoid:

* flickering
* layout shifts
* blocking animations
* stuttering motion

---

## Page Transitions

All transitions must:

* preserve scroll behavior
* avoid hydration mismatch
* feel natural
* remain responsive

---

# State Management Rules

## Preferred State Management Order

1. React Query / TanStack Query
2. Zustand
3. Context API

Rules:

* Server state must use React Query
* Avoid unnecessary prop drilling
* Cache responses properly
* Use optimistic updates where useful

---

# TypeScript Rules

## Strict Type Safety

TypeScript strict mode must always remain enabled.

Rules:

* Avoid `any`
* Define interfaces/types for:

  * API responses
  * props
  * forms
  * state models
  * reusable entities

---

## Shared Types Structure

Required structure:

```txt
src/types/
```

Organize by feature/domain.

---

# Form Rules

## Form Handling Standards

Preferred stack:

* React Hook Form
* Zod validation

Requirements:

* Validate all inputs
* Show proper error messages
* Handle backend validation errors
* Prevent invalid submissions

---

# Performance Rules

## Mandatory Optimizations

Implement:

* lazy loading
* code splitting
* dynamic imports
* memoization where useful
* image optimization
* virtualization for large lists

---

## Avoid Unnecessary Re-renders

Use:

* memo
* useMemo
* useCallback

only when beneficial.

Do not over-optimize unnecessarily.

---

# Error Handling Rules

## Global Error Handling

Must include:

* loading states
* empty states
* API error handling
* fallback UI
* retry handling
* toast notifications

---

## Console Rules

Forbidden in production:

```js
console.log
console.warn
console.error
```

Remove all debug logs before final implementation.

---

# Authentication Rules

## Authentication Standards

Must support:

* access tokens
* refresh tokens
* protected routes
* session persistence
* secure logout cleanup

Never expose sensitive information on frontend.

---

# Code Quality Rules

## Clean Code Standards

Code must be:

* readable
* scalable
* modular
* maintainable
* production-ready

Avoid:

* giant files
* deeply nested logic
* duplicated code
* inline business logic

---

## Naming Conventions

Use clear naming.

Good examples:

```txt
UserProfileCard.tsx
dashboard.service.ts
useAuthStore.ts
```

Avoid vague names:

```txt
temp.ts
helper.ts
data.ts
newfile.tsx
```

---

# File Size Rules

Recommended limits:

* Components under 300 lines
* Hooks under 200 lines
* Services modularized logically

Split large files when needed.

---

# Responsive Design Rules

## Mobile First Development

All pages must support:

* mobile
* tablet
* desktop
* ultrawide screens

Maintain responsive behavior from the reference frontend.

---

# Security Rules

## Frontend Security Standards

Never:

* expose secrets
* trust frontend validation alone
* store sensitive data insecurely

Sanitize:

* inputs
* query params
* rendered HTML

---

# Refactoring Rules

Before refactoring:

* understand reference implementation fully
* preserve functionality
* preserve API behavior
* avoid regressions

Refactor only to improve:

* scalability
* maintainability
* readability
* performance

---

# Final Validation Checklist

Before completing any feature verify:

* UI matches reference frontend
* Real APIs are integrated
* No mock data remains
* Theme system is used
* Components are modular
* Responsive behavior works
* Animations are smooth
* Loading states exist
* Error handling exists
* Types are accurate
* No console logs remain
* No unused imports/files remain

---

# Absolute Restrictions

NEVER:

* hardcode APIs
* hardcode colors
* directly call APIs inside components
* duplicate business logic
* bypass theme system
* create giant monolithic components
* ignore reference frontend behavior
* leave mock data in production
* excessively use `any`
* commit debug code

---

# Engineering Standard

The final application must feel:

* enterprise-grade
* scalable
* highly polished
* production-ready
* smooth
* maintainable
* visually modern
* architecturally clean

All generated code must strictly follow these rules.

```
```

<!-- END:nextjs-agent-rules -->
