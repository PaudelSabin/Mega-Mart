/**
 * SearchBar  (reusable component)
 * -------------------------------
 * The rounded light-blue search box:
 *   [magnifier icon] [text input] [clear button] [list icon]
 *
 * Props:
 *  - placeholder: the grey hint text shown inside the input
 *
 * Icons come from the react-icons library (Remix "line" set), imported by name:
 *   import { RiSearchLine } from "react-icons/ri";
 * so no SVG has to be drawn by hand. An icon takes its colour from the CSS
 * "color" of its parent and its size from the CSS (or a size={...} prop).
 *
 * THIS COMPONENT HAS ITS OWN STATE: "value" remembers what you typed.
 *   - the input is a "controlled input": React always knows its text
 *   - as soon as there is text, a small (x) button fades in; clicking it, or
 *     pressing the Escape key, clears the box
 *
 * EFFECTS: when the box has focus it turns white and gets a blue ring, and the
 * magnifier icon grows a little.
 */
import { useState } from "react";
import { RiCloseLine, RiListUnordered, RiSearchLine } from "react-icons/ri";
import "./SearchBar.css";

interface SearchBarProps {
  placeholder: string;
}

function SearchBar({ placeholder }: SearchBarProps) {
  // The text currently typed in the box. It starts empty.
  const [value, setValue] = useState("");

  return (
    <div className="search-bar">
      {/* Left: magnifier icon */}
      <RiSearchLine className="search-bar__search-icon" />

      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
        aria-label="Search"
        value={value}
        // Runs on every key press: copy the new text into the state
        onChange={(event) => setValue(event.target.value)}
        // Escape key = clear the box
        onKeyDown={(event) => {
          if (event.key === "Escape") setValue("");
        }}
      />

      {/* Clear button: only visible when there is text (CSS handles the fade) */}
      <button
        type="button"
        className={value ? "search-bar__clear search-bar__clear--visible" : "search-bar__clear"}
        aria-label="Clear search"
        tabIndex={value ? 0 : -1}
        onClick={() => setValue("")}
      >
        <RiCloseLine />
      </button>

      {/* Right: "list" icon */}
      <RiListUnordered className="search-bar__list-icon" />
    </div>
  );
}

export default SearchBar;
