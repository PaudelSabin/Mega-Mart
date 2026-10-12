import SearchBar from "../common/SearchBar";
import "./Header.css";

interface HeaderProps {
  logo: string;
  searchPlaceholder: string;
}

function Header({ logo, searchPlaceholder }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__brand">
          <button className="header__menu" type="button" aria-label="Open menu">
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M2 2h22M2 9h14M2 16h22" />
            </svg>
          </button>
          <img className="header__logo" src={logo} alt="MegaMart" />
        </div>

        <div className="header__search">
          <SearchBar placeholder={searchPlaceholder} />
        </div>

        <div className="header__actions">
          <button className="header__action" type="button">
            <svg
              className="header__action-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
            </svg>
            <span className="header__action-text">Sign Up/Sign In</span>
          </button>

          <span className="header__divider" />

          <button className="header__action" type="button">
            <svg
              className="header__action-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 8h14l-1 12H6L5 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            <span className="header__action-text">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
