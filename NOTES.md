# Next.js Notes

## 1. What is Next.js?

- Next.js is a React framework used to build full-stack web applications.
- React provides tools for building user interfaces. Next.js builds on React and provides additional features for building complete applications.
- A React framework for building web applications.
- Supports Server Components, Client Components, routing, and server-side functionality.

### Why use Next.js?

- **File-based routing:** Create routes using folders and files.
- **Server Components:** Render components on the server by default in the App Router.
- **Client Components:** Build interactive UI using state, effects, and browser APIs.
- **Rendering strategies:** Support server rendering, static generation, and client-side rendering.
- **Metadata:** Configure page titles, descriptions, and other metadata.
- **Font optimization:** Load and self-host fonts using `next/font`.
- **Backend capabilities:** Build API endpoints and server-side functionality.

**Remember:** Next.js doesn't replace React. It builds on top of React.

## 2. Project Structure

- `app/` — App Router.
- `page.tsx` — Defines a route's UI.
- `layout.tsx` — Shared UI surrounding child routes.
- `globals.css` — Global styles.
- `public/` — Static assets.

## 3. Routing

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/users/[id]/page.tsx` → `/users/:id`
- `(routes)` → Route group; does not appear in the URL.

## 4. Layouts

- The root layout is `app/layout.tsx`.
- `children` represents the nested page content.
- Layouts help share UI, such as navigation bars and footers.

### What is `layout.tsx`?

A layout defines UI shared by its child pages.

For example, a layout can contain:

- Navigation bar
- Footer
- Shared page structure
- Font configuration

You don't need to repeat the same navbar in every page when it belongs in a shared layout.

## 5. Metadata

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Website",
  description: "My website description",
};
```

- Metadata describes a page to browsers and search engines.
- Use `generateMetadata` when metadata depends on dynamic data.

## 6. Fonts

- `next/font/google` — Supported Google Fonts.
- `next/font/local` — Local font files.
- `className` — Applies the font family.
- `variable` — Exposes a CSS variable.
- `subsets` — Specifies character subsets.
- `weight` — Specifies font weights to load.

Example:

```tsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
```

## 7. Font Weights

- `font-normal` → 400
- `font-medium` → 500
- `font-semibold` → 600
- `font-bold` → 700

The font configuration makes weights available; CSS chooses the weight for each element.

## 8. Remember

- Route folders need a `page.tsx` to define a page.
- Route groups don't add URL segments.
- App Router components are Server Components by default.
- Use `"use client"` when client-side features are needed.
