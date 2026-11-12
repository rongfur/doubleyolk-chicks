# Double Yolk Chicks · 双黄小鸡

A local first version of the official website. Built with React, Vite, and Tailwind CSS. No site has been deployed. The homepage displays the original chick logo from the supplied website sketch using a CSS viewing window; the source image is untouched. Gallery and profile artwork areas remain abstract placeholders, not replacement character illustrations. Profile descriptions and gallery titles are editable draft copy.

## Run locally

1. Install the LTS version of Node.js from https://nodejs.org if you do not have it.
2. Open Terminal in this project folder.
3. Run `npm install` once to install dependencies.
4. Run `npm run dev`.
5. Open the Local address printed in Terminal (usually http://127.0.0.1:5173).

Keep Terminal open while using the website. Press Control+C to stop it. Changes to source files appear automatically in the browser.

## Add your artwork and content

Put original images in `public/artwork/`. Use descriptive filenames, for example `a-sunny-day.jpg`. Edit `src/content.js`:

```js
{ id: 4, title: 'A sunny day', category: 'Comics',
  note: 'The chicks enjoying a sunny afternoon',
  image: '/artwork/a-sunny-day.jpg', color: 'yellow' }
```

Add that object to the `artworks` array. Use `Comics` or `Illustrations` for the category so the filters work. `note` is the accessible description of your image. Keep ids unique. The full illustration is preserved with `object-fit: contain`; images are never edited or cropped. For multi-page comics, add each page as its own gallery entry in this version.

Replace character `label`, `subtitle`, `description`, and `image` in the `characters` array. Edit `creator` for your biography. Add real profile URLs to `socialLinks`; there are no invented social accounts or inactive social buttons.

For an animation, put an MP4 or WebM in `public/artwork/`, then change the first animation's `video` to its path and optionally set `poster` to an image path. The placeholder becomes a video player with controls. Videos do not autoplay.

## Files

- `src/content.js`: artwork, characters, animation and creator content
- `src/main.jsx`: page layout and interactions
- `src/styles.css`: colours, typography, responsive layout and Tailwind import
- `public/artwork/`: your original artwork files

## Check a production build

Run `npm run build`. This checks that the site bundles successfully and writes the result into `dist/`. Run `npm run preview` to view that build locally. Neither command deploys anything.

## Included interactions

Gallery category filters; click-to-open artwork viewer (close button, Escape, or backdrop); keyboard focus restoration; four round homepage navigation links; smooth section navigation; clickable chick greeting; hover effects. Reduced-motion preferences are respected. This first version is a single-page site, with smooth transitions between sections.

## Character section

The Character section uses the creator’s original handwritten heading and two front portraits. Hover, focus, or tap makes a chick hop. No 3D models or rendering libraries are used.
