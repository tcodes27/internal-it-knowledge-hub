Fix two small UI issues in Version 2.3 without redesigning the app.

## Category cards — remove external-link arrow

File: `src/components/category-tile.tsx`
- Remove the `ArrowUpRight` import and the arrow icon rendered in the top-right corner.
- Keep the existing hover/clickable behavior: `cursor-pointer`, lift (`-translate-y-1.5`), border change to primary (`hover:border-primary`), icon scale (`group-hover:scale-110`), soft glow, and focus ring.
- Leave the card as a `button` when `onSelect` is provided and as a `Link` fallback.
- This removes the arrow from both the Home category cards and the Browse Topics category cards.

## Homepage search dropdown — fix clipping and layout

Files: `src/components/search-panel.tsx` and `src/routes/index.tsx`
- In `src/routes/index.tsx`, remove `overflow-hidden` from the hero container so the absolutely positioned search dropdown is not clipped.
- In `src/components/search-panel.tsx`:
  - The dropdown wrapper already has `position: relative` on the outer div; keep it.
  - Change the dropdown panel to: `position: absolute; top: calc(100% + 12px); left: 0; right: 0; z-index: 50; max-height: 60vh; overflow-y: auto;` so it sits directly under the input and stays fully visible.
  - Remove `overflow-hidden` from the dropdown panel itself.
  - Tighten row spacing slightly (e.g., reduce vertical padding on result rows) while keeping title, summary, category badge, difficulty, and estimated time.
  - Keep rounded corners, soft shadow, and hover states.
  - Ensure the bottom of the dropdown is not cut off and the panel stays responsive on smaller screens.

## Verification
- Build and preview the Home and Browse Topics pages.
- Confirm category cards no longer show the arrow icon but still animate on hover.
- Confirm the homepage search dropdown opens fully, is scrollable, and is not clipped by the hero section.