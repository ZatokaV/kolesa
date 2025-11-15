import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="mini-container">
        <div className="header__content"> 
          <a href="/" className="header__logo">
            <img src="/icons/logo.svg" alt="logo" />
          </a>
          <nav className="header__nav">
            <ul>
              <li><a className="header__nav--item" href="/">Main</a></li>
              <li><a className="header__nav--item" href="#services">Our services</a></li>
              <li><a className="header__nav--item" href="#about">About</a></li>
              <li><a className="header__nav--item" href="#contact">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
