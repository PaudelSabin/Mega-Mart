/**
 * SignInPage  (page component)
 * ============================
 * The Sign in / Sign up page. Like HomePage it draws very little itself: it
 * takes content from the data files and hands it to components.
 *
 *   Order on the page (top to bottom):
 *     TopBar -> Header -> CategoryNav          (re-used from the home page)
 *     -> Breadcrumb
 *     -> AuthPromoCard (left)  +  AuthPanel (right)
 *     -> CompactFooter
 *
 *   The shared page frame (top bar, header, pills) uses the SAME data as the home
 *   page (src/data/homeData.ts). The content that is only on this page
 *   lives in src/data/signInData.ts.
 *
 *   STATE: "authMode" is "signin" or "signup". The breadcrumb reads it to show
 *   "Sign in" or "Signup". AuthPanel receives it as its starting mode AND a
 *   callback to keep SignInPage in sync when the user clicks the tabs.
 */
import { useState } from "react";
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import CategoryNav from "../components/layout/CategoryNav";
import CompactFooter from "../components/layout/CompactFooter";
import Breadcrumb from "../components/common/Breadcrumb";
import AuthPromoCard from "../components/auth/AuthPromoCard";
import AuthPanel from "../components/auth/AuthPanel";

// Shared with the home page
import { categoryPills, siteContent, topBarItems } from "../data/homeData";
// Only for this page
import {
  authCopy,
  authFields,
  authTabs,
  compactFooterContacts,
  compactFooterContent,
  compactFooterGroups,
  promoContent,
  promoFeatures,
  secureNote,
  signInBreadcrumb,
  signUpBreadcrumb,
} from "../data/signInData";

import "./SignInPage.css";
import type { Page } from "../types/pageTypes";
import type { AuthMode } from "../types/authTypes";

interface SignInPageProps {
  // Called with the name of the page to show ("home" or "signin")
  onNavigate: (page: Page) => void;
}

function SignInPage({ onNavigate }: SignInPageProps) {
  const [authMode, setAuthMode] = useState<AuthMode>("signin");

  return (
    <>
      <TopBar welcomeText={siteContent.welcomeText} items={topBarItems} />
      <Header
        logo={siteContent.headerLogo}
        searchPlaceholder={siteContent.searchPlaceholder}
        onNavigate={onNavigate}
      />
      <CategoryNav pills={categoryPills} defaultActive={categoryPills[0].id} />

      <main className="auth-page container">
        <Breadcrumb
          items={authMode === "signup" ? signUpBreadcrumb : signInBreadcrumb}
          onNavigate={(target) => onNavigate(target as Page)}
        />

        <div className="auth-page__layout">
          <AuthPromoCard
            eyebrow={promoContent.eyebrow}
            title={promoContent.title}
            text={promoContent.text}
            dealTitle={promoContent.dealTitle}
            dealOffer={promoContent.dealOffer}
            image={promoContent.image}
            features={promoFeatures}
          />

          <AuthPanel
            tabs={authTabs}
            copy={authCopy}
            fields={authFields}
            secureNote={secureNote}
            defaultMode={authMode}
            onModeChange={setAuthMode}
          />
        </div>
      </main>

      <CompactFooter
        logo={compactFooterContent.logo}
        tagline={compactFooterContent.tagline}
        contactHeading={compactFooterContent.contactHeading}
        contacts={compactFooterContacts}
        linkGroups={compactFooterGroups}
        copyright={compactFooterContent.copyright}
      />
    </>
  );
}

export default SignInPage;
