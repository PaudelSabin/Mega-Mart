/**
 * DotIndicator  (reusable component)
 * ----------------------------------
 * The row of 7 small dots under a slider. One dot is longer and brighter:
 * that is the "active" one.
 *
 * Props:
 *  - activeIndex: which dot is active (0 = first ... 6 = last)
 *  - onSelect:    optional. Called with the dot's number when a dot is clicked.
 *                 The PARENT keeps the state (which dot is active) and passes it
 *                 back down as activeIndex. This pattern is called a
 *                 "controlled component".
 *
 * The 7 dots are made by looping over a small array of positions with .map().
 *
 * EFFECTS: the active dot stretches into a pill (CSS transition on width),
 * dots grow slightly on hover, and they are real <button>s, so they can be
 * reached with the keyboard.
 */
import "./DotIndicator.css";

interface DotIndicatorProps {
  activeIndex: number;
  onSelect?: (index: number) => void; // "?" = optional
}

// The 7 dot positions: dot 0, dot 1 ... dot 6. We loop over this array to draw them.
const DOT_POSITIONS = [0, 1, 2, 3, 4, 5, 6];

// Returns the CSS classes for dot number "position"
function dotClass(activeIndex: number, position: number) {
  return activeIndex === position
    ? "dot-indicator__dot dot-indicator__dot--active"
    : "dot-indicator__dot";
}

function DotIndicator({ activeIndex, onSelect }: DotIndicatorProps) {
  return (
    <div className="dot-indicator" role="group" aria-label="Choose a slide">
      {/* One <button> per position. The number itself is unique, so it is the key.
          onSelect?.(position) means: "call onSelect with this number, but only
          if a parent gave us one". */}
      {DOT_POSITIONS.map((position) => (
        <button
          key={position}
          type="button"
          className={dotClass(activeIndex, position)}
          aria-label={`Slide ${position + 1}`}
          onClick={() => onSelect?.(position)}
        />
      ))}
    </div>
  );
}

export default DotIndicator;
