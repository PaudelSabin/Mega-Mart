import "./CarouselArrow.css";

interface CarouselArrowProps {
  direction: "left" | "right";
}

function CarouselArrow({ direction }: CarouselArrowProps) {
  return (
    <button
      type="button"
      className="carousel-arrow"
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
