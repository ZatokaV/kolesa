"use client";
import { useState } from "react";

import "./form.css";

export default function ContactForm() {
/* ================= ТУТ ЛОГІКА ФОРМИ =================*/
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function buildTelegramMessage(data) {
    return `
📩 Нова заявка з форми

👤 Від: ${data.name || "-"} ${data.lastName || "-"}
📱 Телефон: ${data.phone || "-"}
📧 Email: ${data.email || "-"}
💬 Додатково:
${data.message || "-"}
    `.trim();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const tgText = buildTelegramMessage(formData);

    // поки шо alert
    alert(tgText);

    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  /* ================= ТУТ ВЖЕ САМА ФОРМА =================*/

  return (
    <form className="form__all" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="form__group">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form__group">
          <input
            type="text"
            id="last-name"
            name="lastName"
            placeholder=" "
            value={formData.lastName}
            onChange={handleChange}
          />
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
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form__group">
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone</label>
        </div>
      </div>

      <div className="form__group">
        <textarea
          name="message"
          id="message"
          placeholder=" "
          value={formData.message}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
      </div>

      <button className="form__btn" type="submit">
        SEND
      </button>
    </form>
  );
}
