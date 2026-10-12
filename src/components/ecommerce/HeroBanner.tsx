import CarouselArrow from "../common/CarouselArrow";
import DotIndicator from "../common/DotIndicator";
import "./HeroBanner.css";

interface HeroBannerProps {
  subtitle: string;
  title: string;
  offer: string;
  image: string;
}

function HeroBanner({ subtitle, title, offer, image }: HeroBannerProps) {
  return (
    <section className="hero container">
      <div className="hero__banner">
        {/* Background + decorative circles (clipped to the rounded banner) */}
        <div className="hero__background" aria-hidden="true">
          <span className="hero__circle hero__circle--large" />
          <span className="hero__circle hero__circle--medium" />
          <span className="hero__circle hero__circle--small" />
          <span className="hero__circle hero__circle--tiny" />
        </div>

        <div className="hero__arrow hero__arrow--left">
          <CarouselArrow direction="left" />
        </div>
        <div className="hero__arrow hero__arrow--right">
          <CarouselArrow direction="right" />
        </div>

        <div className="hero__content">
          <p className="hero__subtitle">{subtitle}</p>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__offer">{offer}</p>
        </div>

        <img className="hero__image" src={image} alt="" />

        <div className="hero__dots">
          <DotIndicator activeIndex={0} />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
