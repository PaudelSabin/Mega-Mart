/**
 * HomePage  (page component)
 * ==========================
 * The one and only page of the site. It does NOT draw anything itself and it
 * does not contain any content either:
 *
 *   - the CONTENT (texts, prices, pictures ...) lives in src/data/homeData.ts
 *     as arrays and objects
 *   - the LOOK lives in the reusable components (ProductCard, CategoryCard ...)
 *   - HomePage connects the two: it takes each array, loops over it with
 *     .map(), and turns every item into one component.
 *
 *   Order on the page (top to bottom):
 *     TopBar -> Header -> CategoryNav -> HeroBanner
 *     -> Smartphones -> Top Categories -> Electronics Brands -> Daily Essentials
 *     -> Footer
 *
 * HOW .map() WORKS (the idea behind this whole file)
 *
 *     phones.map((phone) => <ProductCard name={phone.name} ... />)
 *
 *   "phones" is an array with 5 phone objects. .map() visits each object once,
 *   calls the function you give it, and collects the results into a new array
 *   of 5 <ProductCard> elements, which React puts on the screen.
 *   Add a 6th phone to the array and a 6th card appears. No other change needed.
 *
 *   Every element created by .map() needs a "key" prop: a value that is unique
 *   inside the array (we use the item's "id"). React uses it to keep track of
 *   which card is which when the list changes.
 *
 * WHAT MAKES THE PAGE DYNAMIC
 *   1. STATE: HomePage remembers which phone / category / essential card is
 *      selected, and which brand dot is active. Clicking a card changes that
 *      state, React draws the page again, and the blue outline moves.
 *   2. SCROLL ANIMATION: each section fades and slides up the first time it
 *      scrolls into view (the useScrollReveal function below).
 *   3. HOVER / PRESS effects live in each component's own CSS file.
 *
 * HOW PROPS FLOW
 *     homeData.ts  -->  HomePage (.map)  --props-->  ProductCard  -->  the card on screen
 *   (the data decides the content, the child component only presents it)
 */

// ----- React tools ----------------------------------------------------------
// useState        : lets a component REMEMBER a value that can change
// useLayoutEffect : runs code right after the page is drawn, before the browser paints
import { useLayoutEffect, useState } from "react";

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

// ----- The data (all the content of the page) --------------------------------
import {
  brands,
  categories,
  categoryPills,
  defaultSelection,
  essentials,
  footerContacts,
  footerGroups,
  heroSlide,
  phones,
  sectionTitles,
  siteContent,
  topBarItems,
} from "../data/homeData";

// The spacing between sections and the grids live in HomePage.css
import "./HomePage.css";

/**
 * useScrollReveal  (a "custom hook")
 * ----------------------------------
 * Makes every section fade and slide up the FIRST time it scrolls into view.
 *
 * How it works, step by step:
 *   1. find all the elements with the class "section"
 *   2. add the class "reveal"  -> HomePage.css hides them (opacity 0)
 *   3. an IntersectionObserver (a browser tool that tells us when an element
 *      enters the screen) adds the class "reveal--visible" when 12% of a
 *      section is on screen -> HomePage.css plays the animation
 *   4. after that we stop watching the section, so it animates only once
 *
 * If the visitor chose "reduce motion", or the browser has no
 * IntersectionObserver, we do nothing, so everything simply stays visible.
 */
function useScrollReveal() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll<HTMLElement>(".section");
    // useLayoutEffect runs BEFORE the browser paints, so there is no flash
    // of visible content before it is hidden.
    sections.forEach((section) => section.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible"); // play the animation
            observer.unobserve(entry.target); // only once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    // Cleanup: stop watching when the page component is removed
    return () => observer.disconnect();
  }, []);
}

function HomePage() {
  // ----- STATE: what is currently selected on the page -----------------------
  // useState(x) creates a value that starts as x and a function to change it.
  // When the function is called, React draws the page again.
  // We store the "id" of the selected item, and the starting ids come from the
  // data file.
  const [selectedPhone, setSelectedPhone] = useState(defaultSelection.phone);
  const [selectedCategory, setSelectedCategory] = useState(defaultSelection.category);
  const [selectedEssential, setSelectedEssential] = useState(defaultSelection.essential);
  const [brandSlide, setBrandSlide] = useState(0); // which dot is active under the brands

  // Turn on the scroll animation for every ".section"
  useScrollReveal();

  return (
    // <> ... </> is a "fragment": it groups elements without adding an extra <div>
    <>
      {/* ===== Page top: grey strip, white header, category pills =====
          topBarItems and categoryPills are arrays: TopBar and CategoryNav map
          over them themselves. */}
      <TopBar welcomeText={siteContent.welcomeText} items={topBarItems} />
      <Header
        logo={siteContent.headerLogo}
        searchPlaceholder={siteContent.searchPlaceholder}
      />
      <CategoryNav pills={categoryPills} defaultActive={categoryPills[0].id} />

      <main>
        {/* ===== Hero banner: one object, so no .map() is needed =====
            heroSlide has subtitle, title, offer, image and both circle pictures. */}
        <HeroBanner
          subtitle={heroSlide.subtitle}
          title={heroSlide.title}
          offer={heroSlide.offer}
          image={heroSlide.image}
          circleFill={heroSlide.circleFill}
          circleLine={heroSlide.circleLine}
        />

        {/* ===== Smartphones: one ProductCard for every phone in the array =====
              selected -> true for the card whose id equals the selected id
              onSelect -> runs on click: stores this phone's id as the selected one */}
        <section className="section container">
          <SectionHeader
            title={sectionTitles.phones.title}
            highlight={sectionTitles.phones.highlight}
          />
          <div className="section__content products-grid">
            {phones.map((phone) => (
              <ProductCard
                key={phone.id}
                name={phone.name}
                price={phone.price}
                oldPrice={phone.oldPrice}
                savings={phone.savings}
                discount={phone.discount}
                image={phone.image}
                imageHeight={phone.imageHeight}
                selected={selectedPhone === phone.id}
                onSelect={() => setSelectedPhone(phone.id)}
              />
            ))}
          </div>
        </section>

        {/* ===== Top Categories: one CategoryCard for every category =====
            imageSize is optional in the data: only some categories have it, the
            others are undefined, which the component treats as "fill the circle". */}
        <section className="section container">
          <SectionHeader
            title={sectionTitles.categories.title}
            highlight={sectionTitles.categories.highlight}
          />
          <div className="section__content categories-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                label={category.label}
                image={category.image}
                imageSize={category.imageSize}
                selected={selectedCategory === category.id}
                onSelect={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
        </section>

        {/* ===== Top Electronics Brands: one BrandBanner for every brand =====
            theme  -> picks the card colours ("dark", "yellow", "peach")
            circle -> the circle picture drawn in the top-right corner */}
        <section className="section container">
          <SectionHeader
            title={sectionTitles.brands.title}
            highlight={sectionTitles.brands.highlight}
          />
          <div className="section__content brands-grid">
            {brands.map((brand) => (
              <BrandBanner
                key={brand.id}
                brand={brand.brand}
                logo={brand.logo}
                image={brand.image}
                circle={brand.circle}
                offerText={brand.offerText}
                theme={brand.theme}
                imageHeight={brand.imageHeight}
              />
            ))}
          </div>

          {/* The 7 slider dots under the banners. They are clickable: the state
              "brandSlide" says which one is active, and onSelect changes it. */}
          <div className="brands-dots">
            <DotIndicator activeIndex={brandSlide} onSelect={setBrandSlide} />
          </div>
        </section>

        {/* ===== Daily Essentials: one EssentialCard for every item ===== */}
        <section className="section container">
          <SectionHeader
            title={sectionTitles.essentials.title}
            highlight={sectionTitles.essentials.highlight}
          />
          <div className="section__content essentials-grid">
            {essentials.map((essential) => (
              <EssentialCard
                key={essential.id}
                name={essential.name}
                offer={essential.offer}
                image={essential.image}
                imageWidth={essential.imageWidth}
                selected={selectedEssential === essential.id}
                onSelect={() => setSelectedEssential(essential.id)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* ===== Footer: logo + badges as props, contacts and links as arrays ===== */}
      <Footer
        logo={siteContent.footerLogo}
        appStoreBadge={siteContent.appStoreBadge}
        playStoreBadge={siteContent.playStoreBadge}
        contacts={footerContacts}
        linkGroups={footerGroups}

/>
    </>
  );
}

export default HomePage;