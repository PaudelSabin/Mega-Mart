/**
 * Checkbox  (reusable component)
 * ------------------------------
 * A square tick box with a text label, e.g. "Remember me".
 *
 * It is a real <input type="checkbox"> (so it works with the keyboard and
 * screen readers). The input is hidden visually and a drawn square + tick
 * (made with CSS and an icon) is shown instead.
 *
 * Props:
 *  - id, label: the input's id and the visible text
 *  - checked:   whether it is ticked (the PARENT keeps this value)
 *  - onChange:  called with the new true / false value
 */
import { RiCheckLine } from "react-icons/ri";
import "./Checkbox.css";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox({ id, label, checked, onChange }: CheckboxProps) {
  return (
    <label className="checkbox" htmlFor={id}>
      <input
        className="checkbox__input"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="checkbox__box" aria-hidden="true">
        <RiCheckLine />
      </span>
      <span className="checkbox__label">{label}</span>
    </label>
  );
}

export default Checkbox;
