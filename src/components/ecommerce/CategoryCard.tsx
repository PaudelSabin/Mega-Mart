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
 *  - selected:  optional, shows the blue outline (hover does too)
 */
import "./CategoryCard.css";

interface CategoryCardProps {
  label: string;
  image: string;
  imageSize?: number;
  selected?: boolean;
}

function CategoryCard({
  label,
  image,
  imageSize,
  selected = false,
}: CategoryCardProps) {
  return (
    <article className="category-card">
      <div
        className={
          selected
            ? "category-card__circle category-card__circle--selected"
            : "category-card__circle"
        }
      >
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
