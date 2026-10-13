/**
 * ContactItem  (reusable component)
 * ---------------------------------
 * An icon with a small label and a phone number under it, used in the
 * footer twice: WhatsApp and Call Us.
 *
 * Props: icon, label ("Whats App"), value ("+1 202-918-2132")
 */
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
