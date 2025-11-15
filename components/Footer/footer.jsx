import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer__content mini-container">
        <p>&copy; 2021 Auto theme by Frontend Tricks </p>
        <ul className="footer__content--social">
          <li>
            <a href="#">
              <img src="icons/linkedin.svg" alt="linkedin_logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="icons/facebook.svg" alt="facebook_logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="icons/instagram.svg" alt="insta_logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
