# Portfolio Type System

**Fonts:** Space Grotesk (display/headings) + Plus Jakarta Sans (body/UI) + JetBrains Mono (tags/labels)

Next.js setup — `app/layout.tsx` (or `layout.js`):
```tsx
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

Tailwind config (if using Tailwind):
```js
// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      display: ['var(--font-display)'],
      body: ['var(--font-body)'],
      mono: ['var(--font-mono)'],
    },
  },
}
```

Plain CSS (if not using Tailwind):
```css
--font-display: var(--font-display), sans-serif;
--font-body: var(--font-body), sans-serif;
--font-mono: var(--font-mono), monospace;
```

---

## Type Scale

| Use | Font | Size (desktop) | Size (mobile) | Weight | Line height |
|---|---|---|---|---|---|
| Hero headline | Space Grotesk | 64px | 36px | 700 | 1.1 |
| H1 (page title) | Space Grotesk | 48px | 32px | 700 | 1.15 |
| H2 (section) | Space Grotesk | 32px | 24px | 600 | 1.2 |
| H3 (project title) | Space Grotesk | 24px | 20px | 600 | 1.3 |
| H4 (sub-heading) | Plus Jakarta Sans | 18px | 16px | 600 | 1.4 |
| Body / paragraph | Plus Jakarta Sans | 16px | 15px | 400 | 1.6 |
| Lead paragraph / intro | Plus Jakarta Sans | 20px | 17px | 500 | 1.5 |
| Caption / meta text | Plus Jakarta Sans | 13px | 12px | 400 | 1.4 |
| Nav links | Plus Jakarta Sans | 15px | 14px | 500 | 1 |
| Buttons / CTA | Plus Jakarta Sans | 15px | 15px | 600 | 1 |
| Tags / pills (e.g. "React", "2026") | JetBrains Mono | 12px | 11px | 500 | 1 |
| Testimonial quote | Space Grotesk | 22px | 18px | 500 | 1.4 |
| Testimonial attribution | Plus Jakarta Sans | 14px | 13px | 400 | 1.4 |
| Footer / fine print | Plus Jakarta Sans | 13px | 12px | 400 | 1.5 |

---

## Notes for implementation
- Letter-spacing: tighten Space Grotesk headings slightly (-0.02em) at large sizes to avoid looseness.
- Body text stays at default letter-spacing for readability.
- JetBrains Mono is used sparingly — tags, stack labels, code snippets — as an accent, not for body copy.
- All weights above are the only ones that need to be loaded (don't pull the full variable font family — keeps load time down).
