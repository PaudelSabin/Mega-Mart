// =============================================================================
// data/signInData.ts
// -----------------------------------------------------------------------------
// ALL the content of the Sign in / Sign up page (texts, field lists, links).
// The shapes are described in src/types/authTypes.ts.
// Shared things (header, top bar, nav pills) are re-used from homeData.ts.
// =============================================================================

import { RiBox3Line, RiPriceTag3Line, RiTruckLine } from "react-icons/ri";

import { heroWatch, logoWhite } from "../assets";

import type {
  AuthCopy,
  AuthFeature,
  AuthMode,
  BreadcrumbEntry,
  CompactFooterContact,
  CompactFooterGroup,
  FormFieldEntry,
  TabEntry,
} from "../types/authTypes";

// ----- Breadcrumb ---------------------------------------------------------------
export const signInBreadcrumb: BreadcrumbEntry[] = [
  { id: "home", label: "Home", target: "home" },
  { id: "signin", label: "Sign in" },
];

// ----- Dark promo card on the left ----------------------------------------------
export const promoContent = {
  eyebrow: "More with MegaMart",
  title: "Your everyday favourites. One account.",
  text: "From daily essentials to the latest tech, a better shopping experience starts here.",
  dealTitle: "Big brands. Bigger savings.",
  dealOffer: "UP to 80% OFF",
  image: heroWatch,
};

export const promoFeatures: AuthFeature[] = [
  {
    id: "deals",
    icon: RiPriceTag3Line,
    title: "Great deals, every day",
    description: "Discover offers on all your favourites.",
  },
  {
    id: "checkout",
    icon: RiTruckLine,
    title: "Shopping made simple",
    description: "Save your address for a faster checkout.",
  },
  {
    id: "orders",
    icon: RiBox3Line,
    title: "Every order in one place",
    description: "Track deliveries and easily shop again.",
  },
];

// ----- Form panel on the right ---------------------------------------------------
export const authTabs: TabEntry<AuthMode>[] = [
  { id: "signin", label: "Sign in" },
  { id: "signup", label: "Sign up" },
];

export const authCopy: Record<AuthMode, AuthCopy> = {
  signin: {
    heading: "Welcome back!",
    subtitle: "Sign in to MegaMart for a seamless shopping experience.",
    submitLabel: "Sign in",
    switchPrompt: "New to MegaMart?",
    switchLabel: "Sign up",
  },
  signup: {
    heading: "Create your account",
    subtitle: "Join MegaMart to save your details and check out faster.",
    submitLabel: "Create account",
    switchPrompt: "Already have an account?",
    switchLabel: "Sign in",
  },
};

// The inputs of each form. AuthForm loops over these with .map().
export const authFields: Record<AuthMode, FormFieldEntry[]> = {
  signin: [
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "Enter your email address",
      autoComplete: "email",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      autoComplete: "current-password",
    },
  ],
  signup: [
    {
      id: "name",
      label: "Full name",
      type: "text",
      placeholder: "Enter your full name",
      autoComplete: "name",
    },
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "Enter your email address",
      autoComplete: "email",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Create a password",
      autoComplete: "new-password",
    },
  ],
};

export const secureNote = "Your information is safe and secure with us.";

// ----- Compact footer (simpler than the home page footer) -------------------------
export const compactFooterContent = {
  logo: logoWhite,
  tagline: "Your everyday shopping destination.",
  contactHeading: "Contact Us",
  copyright: "© 2022 All rights reserved. Reliance Retail Ltd.",
};

export const compactFooterContacts: CompactFooterContact[] = [
  { id: "whatsapp", label: "Whats App", value: "+1 202-918-2132" },
  { id: "call", label: "Call Us", value: "+1 202-918-2132" },
];

export const compactFooterGroups: CompactFooterGroup[] = [
  {
    id: "services",
    heading: "Customer Services",
    links: [
      { id: "about", label: "About Us", href: "#" },
      { id: "terms", label: "Terms & Conditions", href: "#" },
      { id: "faq", label: "FAQ", href: "#" },
      { id: "privacy", label: "Privacy Policy", href: "#" },
    ],
  },
];
