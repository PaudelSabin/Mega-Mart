import "./DotIndicator.css";

interface DotIndicatorProps {
  /** Which of the 7 dots is the active one (0 to 6) */
  activeIndex: number;
}

function dotClass(activeIndex: number, position: number) {
  return activeIndex === position ? "dot-indicator__dot dot-indicator__dot--active" : "dot-indicator__dot";
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
