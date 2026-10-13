/**
 * NavPill  (reusable component)
 * -----------------------------
 * One rounded category button with a small down-arrow, e.g. "Fashion v".
 * Used 8 times inside CategoryNav.
 *
 * Props:
 *  - label:  the text on the button
 *  - active: when true the pill is filled blue (the selected category)
 */
import "./NavPill.css";

interface NavPillProps {
  label: string;
  active?: boolean;
}

function NavPill({ label, active = false }: NavPillProps) {
  return (
    <button
      type="button"
      // Add the "--active" modifier class only for the selected pill
      className={active ? "nav-pill nav-pill--active" : "nav-pill"}
    >
      <span>{label}</span>
      <svg
        className="nav-pill__chevron"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

export default NavPill;
