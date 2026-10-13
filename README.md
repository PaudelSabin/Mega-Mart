# MegaMart: Ecommerce Landing Page

A pixel-accurate recreation of the **MegaMart** ecommerce landing page from a
Figma design, built with **React + TypeScript + Vite** and plain CSS.

This is a learning project. Its goal is to practise **slicing a design into
reusable components** and **passing different content to the same component
through typed props**.

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Getting started](#getting-started)
3. [Available scripts](#available-scripts)
4. [Project structure](#project-structure)
5. [Components and their props](#components-and-their-props)
6. [How the code is organised (the rules)](#how-the-code-is-organised-the-rules)
7. [Design details](#design-details)
8. [Assets](#assets)
9. [Responsive behaviour](#responsive-behaviour)
10. [Notes and known limitations](#notes-and-known-limitations)

---

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev) | UI components |
| [TypeScript](https://www.typescriptlang.org) | Typed props, safer code |
| [Vite](https://vite.dev) | Dev server and build tool |
| Plain CSS | One CSS file per component (no Tailwind or UI framework) |
| [oxlint](https://oxc.rs) | Linting |
| HK Grotesk | The font used in the Figma design (bundled, no internet needed) |

No backend, no API, no database, no state-management library and no extra
UI libraries are used.

---

## Getting started

**Requirements:** Node.js 20 or newer and npm.

```bash
# 1. install the dependencies
npm install

# 2. start the development server
npm run dev
```

Then open the address Vite prints (usually <http://localhost:5173>).

---

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with hot reload |
| `npm run build` | Type-checks the code (`tsc -b`) and creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally so you can test it |
| `npm run lint` | Runs oxlint on the project |

---

## Project structure

```text
ecommerce-frontend/
├── index.html                 # page shell, React mounts into <div id="root">
├── package.json
├── vite.config.ts
├── tsconfig*.json
└── src/
    ├── main.tsx               # entry point: mounts <App /> and loads index.css
    ├── App.tsx                # renders the one page (HomePage)
    ├── index.css              # global: font-face, colour variables, reset, .container
    │
    ├── assets/
    │   ├── index.ts           # ONE file that exports every image (import from here)
    │   ├── fonts/             # HK Grotesk (.woff2: regular, medium, semibold, bold)
    │   └── images/            # product photos, logos, banner circles, badges
    │
    ├── components/
    │   ├── common/            # small pieces used in several places
    │   │   ├── SearchBar
    │   │   ├── SectionHeader
    │   │   ├── CarouselArrow
    │   │   └── DotIndicator
    │   ├── layout/            # the page frame
    │   │   ├── TopBar, TopBarItem
    │   │   ├── Header
    │   │   ├── CategoryNav, NavPill
    │   │   └── Footer, FooterLinkList, ContactItem
    │   └── ecommerce/         # shop-specific cards and banners
    │       ├── HeroBanner
    │       ├── ProductCard
    │       ├── CategoryCard
    │       ├── BrandBanner
    │       └── EssentialCard
    │
    ├── pages/
    │   ├── HomePage.tsx       # assembles all components and gives them their content
    │   └── HomePage.css       # spacing between sections and the card grids
    │
    └── types/                 # reserved for shared TypeScript types
```

Every component has **its own `.tsx` file and its own `.css` file** next to it
(for example `ProductCard.tsx` and `ProductCard.css`).

---

## Components and their props

Every reusable component receives its content through **typed props**. The
page decides *what* to show, the component only decides *how* to show it.

### Layout

| Component | Props | Used |
| --- | --- | --- |
| `TopBar` | `welcomeText` | once |
| `TopBarItem` | `icon`, `label`, `highlight?` | 3 times |
| `Header` | `logo`, `searchPlaceholder` | once |
| `CategoryNav` | none | once |
| `NavPill` | `label`, `active?` | 8 times |
| `Footer` | `logo`, `appStoreBadge`, `playStoreBadge` | once |
| `FooterLinkList` | `heading`, `children` (the `<li>` links) | 2 times |
| `ContactItem` | `icon`, `label`, `value` | 2 times |

### Common

| Component | Props | Used |
| --- | --- | --- |
| `SearchBar` | `placeholder` | once |
| `SectionHeader` | `title`, `highlight` | 4 times |
| `CarouselArrow` | `direction` (`"left"` or `"right"`) | 2 times |
| `DotIndicator` | `activeIndex` (0 to 6) | 2 times |

### Ecommerce

| Component | Props | Used |
| --- | --- | --- |
| `HeroBanner` | `subtitle`, `title`, `offer`, `image`, `circleFill`, `circleLine` | once |
| `ProductCard` | `name`, `price`, `oldPrice`, `savings`, `discount`, `image`, `imageHeight?`, `selected?` | 5 times |
| `CategoryCard` | `label`, `image`, `imageSize?`, `selected?` | 7 times |
| `BrandBanner` | `brand`, `logo`, `image`, `circle`, `offerText`, `theme`, `imageHeight` | 3 times |
| `EssentialCard` | `name`, `offer`, `image`, `imageWidth`, `selected?` | 6 times |

`?` means the prop is optional.

### Example: one component, different props

```tsx
<ProductCard
  name="Galaxy M13 (4GB | 64 GB )"
  price="₹10499"
  oldPrice="₹14999"
  savings="Save - ₹4500"
  discount="56%"
  image={galaxyM13}
  imageHeight={183}
  selected
/>

<ProductCard
  name="Galaxy M33 (4GB | 64 GB )"
  price="₹16999"
  oldPrice="₹24999"
  savings="Save - ₹8000"
  discount="56%"
  image={galaxyM33}
  imageHeight={198}
/>
```

---

## How the code is organised (the rules)

These are the rules of the task, and the code follows all of them:

- **One reusable component per repeated pattern.** There is no `ProductCard1`,
  `ProductCard2` and so on; there is one `ProductCard`, used five times.
- **Content comes from the parent.** `HomePage.tsx` passes every text, price and
  image down as props. A component never decides which product it shows.
- **No mock data and no `.map()`.** There is no `data/` folder, no product
  arrays and no JSON. Each card is written out by hand with its own props, so
  you can see exactly how props flow. (`src/assets/index.ts` only exports image
  paths, it holds no product information.)
- **Typed props, no `any`.** Every component has a TypeScript `interface` for
  its props.
- **No tiny wrapper components.** A component is a meaningful UI pattern, not
  every single HTML element.
- **Plain CSS, one file per component.** Shared values live in `src/index.css`.

---

## Design details

The Figma file is the source of truth. Key measurements (1440px wide page):

| Item | Value |
| --- | --- |
| Content width | 1200px, centred (120px side margins) |
| Top bar | 42px high |
| Header | 90px high |
| Category nav | 69px high |
| Hero banner | 1200 x 316 |
| Product card | about 227 x 295, 5 per row, 16px gap |
| Category circle | 132px, 7 per row |
| Brand banner | 389 x 207, 3 per row, 16px gap |
| Essentials tile | 187 x 187, 6 per row, 16px gap |
| Footer | 592px high |
| Gap between sections | 120px |

### Colours

Defined as CSS variables in `src/index.css`:

| Variable | Value | Used for |
| --- | --- | --- |
| `--color-primary` | `#008ECC` | brand blue (buttons, links, footer) |
| `--color-text` | `#666666` | body text |
| `--color-dark` | `#181818` | headings and card text |
| `--color-bg-grey` | `#F5F5F5` | top bar, image backgrounds |
| `--color-bg-light-blue` | `#F3F9FB` | search bar, pills, arrows |
| `--color-border` | `#EDEDED` | thin separator lines |
| `--color-divider` | `#D9D9D9` | small vertical dividers |
| `--color-green` | `#1A8F2D` | "Save" text on product cards |

The hero banner uses `#212844` (banner), `#2C3454` (filled circles) and
`#3C466B` (ring lines).

### Font

**HK Grotesk** (SIL Open Font License), bundled in `src/assets/fonts` and
loaded with `@font-face` rules in `src/index.css`. Weights used: 400, 500, 600
and 700.

---

## Assets

All images are imported once in `src/assets/index.ts` and passed to components
as props:

```tsx
import { galaxyM13, logoBlue } from "../assets";
```

| Group | Files |
| --- | --- |
| Hero | `hero-watch.webp`, `hero_circle.png`, `hero_circle_line.png` |
| Smartphones | `galaxy-*.webp` (5 pictures) |
| Categories | `cat-*.webp` (7 pictures) |
| Brand banners | `brand-*.webp` (phones), `apple_circle.png`, `realme_circle.png`, `MI_circle.png` |
| Daily essentials | `ess-*.webp` (6 pictures) |
| Footer | `store-apple.png`, `store-google.png` |
| Logos | `logoBlue.svg`, `logoApple.png`, `logoRealme.png`, `logoMi.png`, `logo-white.svg` |

---

## Responsive behaviour

The layout is built for desktop first and adapts at two breakpoints:

| Width | Changes |
| --- | --- |
| up to **1300px** | hero arrows move inside the banner |
| up to **1100px** (tablet) | product cards 3 per row, categories 4, brand banners 2, essentials 3; search bar shrinks; footer becomes 2 columns |
| up to **700px** (mobile) | product cards 2 per row, categories 3, brand banners and footer 1 column; search bar moves to its own row; top bar shows only the welcome text; hero text and watch stack |

The page never scrolls sideways at any width.

---

## Notes and known limitations

- Everything on the page is static: buttons, arrows, dots and links do not do
  anything yet. This project focuses on components and props, not behaviour.
- `logo-white.svg` (footer logo) is a simple stand-in. Replace it with the real
  export from Figma and keep the same file name.
- The two small circles that rise from the bottom of the hero banner are drawn
  with CSS. The two larger ones at the top use the exported pictures.
- Icons are simple inline SVGs, close to the Figma icons but not exact copies.
- Brand-banner tag colours and the dark card colour were matched by eye.
- The older `logo-apple.svg`, `logo-mi.svg` and `logo-realme.svg` stand-in files
  are still in `src/assets/images` but are no longer used.
