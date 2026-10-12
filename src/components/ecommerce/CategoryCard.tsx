import "./CategoryCard.css";

interface CategoryCardProps {
  label: string;
  image: string;
  /** Width (px) of the image inside the circle. Leave out to fill the circle. */
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
