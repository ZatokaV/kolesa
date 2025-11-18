import "./page.css";
import Form from "../components/Form/form";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content mini-container">
          <h1 className="hero__content--title">Виїзний шиномонтаж</h1>
          <div className="hero__form">
            <h2 className="hero__form--title">
              Заповніть форму для ВИКЛИКУ ШИНОМОНТАЖУ
            </h2>
            <Form />
          </div>
        </div>
      </section>

      <section className="features">
        <ul className="features__list mini-container">
          <li className="features__card">
            <div className="features__card--img-wrapper">
              <img
                className="features__card--icon"
                src="icons/phone.svg"
                alt="phone_icon"
              />
            </div>
            <h2 className="features__card--title">CALL US NOW 222-222-222</h2>
            <p className="features__card--text">Feel free to call us</p>
          </li>
          <li className="features__card">
            <div className="features__card--img-wrapper">
              <img
                className="features__card--icon"
                src="icons/calendar.svg"
                alt="calendar_icon"
              />
            </div>
            <h2 className="features__card--title">GET FREE APPOITMET</h2>
            <p className="features__card--text">
              Free Diagnosis & Brake Checks
            </p>
          </li>
          <li className="features__card">
            <div className="features__card--img-wrapper">
              <img
                className="features__card--icon"
                src="icons/maps.svg"
                alt="maps_icon"
              />
            </div>
            <h2 className="features__card--title">FIND US ON MAP</h2>
            <p className="features__card--text">New York, 1286 Ruumu Nanor</p>
          </li>
        </ul>
      </section>

      <section id="services" className="services">
        <div className="services__wrap mini-container">
          <h2 className="services__title">OUR SERVICES</h2>
          <a className="services__link" href="#">
            VIEW ALL SERVICES
          </a>
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
        <div className="about__content--wrap container">
          <div className="about__content mini-container">
            <div className="about__text">
              <h2 className="about__text--title">
                WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE
              </h2>
              <p className="about__text--secondary">
                Car repairs and maintenance can be expensive and no one wants to
                have pay to repair damage caused by shoddy repair service. When
                you bring your car into our auto shop, you won’t have to worry
                because our staff is comprised of ASE certified technicians who
                are committed to making sure you have a safe dependable car.
              </p>
            </div>
            <div className="about__image-wrapper">
              <img src="images/about_img.jpg" alt="car on servis" />
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="process_wrap container">
          <h2 className="process__text--main">FAST & EASY</h2>
          <p className="process__text--secondary">our work process</p>
          <ul className="process_list mini-container">
            <li className="process__item">
              <h3 className="process__item--title">1.Request your quote</h3>
              <p className="process__item--description">
                We will be there when you most need us
              </p>
            </li>
            <li className="process__item">
              <h3 className="process__item--title">02. BRING YOUR VEHICLE</h3>
              <p className="process__item--description">
                We are car guys at heart
              </p>
            </li>
            <li className="process__item">
              <h3 className="process__item--title">03. GET IT REPAIRED</h3>
              <p className="process__item--description">
                High quality, low cost car servicing
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact" className="contacts">
        <div className="contacts__wrap">
          <div className="contacts__content container">
            <h2 className="contacts__title">Contact us</h2>
            <div className="contacts__form">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
