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
import {
  logoBlue,
  logoWhite,
  logoApple,
  logoRealme,
  logoMi,
  heroWatch,
  galaxyS22Ultra,
  galaxyM13,
  galaxyM33,
  galaxyM53,
  galaxyS22UltraGreen,
  catMobile,
  catCosmetics,
  catElectronics,
  catFurniture,
  catWatches,
  catDecor,
  catAccessories,
  brandIphone,
  brandRealme,
  brandXiaomi,
  essEssential,
  essVegetables,
  essFruits,
  essStrawberry,
  essMango,
  essCherry,
  storeApple,
  storeGoogle,
} from "../assets";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <TopBar welcomeText="Welcome to worldwide Megamart!" />
      <Header
        logo={logoBlue}
        searchPlaceholder="Search essentials, groceries and more..."
      />
      <CategoryNav />

      <main>
        <HeroBanner
          subtitle="Best Deal Online on smart watches"
          title="SMART WEARABLE."
          offer="UP to 80% OFF"
          image={heroWatch}
        />

        {/* ---------- Smartphones ---------- */}
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
              imageHeight={197}
            />
            <ProductCard
              name="Galaxy M13 (4GB | 64 GB )"
              price="₹10499"
              oldPrice="₹14999"
              savings="Save - ₹4500"
              discount="56%"
              image={galaxyM13}
              imageHeight={211}
              selected
            />
            <ProductCard
              name="Galaxy M33 (4GB | 64 GB )"
              price="₹16999"
              oldPrice="₹24999"
              savings="Save - ₹8000"
              discount="56%"
              image={galaxyM33}
              imageHeight={246}
            />
            <ProductCard
              name="Galaxy M53 (4GB | 64 GB )"
              price="₹31999"
              oldPrice="₹40999"
              savings="Save - ₹9000"
              discount="56%"
              image={galaxyM53}
              imageHeight={242}
            />
            <ProductCard
              name="Galaxy S22 Ultra"
              price="₹67999"
              oldPrice="₹85999"
              savings="Save - ₹18000"
              discount="56%"
              image={galaxyS22UltraGreen}
              imageHeight={321}
            />
          </div>
        </section>

        {/* ---------- Top Categories ---------- */}
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

        {/* ---------- Top Electronics Brands ---------- */}
        <section className="section container">
          <SectionHeader title="Top" highlight="Electronics Brands" />
          <div className="section__content brands-grid">
            <BrandBanner
              brand="iPhone"
              logo={logoApple}
              image={brandIphone}
              offerText="UP to 80% OFF"
              theme="dark"
              imageHeight={278}
            />
            <BrandBanner
              brand="Realme"
              logo={logoRealme}
              image={brandRealme}
              offerText="UP to 80% OFF"
              theme="yellow"
              imageHeight={197}
            />
            <BrandBanner
              brand="Xiaomi"
              logo={logoMi}
              image={brandXiaomi}
              offerText="UP to 80% OFF"
              theme="peach"
              imageHeight={228}
            />
          </div>
          <div className="brands-dots">
            <DotIndicator activeIndex={0} />
          </div>
        </section>

        {/* ---------- Daily Essentials ---------- */}
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

      <Footer
        logo={logoWhite}
        appStoreBadge={storeApple}
        playStoreBadge={storeGoogle}
      />
    </>
  );
}

export default HomePage;