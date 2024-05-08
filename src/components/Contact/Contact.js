import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email || !contact.mobile || !contact.address) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact-info">
        <button type="button" className="btns btn--outline">
          {contact.email}
        </button>

        <button type="button" className="btns btn--outline">
          {contact.mobile}
        </button>

        <button type="button" className="btns btn--outline">
          {contact.address}
        </button>
      </div>
    </section>
  );
};

export default Contact;
