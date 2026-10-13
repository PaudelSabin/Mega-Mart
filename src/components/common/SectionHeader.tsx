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
 */
import "./SectionHeader.css";

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
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

export default SectionHeader;
