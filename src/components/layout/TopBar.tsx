/**
 * TopBar  (layout component)
 * --------------------------
 * The thin grey strip at the very top of the page:
 *   left:  welcome message
 *   right: 3 small items (delivery pin code, track order, offers)
 *
 * Prop flow:   HomePage  --welcomeText-->  TopBar  --icon/label/highlight-->  TopBarItem
 */
import TopBarItem from "./TopBarItem";
import "./TopBar.css";

interface TopBarProps {
  welcomeText: string;
}

function TopBar({ welcomeText }: TopBarProps) {
  return (
    <div className="topbar">
      {/* .container keeps the content 1200px wide and centred (see index.css) */}
      <div className="container topbar__inner">
        <p className="topbar__welcome">{welcomeText}</p>

        <div className="topbar__items">
          {/* Same TopBarItem component, three different sets of props */}
          <TopBarItem
            label="Deliver to"
            highlight="423651"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            }
          />

          <span className="topbar__divider" />

          <TopBarItem
            label="Track your order"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 6h12v10H2z" />
                <path d="M14 9h4l3 3v4h-7" />
                <circle cx="6.5" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
              </svg>
            }
          />

          <span className="topbar__divider" />

          <TopBarItem
            label="All Offers"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 15l6-6" />
                <circle cx="9.5" cy="9.5" r="1" />
                <circle cx="14.5" cy="14.5" r="1" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
