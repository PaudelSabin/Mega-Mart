import type { ReactNode } from "react";
import "./TopBarItem.css";

interface TopBarItemProps {
  icon: ReactNode;
  label: string;
  highlight?: string;
}

function TopBarItem({ icon, label, highlight }: TopBarItemProps) {
  return (
    <div className="topbar-item">
      <span className="topbar-item__icon">{icon}</span>
      <span>
        {label}
        {highlight && (
          <>
            {" "}
            <strong className="topbar-item__highlight">{highlight}</strong>
          </>
        )}
      </span>
    </div>
  );
}

export default TopBarItem;