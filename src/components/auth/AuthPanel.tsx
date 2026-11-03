/**
 * AuthPanel  (page section component)
 * ===================================
 * The white form area on the right of the sign-in page:
 *
 *   Welcome back!
 *   Sign in to MegaMart for a seamless shopping experience.
 *   [ Sign in | Sign up ]                  <- Tabs
 *   Email / Password / Remember me ...     <- AuthForm
 *   New to MegaMart? Sign up
 *   --------------------------------
 *   (shield) Your information is safe and secure with us.
 *
 * IT KEEPS STATE: "mode" is "signin" or "signup". The tabs AND the
 * "New to MegaMart? Sign up" link change it, and everything else (heading,
 * inputs, button, switch text) is looked up in the data by that mode.
 *
 * key={mode} on AuthForm: when the mode changes React builds a brand-new form,
 * so the text typed into the other form does not leak across.
 *
 * Props: all the texts and field lists come from src/data/signInData.ts
 *  - tabs:       the two tabs
 *  - copy:       headings, button text and switch text for each mode
 *  - fields:     the inputs of each mode
 *  - secureNote: the line with the shield at the bottom
 */
import { useState } from "react";
import { RiShieldCheckLine } from "react-icons/ri";
import Tabs from "../common/Tabs";
import AuthForm from "./AuthForm";
import type {
  AuthCopy,
  AuthMode,
  FormFieldEntry,
  TabEntry,
} from "../../types/authTypes";
import "./AuthPanel.css";

interface AuthPanelProps {
  tabs: TabEntry<AuthMode>[];
  copy: Record<AuthMode, AuthCopy>;
  fields: Record<AuthMode, FormFieldEntry[]>;
  secureNote: string;
  defaultMode?: AuthMode;
}

function AuthPanel({
  tabs,
  copy,
  fields,
  secureNote,
  defaultMode = "signin",
}: AuthPanelProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const current = copy[mode];
  const otherMode: AuthMode = mode === "signin" ? "signup" : "signin";

  return (
    <section className="auth-panel">
      <h1 className="auth-panel__heading">{current.heading}</h1>
      <p className="auth-panel__subtitle">{current.subtitle}</p>

      <div className="auth-panel__tabs">
        <Tabs tabs={tabs} activeId={mode} onChange={setMode} idPrefix="auth" />
      </div>

      {/* The area the tabs control (linked with aria-controls / aria-labelledby) */}
      <div
        className="auth-panel__body"
        id="auth-panel"
        role="tabpanel"
        aria-labelledby={`auth-tab-${mode}`}
      >
        <AuthForm
          key={mode}
          fields={fields[mode]}
          submitLabel={current.submitLabel}
          showRememberMe={mode === "signin"}
        />

        <p className="auth-panel__switch">
          {current.switchPrompt}{" "}
          <button
            type="button"
            className="auth-panel__switch-link"
            onClick={() => setMode(otherMode)}
          >
            {current.switchLabel}
          </button>
        </p>
      </div>

      <p className="auth-panel__secure">
        <RiShieldCheckLine aria-hidden="true" />
        <span>{secureNote}</span>
      </p>
    </section>
  );
}

export default AuthPanel;
