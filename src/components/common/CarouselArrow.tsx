/**
 * CarouselArrow  (reusable component)
 * -----------------------------------
 * A big white round button with a left or right arrow, used on both sides
 * of the hero banner.
 *
 * Props:
 *  - direction: "left" or "right" (a TypeScript "union type", so any other
 *               value is a compile error)
 *
 * It does not slide anything yet; it only presents the button.
 */
import "./CarouselArrow.css";

interface CarouselArrowProps {
  direction: "left" | "right";
}

function CarouselArrow({ direction }: CarouselArrowProps) {
  return (
    <button
      type="button"
      className="carousel-arrow"
      // Screen readers announce this label because the button has no text
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Pick the arrow shape from the prop */}
        {direction === "left" ? (
          <path d="M15 5l-7 7 7 7" />
        ) : (
          <path d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default CarouselArrow;
