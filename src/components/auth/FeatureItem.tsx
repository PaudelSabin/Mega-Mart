/**
 * FeatureItem  (reusable component)
 * ---------------------------------
 * One row of the dark promo card: a small icon tile, a bold title and a
 * one-line description.
 *
 * Props: icon (any React element), title, description
 */
import type { ReactNode } from "react";
import "./FeatureItem.css";

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <li className="feature-item">
      <span className="feature-item__icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <h3 className="feature-item__title">{title}</h3>
        <p className="feature-item__description">{description}</p>
      </div>
    </li>
  );
}

export default FeatureItem;
