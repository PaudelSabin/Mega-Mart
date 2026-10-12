import type { ReactNode } from "react";
import "./ContactItem.css";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="contact-item">
      <span className="contact-item__icon">{icon}</span>
      <div>
        <p className="contact-item__label">{label}</p>
        <p className="contact-item__value">{value}</p>
      </div>
    </div>
  );
}

export default ContactItem;
