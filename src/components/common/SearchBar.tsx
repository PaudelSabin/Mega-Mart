import "./SearchBar.css";

interface SearchBarProps {
  placeholder: string;
}

function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="search-bar">
      <svg
        className="search-bar__search-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>

      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
        aria-label="Search"
      />

      <svg
        className="search-bar__list-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M9 6h12M9 12h12M9 18h12" />
        <circle cx="3.5" cy="6" r="0.6" />
        <circle cx="3.5" cy="12" r="0.6" />
        <circle cx="3.5" cy="18" r="0.6" />
      </svg>
    </div>
  );
}

export default SearchBar;