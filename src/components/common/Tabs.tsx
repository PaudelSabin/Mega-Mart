/**
 * Tabs  (reusable component)
 * --------------------------
 * A row of text tabs sharing a grey line, with a blue line under the active
 * one ("Sign in | Sign up").
 *
 * Props:
 *  - tabs:     an ARRAY of { id, label }, drawn with .map()
 *  - activeId: the id of the selected tab (the PARENT keeps this state)
 *  - onChange: called with the id of the tab that was clicked
 *  - idPrefix: used to build the ids that link each tab to its panel, so that
 *              screen readers can announce them (aria-controls)
 *
 * It is generic (<T extends string>): if the tab ids are "signin" | "signup",
 * onChange gets exactly that type back, not just any string.
 *
 * It keeps NO state of its own: the parent says which tab is active and is told
 * when another one is clicked.
 */
import type { TabEntry } from "../../types/authTypes";
import "./Tabs.css";

interface TabsProps<T extends string> {
  tabs: TabEntry<T>[];
  activeId: T;
  onChange: (id: T) => void;
  idPrefix: string;
}

function Tabs<T extends string>({ tabs, activeId, onChange, idPrefix }: TabsProps<T>) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            id={`${idPrefix}-tab-${tab.id}`}
            type="button"
            role="tab"
            className={active ? "tabs__tab tabs__tab--active" : "tabs__tab"}
            aria-selected={active}
            aria-controls={`${idPrefix}-panel`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
