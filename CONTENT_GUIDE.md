# Content Management Guide: Antonio Herrera Landing Page

This guide explains how to update the text, links, images, and colors of the Antonio Herrera landing page.

---

## 1. Updating Text (Multilingual)

All text content is centralized in the `CONTENT` object located at the top of `src/App.tsx`. The site supports three languages: **English (EN)**, **German (DE)**, and **Spanish (ES)**.

### How to edit:
1. Open `src/App.tsx`.
2. Locate the `CONTENT` constant (around line 12).
3. Find the language key you want to edit (`EN`, `DE`, or `ES`).
4. Update the value for the corresponding key.

**Example:**
To change the Hero Title in English:
```typescript
// src/App.tsx
const CONTENT = {
  EN: {
    heroTitle: "Your New Title Here", // Edit this line
    ...
  },
  ...
}
```

---

## 2. Updating Links (CTAs & Navigation)

Links are defined directly within the component structure in `src/App.tsx`. Most links are used multiple times (e.g., the Google Calendar link).

### Common Links to Update:
*   **Register (Google Form)**: Search for `https://docs.google.com/forms/...`
*   **Begin a new journey (Google Calendar)**: Search for `https://calendar.app.google/...`
*   **PDF Download**: Search for `https://drive.google.com/file/...`
*   **Shop Links**: Search for `https://antonioherrera.shop/`
*   **About Links**: Search for `https://antonioherrera.ch/`

### How to edit:
1. Search for the URL in `src/App.tsx`.
2. Replace the `href` attribute value.

---

## 3. Updating Images

The site uses high-quality placeholder images from Unsplash/Picsum.

### How to edit:
1. Locate the `<img />` tags in `src/App.tsx`.
2. Replace the `src` attribute with your new image URL.
3. **Important**: Ensure you keep `referrerPolicy="no-referrer"` on all image tags to prevent loading issues.

---

## 4. Updating Colors

The brand color palette is defined in `src/index.css` using Tailwind CSS theme variables.

### How to edit:
1. Open `src/index.css`.
2. Update the hex codes in the `@theme` block:
   *   `--color-brand-red`: Primary Red (#ff3333)
   *   `--color-brand-rosa`: Brand Rosa (#ff99cc)
   *   `--color-brand-orange`: Brand Orange (#ff6600)
   *   `--color-brand-grey`: Brand Grey (#b2b1b1)

### Using Colors in Code:
You can use these colors anywhere in the HTML using Tailwind classes like `bg-brand-red`, `text-brand-rosa`, or `border-brand-orange`.

---

## 5. Adding New Sections

New sections should be added within the `<main>` tag in `src/App.tsx`.

### Recommended Structure:
```tsx
<section className="py-32 border-b-4 border-brand-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Your content here */}
  </div>
</section>
```

---

## 6. Deployment

The site is built using Vite. Any changes saved to the code will automatically trigger a refresh in the development preview. For production, the standard `npm run build` command is used.
