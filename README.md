# Lush Garden — React + Tailwind CSS

A pixel-close rebuild of the "Lush Garden" Figma landing page, built with React
(Vite) and Tailwind CSS. Every section of the page is its own component, and
shared pieces (the button, product cards, feature cards, testimonial cards,
blog cards) are broken out so you can reuse or restyle them independently.

## Getting started (VS Code)

1. Unzip this folder and open it in VS Code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Then open the printed local URL (usually http://localhost:5173).
4. Build for production:
   ```bash
   npm run build
   ```

## Project structure

```
src/
  components/
    Button.jsx          reusable solid/outline button
    Navbar.jsx           nav bar (inside Hero)
    Hero.jsx              hero section
    FeatureCard.jsx      icon card used in About Us
    AboutUs.jsx           about section
    ProductCard.jsx      single product card (like button + buy button)
    Products.jsx          product grid section
    BenefitItem.jsx      single benefit block
    Benefits.jsx           benefits section (photo + 4 items)
    Gallery.jsx            photo collage section
    TestimonialCard.jsx  single testimonial
    Testimonials.jsx       testimonials section
    Newsletter.jsx        email capture / CTA section
    BlogCard.jsx          single blog post card
    Blog.jsx                blog section
    Footer.jsx             footer
  data/
    images.js            every image/icon URL, in one place
    content.js           text content: nav links, products, benefits, etc.
  App.jsx                 composes every section in order
  index.css               Tailwind directives + a couple of shared classes
```

## Customizing

- **Text & data** — edit `src/data/content.js`. Product names, prices,
  testimonials, blog posts and nav links all live there, not scattered
  through the components.
- **Images** — edit `src/data/images.js`. The URLs currently point at
  Figma's temporary asset host (they expire after about 7 days). Download
  the images you want to keep, drop them in `public/assets/`, and update the
  paths here.
- **Colors & fonts** — edit `tailwind.config.js` (`theme.extend.colors` /
  `fontFamily`). `primary` (#285a43) and `primary-light` (#337a5b) are the
  two brand greens used throughout.
- **Buttons** — `Button.jsx` takes a `variant` prop (`solid` | `outline`), an
  optional `icon`, and passes through any extra `className`, so you can reuse
  it anywhere without rewriting styles.

## Notes on fidelity

The Figma file uses free-form absolute positioning per element. This build
translates that into responsive Tailwind layouts (flexbox/grid) so the page
holds together on tablet and mobile, while keeping the same colors, spacing,
type scale and image placement as the original design.
