/**
 * AuthPromoCard  (page section component)
 * =======================================
 * The dark navy card on the left of the sign-in page:
 *
 *   +----------------------------------+
 *   | MORE WITH MEGAMART       .-ring-.|
 *   | Your everyday favourites.|      ||
 *   | One account.             '------'|
 *   | From daily essentials ...        |
 *   | Big brands.         [watch]      |
 *   | Bigger savings.                  |
 *   | UP to 80% OFF                    |
 *   |----------------------------------|
 *   | (icon) Great deals, every day    |
 *   | (icon) Shopping made simple      |
 *   | (icon) Every order in one place  |
 *   +----------------------------------+
 *
 * Props (the page decides the content, this component only presents it):
 *  - eyebrow, title, text:  the small tag, the headline and the paragraph
 *  - dealTitle, dealOffer:  the two text lines next to the watch
 *  - image:                 the watch picture
 *  - features:              an ARRAY of { id, icon, title, description }.
 *                           AuthPromoCard loops over it with .map() and draws
 *                           one FeatureItem per entry.
 *
 * The colours (#212844 card, #2C3454 shapes, #3C466B ring) are the same ones the
 * home page hero banner uses.
 */
import FeatureItem from "./FeatureItem";
import type { AuthFeature } from "../../types/authTypes";
import "./AuthPromoCard.css";

interface AuthPromoCardProps {
  eyebrow: string;
  title: string;
  text: string;
  dealTitle: string;
  dealOffer: string;
  image: string;
  features: AuthFeature[];
}

function AuthPromoCard({
  eyebrow,
  title,
  text,
  dealTitle,
  dealOffer,
  image,
  features,
}: AuthPromoCardProps) {
  return (
    <aside className="promo-card" aria-label="Why join MegaMart">
      {/* Decorative shapes in the top-right corner (purely visual) */}
      <span className="promo-card__ring" aria-hidden="true" />
      <span className="promo-card__disc" aria-hidden="true" />

      <div className="promo-card__body">
        <p className="promo-card__eyebrow">{eyebrow}</p>
        <h2 className="promo-card__title">{title}</h2>
        <p className="promo-card__text">{text}</p>

        {/* Deal text on the left, watch on the right */}
        <div className="promo-card__deal">
          <div>
            <p className="promo-card__deal-title">{dealTitle}</p>
            <p className="promo-card__deal-offer">{dealOffer}</p>
          </div>
          {/* alt="" because the picture is decoration */}
          <img className="promo-card__watch" src={image} alt="" />
        </div>

        {/* One FeatureItem per entry of the "features" array */}
        <ul className="promo-card__features">
          {features.map((feature) => (
            <FeatureItem
              key={feature.id}
              icon={<feature.icon />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default AuthPromoCard;
