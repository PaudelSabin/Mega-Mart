/**
 * NavPill  (reusable component)
 * -----------------------------
 * One rounded category button with a small down-arrow, e.g. "Fashion v".
 * Used 8 times inside CategoryNav.
 *
 * Props:
 *  - label:   the text on the button
 *  - active:  when true the pill is filled blue (the selected category)
 *  - onClick: optional. Runs when the pill is clicked. CategoryNav uses it to
 *             tell React which pill is now the active one.
 *
 * Icons come from the react-icons library (Remix "line" set), imported by name:
 *   import { RiArrowDownSLine } from "react-icons/ri";
 * so no SVG has to be drawn by hand. An icon takes its colour from the CSS
 * "color" of its parent and its size from the CSS (or a size={...} prop).
 *
 * EFFECTS: the pill lifts up on hover, sinks when pressed, and the arrow
 * flips upside-down when the pill is the active one.
 */
import "./NavPill.css";
import { RiArrowDownSLine } from "react-icons/ri";

interface NavPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavPill({ label, active = false, onClick }: NavPillProps) {
  return (
    <button
      type="button"
      // Add the "--active" modifier class only for the selected pill
      className={active ? "nav-pill nav-pill--active" : "nav-pill"}
      aria-pressed={active} // tells screen readers which pill is selected
      onClick={onClick}
    >
      <span>{label}</span>
      <RiArrowDownSLine className="nav-pill__chevron" />
    </button>
  );
}

export default NavPill;
