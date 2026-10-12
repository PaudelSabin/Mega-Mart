import "./NavPill.css";

interface NavPillProps {
  label: string;
  active?: boolean;
}

function NavPill({ label, active = false }: NavPillProps) {
  return (
    <button
      type="button"
      className={active ? "nav-pill nav-pill--active" : "nav-pill"}
    >
      <span>{label}</span>
      <svg
        className="nav-pill__chevron"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

export default NavPill;
