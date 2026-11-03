/**
 * AuthForm  (reusable component)
 * ------------------------------
 * The form of the sign-in / sign-up page: a list of inputs and a submit button.
 * The SAME component draws both forms; only the props differ.
 *
 * Props:
 *  - fields:         an ARRAY describing the inputs (see FormFieldEntry). AuthForm
 *                    loops over it with .map(): password fields become a
 *                    PasswordField (with the eye button), the others a TextField.
 *                    Fields with half=true sit side by side in a row.
 *  - submitLabel:    the text on the button ("Sign in" / "Create account")
 *  - showRememberMe: optional. true = show "Remember me" and "Forgot password?"
 *                    between the inputs and the button (sign-in only)
 *  - termsLabel:     optional. When set, a checkbox with this text appears above
 *                    the button (sign-up only). It is decorative and always ticked.
 *
 * IT USES STATE ONLY (useState):
 *  - values: what was typed in each input, stored by field id
 *
 * THIS IS A DESIGN, NOT A WORKING LOGIN. These are deliberately NOT functional:
 *  - "Remember me" is a fixed, ticked box. It has no state and clicking it does
 *    nothing. Nothing is saved anywhere.
 *  - "I agree to ..." is a fixed, ticked box too.
 *  - "Forgot password?" does nothing.
 *  - The submit button does nothing: no checking, no message, no request.
 */
import { useState } from "react";
import type { FormEvent } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import TextField from "../common/TextField";
import PasswordField from "../common/PasswordField";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import type { FormFieldEntry } from "../../types/authTypes";
import "./AuthForm.css";

interface AuthFormProps {
  fields: FormFieldEntry[];
  submitLabel: string;
  showRememberMe?: boolean;
  termsLabel?: string;
}

function AuthForm({ fields, submitLabel, showRememberMe = false, termsLabel }: AuthFormProps) {
  // Record<string, string> = an object with text keys and text values,
  // e.g. { email: "a@b.co", password: "..." }
  const [values, setValues] = useState<Record<string, string>>({});

  // Store the new text of ONE input
  const handleChange = (id: string, value: string) => {
    setValues((current) => ({ ...current, [id]: value }));
  };

  // Not functional: only stops the browser from reloading the page
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  // Group fields into rows: consecutive half fields share a row, others sit alone
  const rows: FormFieldEntry[][] = [];
  for (const field of fields) {
    if (
      field.half &&
      rows.length > 0 &&
      rows[rows.length - 1].length === 1 &&
      rows[rows.length - 1][0].half
    ) {
      // Pair with the previous half field
      rows[rows.length - 1].push(field);
    } else {
      rows.push([field]);
    }
  }

  return (
    // noValidate: the browser does not show its own "please fill in" pop-ups
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      {rows.map((row) =>
        row.length === 2 ? (
          // Two half-width fields side by side
          <div className="auth-form__row" key={row[0].id + row[1].id}>
            {row.map((field) => (
              <TextField
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type === "password" ? "text" : field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                value={values[field.id] ?? ""}
                onChange={(value) => handleChange(field.id, value)}
              />
            ))}
          </div>
        ) : row[0].type === "password" ? (
          <PasswordField
            key={row[0].id}
            id={row[0].id}
            label={row[0].label}
            placeholder={row[0].placeholder}
            autoComplete={row[0].autoComplete}
            value={values[row[0].id] ?? ""}
            onChange={(value) => handleChange(row[0].id, value)}
          />
        ) : (
          <TextField
            key={row[0].id}
            id={row[0].id}
            label={row[0].label}
            type={row[0].type}
            placeholder={row[0].placeholder}
            autoComplete={row[0].autoComplete}
            value={values[row[0].id] ?? ""}
            onChange={(value) => handleChange(row[0].id, value)}
          />
        ),
      )}

      {showRememberMe && (
        <div className="auth-form__options">
          <Checkbox
            id="remember"
            label="Remember me"
            checked
            // Deliberately empty: the box never changes (Remember me is not functional)
            onChange={() => {}}
          />
          {/* href="#" + preventDefault: looks like a link, does nothing */}
          <a
            className="auth-form__forgot"
            href="#"
            onClick={(event) => event.preventDefault()}
          >
            Forgot password?
          </a>
        </div>
      )}

      {termsLabel && (
        <div className="auth-form__terms">
          <Checkbox
            id="terms"
            label={termsLabel}
            checked
            // Deliberately empty: the box never changes (terms is not functional)
            onChange={() => {}}
          />
        </div>
      )}

      <Button type="submit" fullWidth icon={<RiArrowRightLine />}>
        {submitLabel}
      </Button>
    </form>
  );
}

export default AuthForm;
