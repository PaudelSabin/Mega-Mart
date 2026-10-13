/**
 * CategoryNav  (layout component)
 * -------------------------------
 * The row of 8 category pills under the header
 * (Groceries, Premium Fruits, Home & Kitchen, ...).
 *
 * The same NavPill component is written out 8 times by hand, each with its
 * own props. (No data array or .map(): the internship task wants us to see
 * component reuse and props directly.)
 */
import NavPill from "./NavPill";
import "./CategoryNav.css";

function CategoryNav() {
  return (
    <nav className="category-nav" aria-label="Product categories">
      <div className="container category-nav__list">
        {/* "active" with no value means active={true} */}
        <NavPill label="Groceries" active />
        <NavPill label="Premium Fruits" />
        <NavPill label="Home & Kitchen" />
        <NavPill label="Fashion" />
        <NavPill label="Electronics" />
        <NavPill label="Beauty" />
        <NavPill label="Home Improvement" />
        <NavPill label="Sports, Toys & Luggage" />
      </div>
    </nav>
  );
}

export default CategoryNav;
