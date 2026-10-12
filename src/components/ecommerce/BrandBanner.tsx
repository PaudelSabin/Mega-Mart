import "./BrandBanner.css";

interface BrandBannerProps {
  brand: string;
  logo: string;
  image: string;
  offerText: string;
  theme: "dark" | "yellow" | "peach";
  /** Height (px) the phone image is drawn at. */
  imageHeight: number;
}

function BrandBanner({
  brand,
  logo,
  image,
  offerText,
  theme,
  imageHeight,
}: BrandBannerProps) {
  return (
    <article className={`brand-banner brand-banner--${theme}`}>
      <span className="brand-banner__circle" aria-hidden="true" />

      <div className="brand-banner__text">
        <span className="brand-banner__tag">{brand}</span>
        <img className="brand-banner__logo" src={logo} alt={brand} />
        <p className="brand-banner__offer">{offerText}</p>
      </div>

      <img
        className="brand-banner__image"
        src={image}
        alt=""
        style={{ height: imageHeight }}
      />
    </article>
  );
}

export default BrandBanner;
