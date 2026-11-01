/**
 * CategoryCard  (reusable component)
 * ----------------------------------
 * A grey circle with a picture and a label under it
 * (Mobile, Cosmetics, Electronics, ...). Used 7 times in HomePage.tsx.
 *
 * Props:
 *  - label:     text under the circle (also the image's alt text)
 *  - image:     the picture
 *  - imageSize: optional width (px) of the picture inside the circle. Leave
 *               it out for photos that should fill the whole circle; set it
 *               for cut-out images that have empty space around them.
 *  - selected:  optional, true = the circle shows the blue outline
 *  - onSelect:  optional, runs when the card is clicked (or Enter / Space is
 *               pressed). The PARENT remembers which card is selected.
 *
 * EFFECTS
 *   - hover:    the circle lifts 6px with a blue outline, the picture zooms in
 *               and the label turns blue
 *   - press:    the circle sinks back
 *   - selected: the circle does a short "pop" when it becomes selected
 *   - keyboard: focus it with Tab, select it with Enter or Space
 */
import "./CategoryCard.css";

interface CategoryCardProps {
  label: string;
  image: string;
  imageSize?: number;
  selected?: boolean;
  onSelect?: () => void;
}

function CategoryCard({
  label,
  image,
  imageSize,
  selected = false,
  onSelect,
}: CategoryCardProps) {
  return (
    <article
      className={selected ? "category-card category-card--selected" : "category-card"}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect?.();
        }
      }}
    >
      <div className="category-card__circle">
        <img
          className={
            imageSize
              ? "category-card__image category-card__image--sized"
              : "category-card__image"
          }
          src={image}
          alt={label}
          style={imageSize ? { width: imageSize } : undefined}
        />
      </div>
      <p className="category-card__label">{label}</p>
    </article>
  );
}

export default CategoryCard;
