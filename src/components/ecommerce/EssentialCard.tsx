/**
 * EssentialCard  (reusable component)
 * -----------------------------------
 * A grey square tile with a picture, and under it a name and an offer
 * ("Fruits / UP to 50% OFF"). Used 6 times in the "Daily Essentials" section.
 *
 * Props:
 *  - name, offer: the two text lines under the tile
 *  - image:       the picture
 *  - imageWidth:  width (px) the picture is drawn at inside the tile
 *  - selected:    optional, shows the blue outline (hover does too)
 */
import "./EssentialCard.css";

interface EssentialCardProps {
  name: string;
  offer: string;
  image: string;
  imageWidth: number;
  selected?: boolean;
}

function EssentialCard({
  name,
  offer,
  image,
  imageWidth,
  selected = false,
}: EssentialCardProps) {
  return (
    <article className="essential-card">
      <div
        className={
          selected
            ? "essential-card__tile essential-card__tile--selected"
            : "essential-card__tile"
        }
      >
        <img
          className="essential-card__image"
          src={image}
          alt={name}
          style={{ width: imageWidth }}
        />
      </div>
      <h3 className="essential-card__name">{name}</h3>
      <p className="essential-card__offer">{offer}</p>
    </article>
  );
}

export default EssentialCard;
