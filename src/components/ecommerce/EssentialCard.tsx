import "./EssentialCard.css";

interface EssentialCardProps {
  name: string;
  offer: string;
  image: string;
  /** Width (px) the image is drawn at inside the tile. */
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
