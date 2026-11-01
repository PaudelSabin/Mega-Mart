/**
 * CategoryNav  (layout component)
 * -------------------------------
 * The row of category pills under the header
 * (Groceries, Premium Fruits, Home & Kitchen, ...).
 *
 * Props:
 *  - pills:         an ARRAY of { id, label } objects. CategoryNav loops over it
 *                   with .map() and draws one NavPill per entry. The array comes
 *                   from src/data/homeData.ts (see categoryPills).
 *  - defaultActive: the id of the pill that is selected when the page opens
 *
 * IT KEEPS STATE: "active" remembers the id of the selected pill. Clicking a
 * pill changes it, so exactly one pill is blue at a time. Because the state
 * lives HERE (in the parent) and not inside each pill, the parent can make sure
 * only one pill is selected.
 */
import { useState } from "react";
import NavPill from "./NavPill";
import type { PillEntry } from "../../types/homeTypes";
import "./CategoryNav.css";

interface CategoryNavProps {
  pills: PillEntry[];
  defaultActive: string;
}

function CategoryNav({ pills, defaultActive }: CategoryNavProps) {
  // The id of the selected pill. It starts as the "defaultActive" prop.
  const [active, setActive] = useState(defaultActive);

  return (
    <nav className="category-nav" aria-label="Product categories">
      <div className="container category-nav__list">
        {/* One NavPill per entry of the array.
            key       -> a unique id so React can track each pill
            active    -> true only for the pill whose id equals the state
            onClick   -> stores this pill's id in the state */}
        {pills.map((pill) => (
          <NavPill
            key={pill.id}
            label={pill.label}
            active={active === pill.id}
            onClick={() => setActive(pill.id)}
          />
        ))}
      </div>
    </nav>
  );
}

export default CategoryNav;
