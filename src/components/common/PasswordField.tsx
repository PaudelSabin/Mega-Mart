/**
 * PasswordField  (reusable component)
 * -----------------------------------
 * A TextField for passwords, with an eye button at the right end that shows
 * or hides what was typed.
 *
 * It re-uses TextField: it only adds the button (through the "trailing" prop)
 * and switches the input type between "password" and "text".
 *
 * It has its own state: "visible" remembers whether the password is shown.
 * All other props are passed straight through to TextField.
 */
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import TextField from "./TextField";
import "./PasswordField.css";

interface PasswordFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}

function PasswordField(props: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      {...props}
      type={visible ? "text" : "password"}
      trailing={
        <button
          type="button"
          className="password-toggle"
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? <RiEyeLine /> : <RiEyeOffLine />}
        </button>
      }
    />
  );
}

export default PasswordField;
