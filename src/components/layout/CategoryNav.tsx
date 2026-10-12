import NavPill from "./NavPill";
import "./CategoryNav.css";

function CategoryNav() {
  return (
    <nav className="category-nav" aria-label="Product categories">
      <div className="container category-nav__list">
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
