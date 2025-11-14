import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content"> {/* Цей div буде нашою Grid-сіткою */}
          <a href="/" className="header__logo">
            <img src="/icons/logo.svg" alt="logo" />
          </a>
          <nav className="header__nav">
            <ul>
              <li><a href="/">Main</a></li>
              <li><a href="#services">Our services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
