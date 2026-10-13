/**
 * HeroBanner  (ecommerce component)
 * =================================
 * The big dark-blue banner at the top of the page.
 *
 *   +--------------------------------------------------------------+
 *   | (<)  Best Deal Online on smart watches        .--circle--.   (>)|
 *   |      SMART WEARABLE.                          |  [watch] |     |
 *   |      UP to 80% OFF                            '----------'     |
 *   |      o o o o o o o   (dots)                                    |
 *   +--------------------------------------------------------------+
 *
 * WHAT IT SHOWS
 *   - three lines of text on the left
 *   - the smart-watch picture on the right
 *   - two semicircle pictures behind the watch (they come from Figma)
 *   - a round arrow button on each side
 *   - a row of 7 dots at the bottom-left
 *
 * PROPS  (the page decides the content, this component only presents it)
 *   subtitle   - small line above the title
 *   title      - the big bold headline
 *   offer      - the line under the title
 *   image      - the watch picture
 *   circleFill - the filled half-circle picture (hero_circle.png)
 *   circleLine - the thin outline ring picture (hero_circle_line.png)
 *
 * It re-uses two smaller components: CarouselArrow (x2) and DotIndicator.
 */
import CarouselArrow from "../common/CarouselArrow";
import DotIndicator from "../common/DotIndicator";
import "./HeroBanner.css";

// TypeScript "interface": lists every prop and its type.
interface HeroBannerProps {
  subtitle: string;
  title: string;
  offer: string;
  image: string;
  circleFill: string;
  circleLine: string;
}

function HeroBanner({
  subtitle,
  title,
  offer,
  image,
  circleFill,
  circleLine,
}: HeroBannerProps) {
  return (
    // .container keeps the banner 1200px wide and centred (see index.css)
    <section className="hero container">
      {/* .hero__banner is the positioning parent: everything inside is placed
          with "position: absolute" relative to this 1200 x 316 box. */}
      <div className="hero__banner">
        {/* ---------- Layer 1: background colour + decoration ----------
            Kept as its own layer because it must CLIP (cut off) the circles at
            the rounded banner edge, while the arrows (layer 2) must NOT be
            clipped, since they hang half outside the banner. */}
        <div className="hero__background" aria-hidden="true">
          {/* The ring is drawn first, so the filled half-circle sits on top */}
          <img className="hero__circle-line" src={circleLine} alt="" />
          <img className="hero__circle-fill" src={circleFill} alt="" />

          {/* Two small decorative circles that rise from the bottom edge,
              drawn with CSS (they are very faint in the design) */}
          <span className="hero__bubble hero__bubble--large" />
          <span className="hero__bubble hero__bubble--small" />
        </div>

        {/* ---------- Layer 2: arrow buttons ----------
            Each one is wrapped in a div, because the POSITION (left / right
            edge) belongs to the hero, while CarouselArrow only draws a button. */}
        <div className="hero__arrow hero__arrow--left">
          <CarouselArrow direction="left" />
        </div>
        <div className="hero__arrow hero__arrow--right">
          <CarouselArrow direction="right" />
        </div>

        {/* ---------- Layer 3: text ---------- */}
        <div className="hero__content">
          <p className="hero__subtitle">{subtitle}</p>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__offer">{offer}</p>
        </div>

        {/* ---------- Layer 4: watch picture (alt="" because it is decoration) ---------- */}
        <img className="hero__image" src={image} alt="" />

        {/* ---------- Layer 5: dots, first one is the active slide ---------- */}
        <div className="hero__dots">
          <DotIndicator activeIndex={0} />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
