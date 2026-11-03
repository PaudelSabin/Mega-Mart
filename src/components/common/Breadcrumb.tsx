/**
 * Breadcrumb  (reusable component)
 * --------------------------------
 * The small "Home > Sign in" trail above a page.
 *
 * Props:
 *  - items:      an ARRAY of { id, label, target? }. Breadcrumb loops over it with
 *                .map(). An item WITH a target is a link; the LAST item has none
 *                and is the current page (aria-current="page").
 *  - onNavigate: optional. Called with the item's target when a link is clicked.
 *                The PARENT decides what that means (App.tsx changes its page state).
 */
import { Fragment } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import type { BreadcrumbEntry } from "../../types/authTypes";
import "./Breadcrumb.css";

interface BreadcrumbProps {
  items: BreadcrumbEntry[];
  onNavigate?: (target: string) => void;
}

function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            {/* An arrow before every item except the first one */}
            {index > 0 && (
              <li className="breadcrumb__separator" aria-hidden="true">
                <RiArrowRightSLine />
              </li>
            )}
            <li>
              {item.target ? (
                // href="#" + preventDefault: it looks like a link, but the page
                // changes through state, not through the address bar
                <a
                  className="breadcrumb__link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate?.(item.target!);
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span className="breadcrumb__current" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
