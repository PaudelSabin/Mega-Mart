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
 * IT IS A WORKING SLIDER (this component owns its own STATE)
 *   - "active" remembers which of the 7 slides is showing
 *   - the arrows go to the previous / next slide (and wrap around)
 *   - the dots jump straight to a slide
 *   - it moves on by itself every 5 seconds (autoplay), and PAUSES while the
 *     mouse is over the banner or a button inside it has keyboard focus
 *   - it does not autoplay for people who chose "reduce motion" in their system
 *
 * NOTE: only ONE slide of content was supplied, so all 7 slides show the same
 * banner. Each change replays the entrance animation (the text slides in, the
 * watch slides in). To give a slide different content, pass different props.
 *
 * It re-uses two smaller components: CarouselArrow (x2) and DotIndicator.
 */
import { useEffect, useState } from "react";
import CarouselArrow from "../common/CarouselArrow";
import DotIndicator from "../common/DotIndicator";
import "./HeroBanner.css";

// How many slides there are (= how many dots) and how long each one stays.
const SLIDE_COUNT = 7;
const AUTOPLAY_MS = 5000;

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
  // STATE = data that can change while the page is open. When a setter such as
  // setActive is called, React draws the component again with the new value.
  const [active, setActive] = useState(0); // which slide is showing (0 to 6)
  const [paused, setPaused] = useState(false); // true while the user is interacting

  // Go to the previous / next slide. "% SLIDE_COUNT" makes the numbers wrap
  // around: after the last slide (6) comes the first one (0) again.
  const goPrevious = () => setActive((i) => (i - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const goNext = () => setActive((i) => (i + 1) % SLIDE_COUNT);

  // AUTOPLAY: every time "active" or "paused" changes, start a fresh 5-second
  // timer. Because "active" is in the list below, clicking an arrow or a dot
  // restarts the countdown, so the slide never jumps right after you clicked.
  useEffect(() => {
    if (paused) return; // do nothing while paused
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(goNext, AUTOPLAY_MS);
    // The function returned here runs before the next timer starts (cleanup)
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  return (
    // .container keeps the banner 1200px wide and centred (see index.css)
    <section className="hero container">
      {/* .hero__banner is the positioning parent: everything inside is placed
          with "position: absolute" relative to this 1200 x 316 box.
          The mouse / focus handlers pause the autoplay. */}
      <div
        className="hero__banner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* ---------- Layer 1: background colour + decoration ----------
            Kept as its own layer because it must CLIP (cut off) the circles at
            the rounded banner edge, while the arrows (layer 2) must NOT be
            clipped, since they hang half outside the banner. */}
        <div className="hero__background" aria-hidden="true">
          {/* The ring is drawn first, so the filled half-circle sits on top */}
          <img className="hero__circle-line" src={circleLine} alt="" />
          <img className="hero__circle-fill" src={circleFill} alt="" />

          {/* Two circles that rise from the bottom edge, drawn with CSS.
              EFFECT: they float slowly up and down. */}
          <span className="hero__bubble hero__bubble--large" />
          <span className="hero__bubble hero__bubble--small" />
        </div>

        {/* ---------- Layer 2: arrow buttons ----------
            Each one is wrapped in a div, because the POSITION (left / right
            edge) belongs to the hero, while CarouselArrow only draws a button. */}
        <div className="hero__arrow hero__arrow--left">
          <CarouselArrow direction="left" onClick={goPrevious} />
        </div>
        <div className="hero__arrow hero__arrow--right">
          <CarouselArrow direction="right" onClick={goNext} />
        </div>

        {/* ---------- Layer 3: text ----------
            key={active}: when the key changes, React throws the old element away
            and builds a NEW one, which makes the CSS entrance animation play
            again on every slide change. */}
        <div className="hero__content" key={`text-${active}`}>
          <p className="hero__subtitle">{subtitle}</p>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__offer">{offer}</p>
        </div>

        {/* ---------- Layer 4: watch picture (alt="" because it is decoration) ----------
            The wrapper slides in on each slide change; the picture inside it
            floats up and down all the time. */}
        <div className="hero__watch" key={`watch-${active}`}>
          <img className="hero__image" src={image} alt="" />
        </div>

        {/* ---------- Layer 5: dots. Clicking one jumps to that slide ---------- */}
        <div className="hero__dots">
          <DotIndicator activeIndex={active} onSelect={setActive} />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
