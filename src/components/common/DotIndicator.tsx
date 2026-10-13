/**
 * DotIndicator  (reusable component)
 * ----------------------------------
 * The row of 7 small dots under a slider. One dot is longer and brighter:
 * that is the "active" one.
 *
 * Props:
 *  - activeIndex: which dot is active (0 = first ... 6 = last)
 *
 * The 7 dots are written out one by one on purpose (no loop / .map()), which
 * matches the task rule about not generating repeated UI from arrays.
 */
import "./DotIndicator.css";

interface DotIndicatorProps {
  activeIndex: number;
}

// Returns the CSS classes for dot number "position"
function dotClass(activeIndex: number, position: number) {
  return activeIndex === position
    ? "dot-indicator__dot dot-indicator__dot--active"
    : "dot-indicator__dot";
}

function DotIndicator({ activeIndex }: DotIndicatorProps) {
  return (
    <div className="dot-indicator">
      <span className={dotClass(activeIndex, 0)} />
      <span className={dotClass(activeIndex, 1)} />
      <span className={dotClass(activeIndex, 2)} />
      <span className={dotClass(activeIndex, 3)} />
      <span className={dotClass(activeIndex, 4)} />
      <span className={dotClass(activeIndex, 5)} />
      <span className={dotClass(activeIndex, 6)} />
    </div>
  );
}

export default DotIndicator;
