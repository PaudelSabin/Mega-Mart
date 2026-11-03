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
 */
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
} from "../data/signInData";

import "./SignInPage.css";
import type { Page } from "../types/pageTypes";

interface SignInPageProps {
  // Called with the name of the page to show ("home" or "signin")
  onNavigate: (page: Page) => void;
}

function SignInPage({ onNavigate }: SignInPageProps) {
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
          items={signInBreadcrumb}
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
