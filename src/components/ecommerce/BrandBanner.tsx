/**
 * BrandBanner  (reusable component)
 * =================================
 * One coloured card of the "Top Electronics Brands" section:
 *
 *   +------------------------------------+
 *   | [IPHONE]                 .-circle-.|
 *   |  [logo]                  | [phone]||
 *   |  UP to 80% OFF           '--------'|
 *   +------------------------------------+
 *
 * The SAME component is used 3 times in HomePage.tsx (iPhone, Realme,
 * Xiaomi). Only the props change: colours, logo, phone picture, circle picture.
 *
 * PROPS
 *   brand       - text inside the small tag (also used as the logo's alt text)
 *   logo        - the brand logo picture
 *   image       - the phone picture on the right
 *   circle      - the circle picture drawn in the top-right corner (from Figma)
 *   offerText   - the offer line, e.g. "UP to 80% OFF"
 *   theme       - "dark" | "yellow" | "peach": picks the card colours in the CSS
 *   imageHeight - height (px) the phone picture is drawn at. The supplied
 *                 pictures have different empty space around the phone, so each
 *                 card tunes its own size.
 */
import "./BrandBanner.css";

interface BrandBannerProps {
  brand: string;
  logo: string;
  image: string;
  circle: string;
  offerText: string;
  // "union type": only these three words are allowed, anything else is a TS error
  theme: "dark" | "yellow" | "peach";
  imageHeight: number;
}

function BrandBanner({
  brand,
  logo,
  image,
  circle,
  offerText,
  theme,
  imageHeight,
}: BrandBannerProps) {
  return (
    // The class becomes e.g. "brand-banner brand-banner--dark".
    // The "--dark" part is what the CSS uses to pick the colours.
    <article className={`brand-banner brand-banner--${theme}`}>
      {/* Circle picture in the top-right corner (decoration, so alt="") */}
      <img className="brand-banner__circle" src={circle} alt="" />

      {/* Left side: tag, logo and offer text, stacked in a column */}
      <div className="brand-banner__text">
        <span className="brand-banner__tag">{brand}</span>
        <img className="brand-banner__logo" src={logo} alt={brand} />
        <p className="brand-banner__offer">{offerText}</p>
      </div>

      {/* Phone picture. The height differs per card, so it is set inline here */}
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
