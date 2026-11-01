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
 *  - selected:    optional, true = the tile shows the blue outline
 *  - onSelect:    optional, runs when the card is clicked (or Enter / Space is
 *                 pressed). The PARENT remembers which card is selected.
 *
 * EFFECTS
 *   - hover:    the tile lifts 6px with a blue outline, the picture zooms and
 *               tilts a little, and the name turns blue
 *   - press:    the tile sinks back
 *   - selected: a short "pop" when the tile becomes selected
 *   - keyboard: focus it with Tab, select it with Enter or Space
 */
import "./EssentialCard.css";

interface EssentialCardProps {
  name: string;
  offer: string;
  image: string;
  imageWidth: number;
  selected?: boolean;
  onSelect?: () => void;
}

function EssentialCard({
  name,
  offer,
  image,
  imageWidth,
  selected = false,
  onSelect,
}: EssentialCardProps) {
  return (
    <article
      className={selected ? "essential-card essential-card--selected" : "essential-card"}
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
      <div className="essential-card__tile">
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
