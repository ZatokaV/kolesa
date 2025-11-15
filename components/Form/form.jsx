import "./form.css";

export default function ContactForm() {
  return (
    <form className="form__all">
      <div className="form__row">
        <div className="form__group">
          <input type="text" id="name" name="name" required placeholder=" " />

          <label htmlFor="name">Name</label>
        </div>

        <div className="form__group">
          <input type="text" id="last-name" name="last-name" placeholder=" " />

          <label htmlFor="last-name">Last name</label>
        </div>
      </div>

      <div className="form__row">
        <div className="form__group">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder=" "
          />

          <label htmlFor="email">Email</label>
        </div>
        <div className="form__group">
          <input type="tel" id="phone" name="phone" placeholder=" " required />
          <label htmlFor="phone">Phone</label>
        </div>
      </div>

      <div className="form__group">
        <textarea
          name="message"
          id="message"
          placeholder=" "
        ></textarea>

        <label htmlFor="message">Message</label>
      </div>

      <button className="form__btn" type="submit">SEND</button>
    </form>
  );
}
