# MegaMart: Ecommerce Landing Page

A pixel-accurate recreation of the **MegaMart** ecommerce landing page from a
Figma design, built with **React + TypeScript + Vite** and plain CSS.

This is a learning project. Its goal is to practise **slicing a design into
reusable components**, **passing content to them through typed props**, and
**keeping the content in arrays that are turned into components with `.map()`**.

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Getting started](#getting-started)
3. [Available scripts](#available-scripts)
4. [Project structure](#project-structure)
5. [Components and their props](#components-and-their-props)
6. [How the code is organised](#how-the-code-is-organised)
7. [Design details](#design-details)
8. [Assets](#assets)
9. [Responsive behaviour](#responsive-behaviour)
10. [Interactions and effects](#interactions-and-effects)
11. [Notes and known limitations](#notes-and-known-limitations)

---

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev) | UI components |
| [TypeScript](https://www.typescriptlang.org) | Typed props, safer code |
| [Vite](https://vite.dev) | Dev server and build tool |
| Plain CSS | One CSS file per component (no Tailwind or UI framework) |
| [react-icons](https://react-icons.github.io/react-icons/) | All icons (Remix "line" set), imported by name |
| [oxlint](https://oxc.rs) | Linting |
| HK Grotesk | The font used in the Figma design (bundled, no internet needed) |

No backend, no API, no database, no state-management library and no UI
framework are used. The only extra library is `react-icons`, for the icons.

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
    ├── data/
    │   └── homeData.ts        # ALL the page content as arrays/objects (phones, categories ...)
    │
    ├── pages/
    │   ├── HomePage.tsx       # loops over the data with .map() and builds the components
    │   └── HomePage.css       # spacing between sections and the card grids
    │
    └── types/
        └── homeTypes.ts       # the TypeScript shape of every array in homeData.ts
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
| `TopBar` | `welcomeText`, `items` (array, mapped to `TopBarItem`) | once |
| `TopBarItem` | `icon`, `label`, `highlight?` | once per item |
| `Header` | `logo`, `searchPlaceholder` | once |
| `CategoryNav` | `pills` (array, mapped to `NavPill`), `defaultActive` | once |
| `NavPill` | `label`, `active?`, `onClick?` | once per pill |
| `Footer` | `logo`, `appStoreBadge`, `playStoreBadge`, `contacts` (array), `linkGroups` (array of arrays) | once |
| `FooterLinkList` | `heading`, `children` (the `<li>` links) | once per group |
| `ContactItem` | `icon`, `label`, `value` | once per contact |

### Common

| Component | Props | Used |
| --- | --- | --- |
| `SearchBar` | `placeholder` | once |
| `SectionHeader` | `title`, `highlight` | 4 times |
| `CarouselArrow` | `direction` (`"left"` or `"right"`), `onClick?` | 2 times |
| `DotIndicator` | `activeIndex` (0 to 6), `onSelect?` | 2 times |

### Ecommerce

| Component | Props | Used |
| --- | --- | --- |
| `HeroBanner` | `subtitle`, `title`, `offer`, `image`, `circleFill`, `circleLine` | once |
| `ProductCard` | `name`, `price`, `oldPrice`, `savings`, `discount`, `image`, `imageHeight?`, `selected?`, `onSelect?` | once per phone |
| `CategoryCard` | `label`, `image`, `imageSize?`, `selected?`, `onSelect?` | once per category |
| `BrandBanner` | `brand`, `logo`, `image`, `circle`, `offerText`, `theme`, `imageHeight` | once per brand |
| `EssentialCard` | `name`, `offer`, `image`, `imageWidth`, `selected?`, `onSelect?` | once per essential |

`?` means the prop is optional.

### Example: one array, one `.map()`, one component

The data (in `src/data/homeData.ts`):

```ts
export const phones: Phone[] = [
  { id: "m13", name: "Galaxy M13 (4GB | 64 GB )", price: "₹10499", /* ... */ },
  { id: "m33", name: "Galaxy M33 (4GB | 64 GB )", price: "₹16999", /* ... */ },
  // add another phone here and a new card appears
];
```

The page (in `src/pages/HomePage.tsx`):

```tsx
{phones.map((phone) => (
  <ProductCard
    key={phone.id}              // unique id, so React can track each card
    name={phone.name}
    price={phone.price}
    image={phone.image}
    selected={selectedPhone === phone.id}
    onSelect={() => setSelectedPhone(phone.id)}
    /* ... */
  />
))}
```

---

## How the code is organised

- **Content and looks are separate.** All text, prices and pictures live in
  `src/data/homeData.ts`. The components only decide how things look.
- **One reusable component per repeated pattern.** There is one `ProductCard`,
  and `HomePage` draws it once per phone in the `phones` array with `.map()`.
- **Typed data.** Every array has a TypeScript shape in
  `src/types/homeTypes.ts`, so a missing or misspelled field is an editor error.
- **Keys.** Every mapped element gets a unique `key` (the item's `id`).
- **Props flow down.** The data file feeds `HomePage`, `HomePage` passes values to
  components as props, and the components never import content themselves.
- **No `any`.** Props and data are fully typed.
- **Plain CSS, one file per component.** Shared values live in `src/index.css`.
- **Icons from a library.** No SVG is drawn by hand. Each icon is imported by
  name, e.g. `import { RiSearchLine } from "react-icons/ri";`. In the data file
  an icon is stored as a component (`icon: RiMapPinLine`) and drawn as
  `<item.icon />`.

### Changing the content

Edit `src/data/homeData.ts` only:

| I want to... | Do this |
| --- | --- |
| add a phone / category / brand / essential | add one object to the matching array (and its picture to `src/assets`) |
| remove one | delete its object |
| change a price or label | change the text in its object |
| add a footer link | add `{ id, label, href }` to a group's `links` array |
| change which card is selected at the start | change `defaultSelection` |

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

## Interactions and effects

The page is dynamic. Effects come in three kinds:

**1. Interactions (React state)**

| What | Where the state lives | What happens |
| --- | --- | --- |
| Category pills | `CategoryNav` | clicking a pill makes it the active (blue) one; its arrow flips |
| Hero slider | `HeroBanner` | arrows and dots change the slide; it autoplays every 5 s and pauses while the mouse is over it or a button has focus |
| Search box | `SearchBar` | typing is tracked; an (x) button appears and clears the text (so does `Esc`) |
| Phone, category and essentials cards | `HomePage` (the selected `id`) | clicking (or pressing `Enter` / `Space` on) a card moves the blue "selected" outline to it |
| Brand dots | `HomePage` | clicking a dot makes it the active (long) dot |

The parent owns the state and passes `selected` and `onSelect` down as props,
so only one card in a group can be selected at a time.

**2. Hover and press effects (CSS)**

Cards and circles lift with a deeper shadow and their picture zooms; brand
banners lift while the phone tilts and the circle swells; buttons and pills
lift, change colour or sink when pressed; header icons wiggle; "View All"
arrows slide; footer links slide and get a growing underline; store badges
lift. Hover effects are wrapped in `@media (hover: hover)` so they do not get
"stuck" on touch screens.

**3. Animations**

- the hero text and watch slide in on load and on every slide change, the watch
  and circles float gently
- each section fades and slides up the first time it scrolls into view, its
  cards appear one after the other, and the blue line under the title grows
  (`useScrollReveal` in `HomePage.tsx`)
- the brand phones and footer circles drift slowly

**Good to know**

- Everything respects `prefers-reduced-motion`: with "reduce motion" switched
  on in the operating system, animations are removed and autoplay is off.
- Cards, circles and tiles can be focused with `Tab` and selected with the
  keyboard; focus shows a blue ring.
- Only one slide of hero content was supplied, so all 7 slides show the same
  banner (the entrance animation replays on each change).

---

## Notes and known limitations

- Links ( "View All", the footer links ) and the menu / sign-in / cart buttons
  do not lead anywhere yet. There is no real cart, search results or routing.
- `logo-white.svg` (footer logo) is a simple stand-in. Replace it with the real
  export from Figma and keep the same file name.
- The two small circles that rise from the bottom of the hero banner are drawn
  with CSS. The two larger ones at the top use the exported pictures.
- Icons come from `react-icons` (Remix line set). They are close to the Figma
  icons but not exact copies, because Figma used a different icon set.
- Brand-banner tag colours and the dark card colour were matched by eye.
- The older `logo-apple.svg`, `logo-mi.svg` and `logo-realme.svg` stand-in files
  are still in `src/assets/images` but are no longer used.
