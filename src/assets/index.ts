// =============================================================================
// assets/index.ts
// -----------------------------------------------------------------------------
// ONE place that imports every image, font-free asset of the project.
//
// How to use it from any component or page:
//
//     import { galaxyM13, logoBlue } from "../assets";
//
// Why do it this way?
//   - the file names live in one file only, so renaming an image means
//     editing a single line;
//   - components never import images themselves: the PAGE imports them and
//     passes them down as props (this is the "props" idea of the task).
//
// IMPORTANT: this file only exports image paths. It is NOT a data file (no
// product names, prices ...), so it respects the "no mock data" rule.
// =============================================================================

// ----- Hero banner ---------------------------------------------------------
export { default as heroWatch } from "./images/hero-watch.webp"; // the smart watch picture

// The two semicircle pictures behind the watch (exported from Figma):
//  - hero_circle.png      : the filled navy half-circle that hangs from the top edge
//  - hero_circle_line.png : the thin outline ring around it
export { default as heroCircle } from "./images/hero_circle.png";
export { default as heroCircleLine } from "./images/hero_circle_line.png";

// ----- Smartphones section (product cards) ---------------------------------
export { default as galaxyS22Ultra } from "./images/galaxy-s22-ultra.webp";
export { default as galaxyM13 } from "./images/galaxy-m13.webp";
export { default as galaxyM33 } from "./images/galaxy-m33.webp";
export { default as galaxyM53 } from "./images/galaxy-m53.webp";
export { default as galaxyS22UltraGreen } from "./images/galaxy-s22-ultra-green.webp";

// ----- Top categories (round pictures) -------------------------------------
export { default as catMobile } from "./images/cat-mobile.webp";
export { default as catCosmetics } from "./images/cat-cosmetics.webp";
export { default as catElectronics } from "./images/cat-electronics.webp";
export { default as catFurniture } from "./images/cat-furniture.webp";
export { default as catWatches } from "./images/cat-watches.webp";
export { default as catDecor } from "./images/cat-decor.webp";
export { default as catAccessories } from "./images/cat-accessories.webp";

// ----- Top electronics brands (brand banners) ------------------------------
// The phone picture on the right of each banner
export { default as brandIphone } from "./images/brand-iphone.webp";
export { default as brandRealme } from "./images/brand-realme.webp";
export { default as brandXiaomi } from "./images/brand-xiaomi.webp";

// The circle pictures behind each phone (exported from Figma). Each one is
// drawn in the TOP-RIGHT corner of its banner: a filled circle plus a thin ring.
export { default as appleCircle } from "./images/apple_circle.png";
export { default as realmeCircle } from "./images/realme_circle.png";
export { default as miCircle } from "./images/MI_circle.png";

// ----- Daily essentials ----------------------------------------------------
export { default as essEssential } from "./images/ess-essential.webp";
export { default as essVegetables } from "./images/ess-vegetables.webp";
export { default as essFruits } from "./images/ess-fruits.webp";
export { default as essStrawberry } from "./images/ess-strawberry.webp";
export { default as essMango } from "./images/ess-mango.webp";
export { default as essCherry } from "./images/ess-cherry.webp";

// ----- Footer app-store badges ---------------------------------------------
export { default as storeApple } from "./images/store-apple.png";
export { default as storeGoogle } from "./images/store-google.png";

// ----- Logos ---------------------------------------------------------------
// The names on the LEFT (logoBlue ...) are what the rest of the code uses.
// The file names on the RIGHT are the real files that are in src/assets/images.
// (The older "logo-*.svg" stand-in files are still in the folder but only
//  logo-white.svg is used, because no white logo was exported from Figma yet.)
export { default as logoBlue } from "./images/logoBlue.svg"; // header logo
export { default as logoWhite } from "./images/logo-white.svg"; // footer logo
export { default as logoApple } from "./images/logoApple.png"; // iPhone banner logo (62x62)
export { default as logoRealme } from "./images/logoRealme.png"; // realme banner logo (114x34)
export { default as logoMi } from "./images/logoMi.png"; // Xiaomi banner logo (67x67)
