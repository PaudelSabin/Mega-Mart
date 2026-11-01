// =============================================================================
// types/homeTypes.ts
// -----------------------------------------------------------------------------
// The SHAPES of the data used on the home page.
//
// A TypeScript "interface" is a description of what an object must contain.
// Every item in an array in src/data/homeData.ts must match one of these shapes,
// so if you forget a field or misspell it, the editor shows an error straight
// away.   Example: a Phone must have a name, a price, an image ...
//
// A "?" after a field name means the field is optional.
// =============================================================================

import type { IconType } from "react-icons"; // the type of any react-icons icon

// ----- Top bar --------------------------------------------------------------
// One small item in the grey strip, e.g. [pin] Deliver to 423651
export interface TopBarEntry {
  id: string; // unique name, used as React's "key" when mapping
  icon: IconType; // the icon COMPONENT itself (not drawn yet), e.g. RiMapPinLine
  label: string;
  highlight?: string; // optional bold text after the label
}

// ----- Category pills under the header --------------------------------------
export interface PillEntry {
  id: string;
  label: string;
}

// ----- Hero banner (a single object, it is not repeated) --------------------
export interface HeroSlide {
  subtitle: string;
  title: string;
  offer: string;
  image: string; // the watch picture
  circleFill: string; // hero_circle.png
  circleLine: string; // hero_circle_line.png
}

// ----- Smartphones ----------------------------------------------------------
export interface Phone {
  id: string;
  name: string;
  price: string;
  oldPrice: string;
  savings: string;
  discount: string;
  image: string;
  imageHeight: number; // how tall the picture FILE is drawn (see homeData.ts)
}

// ----- Top categories (round pictures) --------------------------------------
export interface Category {
  id: string;
  label: string;
  image: string;
  imageSize?: number; // only for cut-out pictures that need to be smaller
}

// ----- Electronics brand banners --------------------------------------------
// Only these three words are allowed as a theme: anything else is an error.
export type BrandTheme = "dark" | "yellow" | "peach";

export interface Brand {
  id: string;
  brand: string; // text in the small tag
  logo: string;
  image: string; // the phone picture
  circle: string; // the circle picture in the top-right corner
  offerText: string;
  theme: BrandTheme;
  imageHeight: number;
}

// ----- Daily essentials -----------------------------------------------------
export interface Essential {
  id: string;
  name: string;
  offer: string;
  image: string;
  imageWidth: number;
}

// ----- Section titles: "Grab the best deal on" + blue "Smartphones" ---------
export interface SectionTitle {
  title: string;
  highlight: string;
}

// ----- Footer ---------------------------------------------------------------
export interface ContactEntry {
  id: string;
  icon: IconType;
  label: string;
  value: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

// A heading plus the list of links under it
export interface FooterGroup {
  id: string;
  heading: string;
  links: FooterLink[];
}
