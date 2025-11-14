import "./form.css";

export default function ContactForm() {
  return (
    <form>
      <div className="form__row">
        <div className="form__group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form__group">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="form__row">
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="9379992"
            required
          />
        </div>
      </div>

      <div className="form__group">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="5"></textarea>
      </div>

      <button type="submit">SEND</button>
    </form>
  );
}
