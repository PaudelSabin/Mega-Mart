/**
 * Footer  (layout component)
 * --------------------------
 * The big blue block at the bottom. Three columns:
 *   1. logo, contact details, app-store badges
 *   2. "Most Popular Categories" links
 *   3. "Customer Services" links
 * plus a copyright line under a thin white line.
 *
 * Props: logo (white logo image), appStoreBadge, playStoreBadge (images)
 * Re-uses ContactItem (x2) and FooterLinkList (x2).
 */
import ContactItem from "./ContactItem";
import FooterLinkList from "./FooterLinkList";
import "./Footer.css";

interface FooterProps {
  logo: string;
  appStoreBadge: string;
  playStoreBadge: string;
}

function Footer({ logo, appStoreBadge, playStoreBadge }: FooterProps) {
  return (
    <footer className="footer">
      {/* Decorative translucent circles in the bottom-right (purely visual) */}
      <span className="footer__circle footer__circle--outer" aria-hidden="true" />
      <span className="footer__circle footer__circle--inner" aria-hidden="true" />

      <div className="container footer__inner">
        <div className="footer__top">
          {/* ----- Column 1: brand, contact, app badges ----- */}
          <div className="footer__brand">
            <img className="footer__logo" src={logo} alt="MegaMart" />

            <h3 className="footer__heading">Contact Us</h3>

            <div className="footer__contacts">
              <ContactItem
                label="Whats App"
                value="+1 202-918-2132"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-4.8A9 9 0 1 1 8 19.4L3 21z" />
                    <path d="M9 8.5c0 3.5 2.5 6.5 6.5 6.5l1-1.4-2-1-1 .8c-.9-.4-1.6-1.2-2-2l.8-1-1-2L9 8.5z" />
                  </svg>
                }
              />
              <ContactItem
                label="Call Us"
                value="+1 202-918-2132"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                }
              />
            </div>

            <h3 className="footer__heading footer__heading--app">Download App</h3>

            <div className="footer__badges">
              <img src={appStoreBadge} alt="Download on the App Store" />
              <img src={playStoreBadge} alt="Get it on Google Play" />
            </div>
          </div>

          {/* ----- Column 2: links written out one by one (no .map) ----- */}
          <FooterLinkList heading="Most Popular Categories">
            <li><a href="#">Staples</a></li>
            <li><a href="#">Beverages</a></li>
            <li><a href="#">Personal Care</a></li>
            <li><a href="#">Home Care</a></li>
            <li><a href="#">Baby Care</a></li>
            <li><a href="#">Vegetables &amp; Fruits</a></li>
            <li><a href="#">Snacks &amp; Foods</a></li>
            <li><a href="#">Dairy &amp; Bakery</a></li>
          </FooterLinkList>

          {/* ----- Column 3 ----- */}
          <FooterLinkList heading="Customer Services">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">E-waste Policy</a></li>
            <li><a href="#">Cancellation &amp; Return Policy</a></li>
          </FooterLinkList>
        </div>

        {/* ----- Copyright line ----- */}
        <div className="footer__bottom">
          <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
