/**
 * FooterLinkList  (reusable component)
 * ------------------------------------
 * A white heading with an underline, and a bulleted list of links below it.
 * Used twice in the footer: "Most Popular Categories" and "Customer Services".
 *
 * Props:
 *  - heading:  the title text
 *  - children: the <li> items. The parent writes each link out by hand, which
 *              keeps us inside the "no .map()" rule of the task.
 */
import type { ReactNode } from "react";
import "./FooterLinkList.css";

interface FooterLinkListProps {
  heading: string;
  children: ReactNode;
}

function FooterLinkList({ heading, children }: FooterLinkListProps) {
  return (
    <div className="footer-links">
      <h3 className="footer-links__heading">{heading}</h3>
      <ul className="footer-links__list">{children}</ul>
    </div>
  );
}

export default FooterLinkList;
