/**
 * TopBarItem  (reusable component)
 * --------------------------------
 * One small "icon + text" item in the grey top strip,
 * e.g. [pin icon] Deliver to 423651
 *
 * The same component is used 3 times in TopBar.tsx. Each time the parent
 * passes different props, but this component never changes.
 *
 * Props:
 *  - icon:      the SVG icon to show (any React element)
 *  - label:     the normal text, e.g. "Deliver to"
 *  - highlight: optional bold text after the label, e.g. "423651"
 */
import type { ReactNode } from "react";
import "./TopBarItem.css";

interface TopBarItemProps {
  icon: ReactNode;
  label: string;
  highlight?: string; // "?" = optional, only some items have a bold part
}

function TopBarItem({ icon, label, highlight }: TopBarItemProps) {
  return (
    <div className="topbar-item">
      <span className="topbar-item__icon">{icon}</span>
      <span>
        {label}
        {/* Only render the bold part when a highlight was passed in */}
        {highlight && (
          <>
            {" "}
            <strong className="topbar-item__highlight">{highlight}</strong>
          </>
        )}
      </span>
    </div>
  );
}

export default TopBarItem;
