// =============================================================================
// types/authTypes.ts
// -----------------------------------------------------------------------------
// The SHAPES of the data used on the Sign in / Sign up page.
// The actual content lives in src/data/signInData.ts.
// =============================================================================

import type { IconType } from "react-icons"; // the type of any react-icons icon

// Which form is showing. Only these two words are allowed.
export type AuthMode = "signin" | "signup";

// ----- Breadcrumb: Home > Sign in -------------------------------------------
export interface BreadcrumbEntry {
  id: string;
  label: string;
  target?: string; // the page to go to when clicked. No target = the current page
}

// ----- Tabs: "Sign in" | "Sign up" ------------------------------------------
export interface TabEntry<T extends string = string> {
  id: T;
  label: string;
}

// ----- One input of a form ---------------------------------------------------
export interface FormFieldEntry {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "tel";
  placeholder: string;
  autoComplete: string;
  half?: boolean; // true = takes half the row (sits side by side with the next half field)
}

// ----- The words around a form (heading, button, switch link ...) -------------
export interface AuthCopy {
  heading: string;
  subtitle: string;
  submitLabel: string;
  switchPrompt: string; // "New to MegaMart?"
  switchLabel: string; // "Sign up"
  termsLabel?: string; // shown as a checkbox above the button (sign-up only)
}

// ----- A feature row in the dark promo card -----------------------------------
export interface AuthFeature {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

// ----- Compact footer -----------------------------------------------------------
export interface CompactFooterContact {
  id: string;
  label: string;
  value: string;
}

export interface CompactFooterLink {
  id: string;
  label: string;
  href: string;
}

export interface CompactFooterGroup {
  id: string;
  heading: string;
  links: CompactFooterLink[];
}
