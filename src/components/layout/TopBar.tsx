/**
 * TopBar  (layout component)
 * --------------------------
 * The thin grey strip at the very top of the page:
 *   left:  welcome message
 *   right: small items (delivery pin code, track order, offers)
 *
 * Props:
 *  - welcomeText: the text on the left
 *  - items:       an ARRAY of items for the right side. TopBar loops over it with
 *                 .map() and draws one TopBarItem per entry, with a thin divider
 *                 line between two items. The array comes from
 *                 src/data/homeData.ts (see topBarItems).
 *
 * Prop flow:   HomePage  --welcomeText, items-->  TopBar  --icon/label/highlight-->  TopBarItem
 */
import { Fragment } from "react";
import TopBarItem from "./TopBarItem";
import type { TopBarEntry } from "../../types/homeTypes";
import "./TopBar.css";

interface TopBarProps {
  welcomeText: string;
  items: TopBarEntry[];
}

function TopBar({ welcomeText, items }: TopBarProps) {
  return (
    <div className="topbar">
      {/* .container keeps the content 1200px wide and centred (see index.css) */}
      <div className="container topbar__inner">
        <p className="topbar__welcome">{welcomeText}</p>

        <div className="topbar__items">
          {/* .map() walks through the array. For every entry it returns one
              <TopBarItem>. "index" is the position (0, 1, 2 ...), and we use it to
              draw a divider before every item except the first one.

              Fragment = an invisible wrapper that lets us return TWO elements
              (divider + item) while still giving React ONE "key" per entry.
              The key must be unique: React uses it to tell the entries apart. */}
          {items.map((item, index) => (
            <Fragment key={item.id}>
              {index > 0 && <span className="topbar__divider" />}
              <TopBarItem
                label={item.label}
                highlight={item.highlight}
                // item.icon holds an icon COMPONENT (e.g. RiMapPinLine).
                // <item.icon /> draws it.
                icon={<item.icon />}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
