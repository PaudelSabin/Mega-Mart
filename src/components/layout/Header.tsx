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
import type { Page } from "../../types/pageTypes";

interface HeaderProps {
  logo: string;
  searchPlaceholder: string;
  // Optional. Called with the page to show: "home" (logo) or "signin" (Sign Up/Sign In)
  onNavigate?: (page: Page) => void;
  // Optional. The name of the registered / logged in user to display
  userName?: string;
}

function Header({ logo, searchPlaceholder, onNavigate, userName }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__inner">
        {/* ----- Left: menu button + logo ----- */}
        <div className="header__brand">
          <button className="header__menu" type="button" aria-label="Open menu">
            <RiMenu2Line size={26} />
          </button>
          {/* The logo goes back to the home page. preventDefault stops the
              browser from following href="#" (we change page with state instead). */}
          <a
            href="#"
            aria-label="MegaMart home"
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.("home");
            }}
          >
            <img className="header__logo" src={logo} alt="MegaMart" />
          </a>
        </div>

        {/* ----- Middle: reusable search bar ----- */}
        <div className="header__search">
          <SearchBar placeholder={searchPlaceholder} />
        </div>

        {/* ----- Right: sign in + cart ----- */}
        <div className="header__actions">
          <button
            className="header__action"
            type="button"
            onClick={() => onNavigate?.("signin")}
          >
            <RiUserLine className="header__action-icon" />
            <span className="header__action-text">
              {userName ? userName : "Sign Up/Sign In"}
            </span>
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
