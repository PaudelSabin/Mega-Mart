/**
 * HomePage  (page component)
 * ==========================
 * The one and only page of the site. It does NOT draw anything itself: it puts
 * the reusable components in the right order and gives each one its content
 * through PROPS.
 *
 *   Order on the page (top to bottom):
 *     TopBar -> Header -> CategoryNav -> HeroBanner
 *     -> Smartphones -> Top Categories -> Electronics Brands -> Daily Essentials
 *     -> Footer
 *
 * RULES OF THE TASK that you can see in this file
 *   1. Every card is written out BY HAND with its own props. There is no
 *      .map() and no data array, so you can see exactly how ONE component is
 *      reused many times with different content.
 *   2. Images are imported ONCE from "../assets" and handed down as props.
 *      The components themselves never decide which picture they show.
 *
 * HOW PROPS FLOW
 *     HomePage  --props-->  ProductCard  -->  the card you see on screen
 *   (the parent decides the content, the child only presents it)
 */

// ----- Components ----------------------------------------------------------
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import CategoryNav from "../components/layout/CategoryNav";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/ecommerce/HeroBanner";
import ProductCard from "../components/ecommerce/ProductCard";
import CategoryCard from "../components/ecommerce/CategoryCard";
import BrandBanner from "../components/ecommerce/BrandBanner";
import EssentialCard from "../components/ecommerce/EssentialCard";
import SectionHeader from "../components/common/SectionHeader";
import DotIndicator from "../components/common/DotIndicator";

// ----- Images (all exported from src/assets/index.ts) -----------------------
import {
  // logos
  logoBlue,
  logoWhite,
  logoApple,
  logoRealme,
  logoMi,
  // hero banner
  heroWatch,
  heroCircle,
  heroCircleLine,
  // smartphones
  galaxyS22Ultra,
  galaxyM13,
  galaxyM33,
  galaxyM53,
  galaxyS22UltraGreen,
  // top categories
  catMobile,
  catCosmetics,
  catElectronics,
  catFurniture,
  catWatches,
  catDecor,
  catAccessories,
  // brand banners: phone pictures + circle pictures
  brandIphone,
  brandRealme,
  brandXiaomi,
  appleCircle,
  realmeCircle,
  miCircle,
  // daily essentials
  essEssential,
  essVegetables,
  essFruits,
  essStrawberry,
  essMango,
  essCherry,
  // footer badges
  storeApple,
  storeGoogle,
} from "../assets";

// The spacing between sections and the grids live in HomePage.css
import "./HomePage.css";

function HomePage() {
  return (
    // <> ... </> is a "fragment": it groups elements without adding an extra <div>
    <>
      {/* ===== Page top: grey strip, white header, category pills ===== */}
      <TopBar welcomeText="Welcome to worldwide Megamart!" />
      <Header
        logo={logoBlue}
        searchPlaceholder="Search essentials, groceries and more..."
      />
      <CategoryNav />

      <main>
        {/* ===== Hero banner =====
            The text, the watch and BOTH circle pictures come in as props. */}
        <HeroBanner
          subtitle="Best Deal Online on smart watches"
          title="SMART WEARABLE."
          offer="UP to 80% OFF"
          image={heroWatch}
          circleFill={heroCircle}
          circleLine={heroCircleLine}
        />

        {/* ===== Smartphones: 5 ProductCards =====
            Same component, five different sets of props.
              selected    -> the blue outlined card (it is "hovered" in Figma)
              imageHeight -> how tall the whole PICTURE FILE is drawn.

            WHY THE NUMBERS DIFFER: every phone picture has a different amount
            of transparent empty space around the phone. We want the PHONE
            ITSELF to be about 150px tall inside the 188px grey area, which
            leaves roughly 19px of padding above and below (like in Figma).
            Formula:   imageHeight = 150 x 720 / (phone height inside the file)
              S22 Ultra (teal):   150 x 720 / 581 = 186
              Galaxy M13:         150 x 720 / 591 = 183
              Galaxy M33:         150 x 720 / 546 = 198
              Galaxy M53:         150 x 720 / 554 = 195
              S22 Ultra (green):  150 x 720 / 470 = 230
            (720 is the height of every picture file, in pixels.)
            To get MORE padding, lower all five numbers; for LESS, raise them. */}
        <section className="section container">
          <SectionHeader title="Grab the best deal on" highlight="Smartphones" />
          <div className="section__content products-grid">
            <ProductCard
              name="Galaxy S22 Ultra"
              price="₹32999"
              oldPrice="₹74999"
              savings="Save - ₹32999"
              discount="56%"
              image={galaxyS22Ultra}
              imageHeight={186}
            />
            <ProductCard
              name="Galaxy M13 (4GB | 64 GB )"
              price="₹10499"
              oldPrice="₹14999"
              savings="Save - ₹4500"
              discount="56%"
              image={galaxyM13}
              imageHeight={183}
              selected
            />
            <ProductCard
              name="Galaxy M33 (4GB | 64 GB )"
              price="₹16999"
              oldPrice="₹24999"
              savings="Save - ₹8000"
              discount="56%"
              image={galaxyM33}
              imageHeight={198}
            />
            <ProductCard
              name="Galaxy M53 (4GB | 64 GB )"
              price="₹31999"
              oldPrice="₹40999"
              savings="Save - ₹9000"
              discount="56%"
              image={galaxyM53}
              imageHeight={195}
            />
            <ProductCard
              name="Galaxy S22 Ultra"
              price="₹67999"
              oldPrice="₹85999"
              savings="Save - ₹18000"
              discount="56%"
              image={galaxyS22UltraGreen}
              imageHeight={230}
            />
          </div>
        </section>

        {/* ===== Top Categories: 7 CategoryCards =====
            imageSize is only set for cut-out pictures (mobile, electronics,
            watches). The square photos fill the whole circle by default.
            "selected" = the blue outlined circle. */}
        <section className="section container">
          <SectionHeader title="Shop From" highlight="Top Categories" />
          <div className="section__content categories-grid">
            <CategoryCard label="Mobile" image={catMobile} imageSize={150} selected />
            <CategoryCard label="Cosmetics" image={catCosmetics} />
            <CategoryCard label="Electronics" image={catElectronics} imageSize={150} />
            <CategoryCard label="Furniture" image={catFurniture} />
            <CategoryCard label="Watches" image={catWatches} imageSize={92} />
            <CategoryCard label="Decor" image={catDecor} />
            <CategoryCard label="Accessories" image={catAccessories} />
          </div>
        </section>

        {/* ===== Top Electronics Brands: 3 BrandBanners =====
            theme  -> picks the card colours ("dark", "yellow", "peach")
            circle -> the circle picture drawn in the top-right corner */}
        <section className="section container">
          <SectionHeader title="Top" highlight="Electronics Brands" />
          <div className="section__content brands-grid">
            <BrandBanner
              brand="iPhone"
              logo={logoApple}
              image={brandIphone}
              circle={appleCircle}
              offerText="UP to 80% OFF"
              theme="dark"
              imageHeight={278}
            />
            <BrandBanner
              brand="Realme"
              logo={logoRealme}
              image={brandRealme}
              circle={realmeCircle}
              offerText="UP to 80% OFF"
              theme="yellow"
              imageHeight={197}
            />
            <BrandBanner
              brand="Xiaomi"
              logo={logoMi}
              image={brandXiaomi}
              circle={miCircle}
              offerText="UP to 80% OFF"
              theme="peach"
              imageHeight={228}
            />
          </div>

          {/* The 7 slider dots under the banners (first one active) */}
          <div className="brands-dots">
            <DotIndicator activeIndex={0} />
          </div>
        </section>

        {/* ===== Daily Essentials: 6 EssentialCards =====
            imageWidth sets how wide each picture is drawn inside its tile. */}
        <section className="section container">
          <SectionHeader title="Daily" highlight="Essentials" />
          <div className="section__content essentials-grid">
            <EssentialCard
              name="Daily Essentials"
              offer="UP to 50% OFF"
              image={essEssential}
              imageWidth={183}
              selected
            />
            <EssentialCard
              name="Vegetables"
              offer="UP to 50% OFF"
              image={essVegetables}
              imageWidth={145}
            />
            <EssentialCard
              name="Fruits"
              offer="UP to 50% OFF"
              image={essFruits}
              imageWidth={176}
            />
            <EssentialCard
              name="Strawberry"
              offer="UP to 50% OFF"
              image={essStrawberry}
              imageWidth={166}
            />
            <EssentialCard
              name="Mango"
              offer="UP to 50% OFF"
              image={essMango}
              imageWidth={168}
            />
            <EssentialCard
              name="Cherry"
              offer="UP to 50% OFF"
              image={essCherry}
              imageWidth={172}
            />
          </div>
        </section>
      </main>

      {/* ===== Footer: white logo + the two app-store badges come in as props ===== */}
      <Footer
        logo={logoWhite}
        appStoreBadge={storeApple}
        playStoreBadge={storeGoogle}
      />
    </>
  );
}

export default HomePage;
