/**
 * Footer  (layout component)
 * --------------------------
 * The big blue block at the bottom. Three columns:
 *   1. logo, contact details, app-store badges
 *   2. "Most Popular Categories" links
 *   3. "Customer Services" links
 * plus a copyright line under a thin white line.
 *
 * Props:
 *  - logo, appStoreBadge, playStoreBadge: images
 *  - contacts:   an ARRAY of contact entries (icon, label, value). Footer loops
 *                over it with .map() and draws one ContactItem per entry.
 *  - linkGroups: an ARRAY of groups. Each group has a heading and its OWN array of
 *                links. Footer maps over the groups to draw one FooterLinkList each,
 *                and inside it maps over that group's links to draw the <li> rows.
 *  Both arrays come from src/data/homeData.ts.
 *
 * Re-uses ContactItem and FooterLinkList.
 *
 * Icons come from the react-icons library (Remix "line" set). Which icon each
 * contact uses is stored in the data array (src/data/homeData.ts) as a component,
 * and drawn here with <contact.icon />.
 */
import ContactItem from "./ContactItem";
import FooterLinkList from "./FooterLinkList";
import "./Footer.css";
import type { ContactEntry, FooterGroup } from "../../types/homeTypes";

interface FooterProps {
  logo: string;
  appStoreBadge: string;
  playStoreBadge: string;
  contacts: ContactEntry[];
  linkGroups: FooterGroup[];
}

function Footer({
  logo,
  appStoreBadge,
  playStoreBadge,
  contacts,
  linkGroups,
}: FooterProps) {
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
              {/* One ContactItem per entry of the "contacts" array */}
              {contacts.map((contact) => (
                <ContactItem
                  key={contact.id}
                  label={contact.label}
                  value={contact.value}
                  icon={<contact.icon />}
                />
              ))}
            </div>

            <h3 className="footer__heading footer__heading--app">Download App</h3>

            <div className="footer__badges">
              <img src={appStoreBadge} alt="Download on the App Store" />
              <img src={playStoreBadge} alt="Get it on Google Play" />
            </div>
          </div>

          {/* ----- Columns 2 and 3: one FooterLinkList per group -----
              The OUTER .map() goes through the groups (one column each).
              The INNER .map() goes through that group's links (one <li> each).
              Two .map() calls inside each other = a list inside a list. */}
          {linkGroups.map((group) => (
            <FooterLinkList key={group.id} heading={group.heading}>
              {group.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </FooterLinkList>
          ))}
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
