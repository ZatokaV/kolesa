import styles from "./page.css";
import Form from "../components/Form/form";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content container">
          <h1>Виїзний шиномонтаж</h1>
          <div className="hero__form">
            <h2>Заповніть форму для ВИКЛИКУ ШИНОМОНТАЖУ</h2>
            <Form />
          </div>
        </div>
      </section>

      <section className="features">
        <ul className="features__list container">
          <li className="features__card">
            <img src="icons/phone.svg" alt="phone_icon" />
            <h2>CALL US NOW 222-222-222</h2>
            <p>Feel free to call us</p>
          </li>
          <li className="features__card">
            <img src="icons/calendar.svg" alt="calendar_icon" />
            <h2>GET FREE APPOITMET</h2>
            <p>Free Diagnosis & Brake Checks</p>
          </li>
          <li className="features__card">
            <img src="icons/maps.svg" alt="maps_icon" />
            <h2>FIND US ON MAP</h2>
            <p>New York, 1286 Ruumu Nanor</p>
          </li>
        </ul>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>OUR SERVICES</h2>
          <a href="#">VIEW ALL SERVICES</a>
          <ul className="services__list">
            <li className="services__list--card">
              <div className="services__card-image-wrapper">
                <img src="images/services_1.jpg" alt="car on servis" />
              </div>
              <h3 className="services__list--card-subtitle">DIAGNOSTIC</h3>
            </li>
            <li className="services__list--card">
              <div className="services__card-image-wrapper">
                <img src="images/services_2.jpg" alt="car on servis" />
              </div>
              <h3 className="services__list--card-subtitle">TIRES & WHEELS</h3>
            </li>
            <li className="services__list--card">
              <div className="services__card-image-wrapper">
                <img src="images/services_3.jpg" alt="car on servis" />
              </div>
              <h3 className="services__list--card-subtitle">ENGINES</h3>
            </li>
          </ul>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about__content container">
          <div className="about__text"></div>
          <h2>
            WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE
          </h2>
          <p>
            Car repairs and maintenance can be expensive and no one wants to
            have pay to repair damage caused by shoddy repair service. When you
            bring your car into our auto shop, you won’t have to worry because
            our staff is comprised of ASE certified technicians who are
            committed to making sure you have a safe dependable car.
          </p>
          <div className="about__image-wrapper">
            <img src="images/about_img.jpg" alt="car on servis" />
          </div>
        </div>
      </section>

      <section>
        <div className="process container">
          <h2>FAST & EASY</h2>
          <p>our work process</p>
          <ul className="process_list">
            <li className="process__item">
              <h3>1.Request your quote</h3>
              <p>We will be there when you most need us</p>
            </li>
            <li className="process__item">
              <h3>02. BRING YOUR VEHICLE</h3>
              <p>We are car guys at heart</p>
            </li>
            <li className="process__item">
              <h3>03. GET IT REPAIRED</h3>
              <p>High quality, low cost car servicing</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="contacts">
        <div className="contacts__content container">
          <h2>Contact us</h2>
          <Form />
        </div>
      </section>
    </main>
  );
}
