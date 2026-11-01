/**
 * CarouselArrow  (reusable component)
 * -----------------------------------
 * A big round (pale blue) button with a left or right arrow, used on both
 * sides of the hero banner.
 *
 * Props:
 *  - direction: "left" or "right" (a TypeScript "union type", so any other
 *               value is a compile error)
 *  - onClick:   optional. The function to run when the button is clicked. The
 *               parent decides what "next" and "previous" mean.
 *
 * Icons come from the react-icons library (Remix "line" set), imported by name:
 *   import { RiArrowLeftSLine } from "react-icons/ri";
 * so no SVG has to be drawn by hand. An icon takes its colour from the CSS
 * "color" of its parent and its size from the CSS (or a size={...} prop).
 *
 * EFFECTS: on hover the button grows and its arrow slides a little in the
 * direction it points; when pressed it shrinks back.
 */
import "./CarouselArrow.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick?: () => void;
}

function CarouselArrow({ direction, onClick }: CarouselArrowProps) {
  return (
    <button
      type="button"
      // The modifier class lets the CSS slide the arrow the right way on hover
      className={`carousel-arrow carousel-arrow--${direction}`}
      // Screen readers announce this label because the button has no text
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
      onClick={onClick}
    >
      {direction === "left" ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
    </button>
  );
}

export default CarouselArrow;
