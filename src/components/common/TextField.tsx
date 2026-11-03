/**
 * TextField  (reusable component)
 * -------------------------------
 * A label, a text input and (when something is wrong) an error message under it.
 *
 * Props:
 *  - id, label:     the input's id and the visible label (they are linked, so
 *                   clicking the label focuses the input)
 *  - value:         the text currently in the box
 *  - onChange:      called with the NEW text on every key press. The PARENT
 *                   keeps the value (a "controlled input")
 *  - type:          "text" | "email" | "password" (default "text")
 *  - placeholder, autoComplete: optional hints for the browser
 *  - error:         optional error text. When it is set the box turns red
 *  - trailing:      optional element drawn at the right end INSIDE the box,
 *                   e.g. the show/hide-password button (see PasswordField)
 *
 * EFFECT (focus): the box gets a blue ring.
 */
import type { ReactNode } from "react";
import "./TextField.css";

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  autoComplete?: string;
  error?: string;
  trailing?: ReactNode;
}

function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  error,
  trailing,
}: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>

      <div
        className={
          error ? "text-field__control text-field__control--error" : "text-field__control"
        }
      >
        <input
          className="text-field__input"
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          // Tell screen readers that the box is invalid and where the message is
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
        />
        {trailing}
      </div>

      {/* role="alert" makes screen readers read the message when it appears */}
      {error && (
        <p className="text-field__error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextField;
