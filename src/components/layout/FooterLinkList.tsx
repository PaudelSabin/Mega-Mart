import type { ReactNode } from "react";
import "./FooterLinkList.css";

interface FooterLinkListProps {
  heading: string;
  /** The <li> items of the list, written out by the parent */
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
