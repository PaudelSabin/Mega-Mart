/**
 * ProductCard  (reusable component)
 * ---------------------------------
 * One phone in the "Smartphones" section: grey image area with a blue
 * "56% OFF" tag, then name, price, crossed-out old price and a green
 * "Save" line. Used 5 times in HomePage.tsx with different props.
 *
 * Props:
 *  - name, price, oldPrice, savings: text shown on the card
 *  - discount:    the percentage shown in the badge, e.g. "56%"
 *  - image:       phone picture
 *  - imageHeight: optional, how tall (px) to draw the picture. The supplied
 *                 pictures have different amounts of empty space around the
 *                 phone, so each card can tune its own size. Default 220.
 *  - selected:    optional, shows the blue "selected" outline (hover does too)
 */
import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice: string;
  savings: string;
  discount: string;
  image: string;
  imageHeight?: number;
  selected?: boolean;
}

function ProductCard({
  name,
  price,
  oldPrice,
  savings,
  discount,
  image,
  imageHeight = 220,
  selected = false,
}: ProductCardProps) {
  return (
    <article
      className={selected ? "product-card product-card--selected" : "product-card"}
    >
      {/* Grey top area with the picture and the discount badge */}
      <div className="product-card__media">
        <img
          className="product-card__image"
          src={image}
          alt={name}
          style={{ height: imageHeight }} // value differs per card, so it is set here
        />
        <div className="product-card__badge">
          <span>{discount}</span>
          <span>OFF</span>
        </div>
      </div>

      {/* White bottom area with the text */}
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__prices">
          <span className="product-card__price">{price}</span>
          <span className="product-card__old-price">{oldPrice}</span>
        </p>
        <p className="product-card__savings">{savings}</p>
      </div>
    </article>
  );
}

export default ProductCard;
