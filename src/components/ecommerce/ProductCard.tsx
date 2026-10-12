import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice: string;
  savings: string;
  discount: string;
  image: string;
  /** Height (px) the product image is drawn at. Defaults to 220. */
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
      <div className="product-card__media">
        <img
          className="product-card__image"
          src={image}
          alt={name}
          style={{ height: imageHeight }}
        />
        <div className="product-card__badge">
          <span>{discount}</span>
          <span>OFF</span>
        </div>
      </div>

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
