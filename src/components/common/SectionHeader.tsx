/**
 * SectionHeader  (reusable component)
 * -----------------------------------
 * The title row above each product section:
 *   "Grab the best deal on Smartphones"            View All >
 * with a thin grey line across, and a blue line under the title.
 * Used 4 times (Smartphones, Top Categories, Electronics Brands, Daily Essentials).
 *
 * Props:
 *  - title:     the dark-grey part of the heading
 *  - highlight: the blue part at the end
 *
 * Icons come from the react-icons library (Remix "line" set), imported by name:
 *   import { RiMapPinLine } from "react-icons/ri";
 * so no SVG has to be drawn by hand. An icon takes its colour from the CSS
 * "color" of its parent and its size from the CSS (or a size={...} prop).
 */
import "./SectionHeader.css";
import { RiArrowRightSLine } from "react-icons/ri";

interface SectionHeaderProps {
  title: string;
  highlight: string;
}

function SectionHeader({ title, highlight }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h2 className="section-header__title">
        {title} <span className="section-header__highlight">{highlight}</span>
      </h2>

      <a className="section-header__link" href="#">
        View All
        <RiArrowRightSLine />
      </a>
    </div>
  );
}

export default SectionHeader;
