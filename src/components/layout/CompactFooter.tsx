/**
 * CompactFooter  (layout component)
 * ---------------------------------
 * A shorter version of the blue footer, used on simple pages such as Sign in.
 * (The home page uses the bigger Footer with the app-store badges.)
 *
 *   [logo]                Contact Us          Customer Services
 *   tagline               Whats App : ...     About Us   Terms & Conditions
 *                         Call Us : ...       FAQ        Privacy Policy
 *   ------------------------------------------------------------------
 *                          copyright line
 *
 * Props:
 *  - logo, tagline, copyright:  the white logo and the two texts
 *  - contactHeading:            the heading of the contact column
 *  - contacts:   an ARRAY of { id, label, value }, drawn with .map()
 *  - linkGroups: an ARRAY of groups. Each group has a heading and its OWN array
 *                of links (a .map() inside a .map(), like in Footer.tsx).
 */
import type {
  CompactFooterContact,
  CompactFooterGroup,
} from "../../types/authTypes";
import "./CompactFooter.css";

interface CompactFooterProps {
  logo: string;
  tagline: string;
  contactHeading: string;
  contacts: CompactFooterContact[];
  linkGroups: CompactFooterGroup[];
  copyright: string;
}

function CompactFooter({
  logo,
  tagline,
  contactHeading,
  contacts,
  linkGroups,
  copyright,
}: CompactFooterProps) {
  return (
    <footer className="compact-footer">
      <div className="container">
        <div className="compact-footer__top">
          {/* ----- Brand ----- */}
          <div className="compact-footer__brand">
            <img className="compact-footer__logo" src={logo} alt="MegaMart" />
            <p className="compact-footer__tagline">{tagline}</p>
          </div>

          {/* ----- Contact ----- */}
          <div>
            <h3 className="compact-footer__heading">{contactHeading}</h3>
            <ul className="compact-footer__list">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  {contact.label} : {contact.value}
                </li>
              ))}
            </ul>
          </div>

          {/* ----- Link groups (outer map = groups, inner map = links) ----- */}
          {linkGroups.map((group) => (
            <div key={group.id}>
              <h3 className="compact-footer__heading">{group.heading}</h3>
              <ul className="compact-footer__list compact-footer__list--columns">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <a className="compact-footer__link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="compact-footer__bottom">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default CompactFooter;
