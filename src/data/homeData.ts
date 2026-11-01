// =============================================================================
// data/homeData.ts
// -----------------------------------------------------------------------------
// ALL the content of the home page lives in THIS file, as arrays and objects.
//
//   - The shape of each array is described in src/types/homeTypes.ts
//   - HomePage.tsx imports these arrays and uses .map() on them. Each item is
//     turned into ONE reusable component (ProductCard, CategoryCard, ...).
//
// WANT TO CHANGE THE PAGE?  Edit this file only:
//   - add a phone       -> add one object to the `phones` array
//   - remove a category -> delete its object from `categories`
//   - change a price    -> change the text here
// You never have to touch the components for that.
//
// Images come from src/assets (the images are imported once there).
// =============================================================================

import {
  RiDiscountPercentLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTruckLine,
  RiWhatsappLine,
} from "react-icons/ri";

import {
  appleCircle,
  brandIphone,
  brandRealme,
  brandXiaomi,
  catAccessories,
  catCosmetics,
  catDecor,
  catElectronics,
  catFurniture,
  catMobile,
  catWatches,
  essCherry,
  essEssential,
  essFruits,
  essMango,
  essStrawberry,
  essVegetables,
  galaxyM13,
  galaxyM33,
  galaxyM53,
  galaxyS22Ultra,
  galaxyS22UltraGreen,
  heroCircle,
  heroCircleLine,
  heroWatch,
  logoApple,
  logoBlue,
  logoMi,
  logoRealme,
  logoWhite,
  miCircle,
  realmeCircle,
  storeApple,
  storeGoogle,
} from "../assets";

import type {
  Brand,
  Category,
  ContactEntry,
  Essential,
  FooterGroup,
  HeroSlide,
  PillEntry,
  Phone,
  SectionTitle,
  TopBarEntry,
} from "../types/homeTypes";

// =============================================================================
// Page frame: text and pictures used once
// =============================================================================
export const siteContent = {
  welcomeText: "Welcome to worldwide Megamart!",
  searchPlaceholder: "Search essentials, groceries and more...",
  headerLogo: logoBlue,
  footerLogo: logoWhite,
  appStoreBadge: storeApple,
  playStoreBadge: storeGoogle,
};

// =============================================================================
// Top bar (3 items)
// `icon` stores the icon COMPONENT. TopBar.tsx turns it into <item.icon />.
// =============================================================================
export const topBarItems: TopBarEntry[] = [
  { id: "deliver", icon: RiMapPinLine, label: "Deliver to", highlight: "423651" },
  { id: "track", icon: RiTruckLine, label: "Track your order" },
  { id: "offers", icon: RiDiscountPercentLine, label: "All Offers" },
];

// =============================================================================
// Category pills under the header (8 items)
// =============================================================================
export const categoryPills: PillEntry[] = [
  { id: "groceries", label: "Groceries" },
  { id: "premium-fruits", label: "Premium Fruits" },
  { id: "home-kitchen", label: "Home & Kitchen" },
  { id: "fashion", label: "Fashion" },
  { id: "electronics", label: "Electronics" },
  { id: "beauty", label: "Beauty" },
  { id: "home-improvement", label: "Home Improvement" },
  { id: "sports-toys-luggage", label: "Sports, Toys & Luggage" },
];

// =============================================================================
// Hero banner (one object)
// =============================================================================
export const heroSlide: HeroSlide = {
  subtitle: "Best Deal Online on smart watches",
  title: "SMART WEARABLE.",
  offer: "UP to 80% OFF",
  image: heroWatch,
  circleFill: heroCircle,
  circleLine: heroCircleLine,
};

// =============================================================================
// Section titles (the blue word is the `highlight`)
// =============================================================================
export const sectionTitles: Record<
  "phones" | "categories" | "brands" | "essentials",
  SectionTitle
> = {
  phones: { title: "Grab the best deal on", highlight: "Smartphones" },
  categories: { title: "Shop From", highlight: "Top Categories" },
  brands: { title: "Top", highlight: "Electronics Brands" },
  essentials: { title: "Daily", highlight: "Essentials" },
};

// =============================================================================
// Smartphones (5 items)
//
// WHY `imageHeight` DIFFERS: every phone picture has a different amount of
// transparent empty space around the phone. We want the PHONE ITSELF to be about
// 150px tall inside the 188px grey area, which leaves roughly 19px of padding
// above and below (like in Figma).
//   Formula:   imageHeight = 150 x 720 / (phone height inside the file)
//   (720 is the height of every picture file, in pixels.)
// To get MORE padding, lower all five numbers; for LESS, raise them.
// =============================================================================
export const phones: Phone[] = [
  {
    id: "s22-teal",
    name: "Galaxy S22 Ultra",
    price: "₹32999",
    oldPrice: "₹74999",
    savings: "Save - ₹32999",
    discount: "56%",
    image: galaxyS22Ultra,
    imageHeight: 186, // 150 x 720 / 581
  },
  {
    id: "m13",
    name: "Galaxy M13 (4GB | 64 GB )",
    price: "₹10499",
    oldPrice: "₹14999",
    savings: "Save - ₹4500",
    discount: "56%",
    image: galaxyM13,
    imageHeight: 183, // 150 x 720 / 591
  },
  {
    id: "m33",
    name: "Galaxy M33 (4GB | 64 GB )",
    price: "₹16999",
    oldPrice: "₹24999",
    savings: "Save - ₹8000",
    discount: "56%",
    image: galaxyM33,
    imageHeight: 198, // 150 x 720 / 546
  },
  {
    id: "m53",
    name: "Galaxy M53 (4GB | 64 GB )",
    price: "₹31999",
    oldPrice: "₹40999",
    savings: "Save - ₹9000",
    discount: "56%",
    image: galaxyM53,
    imageHeight: 195, // 150 x 720 / 554
  },
  {
    id: "s22-green",
    name: "Galaxy S22 Ultra",
    price: "₹67999",
    oldPrice: "₹85999",
    savings: "Save - ₹18000",
    discount: "56%",
    image: galaxyS22UltraGreen,
    imageHeight: 230, // 150 x 720 / 470
  },
];

// =============================================================================
// Top categories (7 items)
// `imageSize` is only set for cut-out pictures (mobile, electronics, watches).
// The square photos fill the whole circle by default.
// =============================================================================
export const categories: Category[] = [
  { id: "mobile", label: "Mobile", image: catMobile, imageSize: 150 },
  { id: "cosmetics", label: "Cosmetics", image: catCosmetics },
  { id: "electronics", label: "Electronics", image: catElectronics, imageSize: 150 },
  { id: "furniture", label: "Furniture", image: catFurniture },
  { id: "watches", label: "Watches", image: catWatches, imageSize: 92 },
  { id: "decor", label: "Decor", image: catDecor },
  { id: "accessories", label: "Accessories", image: catAccessories },
];

// =============================================================================
// Top electronics brands (3 items)
//   theme -> picks the card colours ("dark", "yellow", "peach")
//   circle -> the circle picture drawn in the top-right corner
//   imageHeight -> how tall the phone picture is drawn
// =============================================================================
export const brands: Brand[] = [
  {
    id: "iphone",
    brand: "iPhone",
    logo: logoApple,
    image: brandIphone,
    circle: appleCircle,
    offerText: "UP to 80% OFF",
    theme: "dark",
    imageHeight: 278,
  },
  {
    id: "realme",
    brand: "Realme",
    logo: logoRealme,
    image: brandRealme,
    circle: realmeCircle,
    offerText: "UP to 80% OFF",
    theme: "yellow",
    imageHeight: 197,
  },
  {
    id: "xiaomi",
    brand: "Xiaomi",
    logo: logoMi,
    image: brandXiaomi,
    circle: miCircle,
    offerText: "UP to 80% OFF",
    theme: "peach",
    imageHeight: 228,
  },
];

// =============================================================================
// Daily essentials (6 items)
// `imageWidth` = how wide each picture is drawn inside its tile.
// =============================================================================
export const essentials: Essential[] = [
  { id: "daily", name: "Daily Essentials", offer: "UP to 50% OFF", image: essEssential, imageWidth: 183 },
  { id: "vegetables", name: "Vegetables", offer: "UP to 50% OFF", image: essVegetables, imageWidth: 145 },
  { id: "fruits", name: "Fruits", offer: "UP to 50% OFF", image: essFruits, imageWidth: 176 },
  { id: "strawberry", name: "Strawberry", offer: "UP to 50% OFF", image: essStrawberry, imageWidth: 166 },
  { id: "mango", name: "Mango", offer: "UP to 50% OFF", image: essMango, imageWidth: 168 },
  { id: "cherry", name: "Cherry", offer: "UP to 50% OFF", image: essCherry, imageWidth: 172 },
];

// =============================================================================
// Which card is selected when the page first opens (the ids from the arrays above)
// =============================================================================
export const defaultSelection = {
  phone: "m13",
  category: "mobile",
  essential: "daily",
};

// =============================================================================
// Footer
// =============================================================================
export const footerContacts: ContactEntry[] = [
  { id: "whatsapp", icon: RiWhatsappLine, label: "Whats App", value: "+1 202-918-2132" },
  { id: "call", icon: RiPhoneLine, label: "Call Us", value: "+1 202-918-2132" },
];

// Two columns of links. Each group has a heading and its own array of links.
export const footerGroups: FooterGroup[] = [
  {
    id: "popular",
    heading: "Most Popular Categories",
    links: [
      { id: "staples", label: "Staples", href: "#" },
      { id: "beverages", label: "Beverages", href: "#" },
      { id: "personal-care", label: "Personal Care", href: "#" },
      { id: "home-care", label: "Home Care", href: "#" },
      { id: "baby-care", label: "Baby Care", href: "#" },
      { id: "vegetables-fruits", label: "Vegetables & Fruits", href: "#" },
      { id: "snacks-foods", label: "Snacks & Foods", href: "#" },
      { id: "dairy-bakery", label: "Dairy & Bakery", href: "#" },
    ],
  },
  {
    id: "services",
    heading: "Customer Services",
    links: [
      { id: "about", label: "About Us", href: "#" },
      { id: "terms", label: "Terms & Conditions", href: "#" },
      { id: "faq", label: "FAQ", href: "#" },
      { id: "privacy", label: "Privacy Policy", href: "#" },
      { id: "ewaste", label: "E-waste Policy", href: "#" },
      { id: "returns", label: "Cancellation & Return Policy", href: "#" },
    ],
  },
];
