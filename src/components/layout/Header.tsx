/**
 * Header  (layout component)
 * --------------------------
 * The white bar under the top strip. Left to right:
 *   [menu button] [logo]      [SearchBar]      [Sign Up/Sign In | Cart]
 *
 * Props (decided by the page, not by this component):
 *  - logo:              image path of the MegaMart logo
 *  - searchPlaceholder: grey hint text inside the search box
 *
 * It re-uses the SearchBar component from components/common.
 *
 * Icons come from the react-icons library (Remix "line" set), imported by name:
 *   import { RiMapPinLine } from "react-icons/ri";
 * so no SVG has to be drawn by hand. An icon takes its colour from the CSS
 * "color" of its parent and its size from the CSS (or a size={...} prop).
 */
import SearchBar from "../common/SearchBar";
import "./Header.css";
import { RiMenu2Line, RiShoppingCartLine, RiUserLine } from "react-icons/ri";

interface HeaderProps {
  logo: string;
  searchPlaceholder: string;
}

function Header({ logo, searchPlaceholder }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__inner">
        {/* ----- Left: menu button + logo ----- */}
        <div className="header__brand">
          <button className="header__menu" type="button" aria-label="Open menu">
            <RiMenu2Line size={26} />
          </button>
          <img className="header__logo" src={logo} alt="MegaMart" />
        </div>

        {/* ----- Middle: reusable search bar ----- */}
        <div className="header__search">
          <SearchBar placeholder={searchPlaceholder} />
        </div>

        {/* ----- Right: sign in + cart ----- */}
        <div className="header__actions">
          <button className="header__action" type="button">
            <RiUserLine className="header__action-icon" />
            <span className="header__action-text">Sign Up/Sign In</span>
          </button>

          <span className="header__divider" />

          <button className="header__action" type="button">
            <RiShoppingCartLine className="header__action-icon" />
            <span className="header__action-text">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
