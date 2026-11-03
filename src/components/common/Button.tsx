/**
 * Button  (reusable component)
 * ----------------------------
 * The solid brand-blue call-to-action button, e.g. "Sign in ->".
 *
 * Props:
 *  - children:  the text on the button
 *  - icon:      optional icon shown after the text (any React element)
 *  - type:      "button" | "submit" (default "button"). Use "submit" inside a form.
 *  - fullWidth: optional, stretch the button across its parent
 *  - onClick:   optional click handler
 *
 * EFFECTS: lifts and gets a bigger shadow on hover, sinks when pressed, and
 * the icon slides a little to the right on hover.
 */
import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  type?: "button" | "submit";
  fullWidth?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  icon,
  type = "button",
  fullWidth = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={fullWidth ? "button button--full" : "button"}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && (
        <span className="button__icon" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
}

export default Button;
