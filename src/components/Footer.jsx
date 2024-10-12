import logo from "../assets/footer-logo.svg";
import play_market from "../assets/google-play.svg";
import app_store from "../assets/app-store.svg";
import list from "../assets/list.svg";
import rek from "../assets/reklama.svg";
import faq from "../assets/FAQ.svg";
import contact from "../assets/contact.svg";
import insta from "../assets/instagram.svg";
import "../style/Footer.css"; 

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-section">
        <img width="55px" src={logo} alt="Logo" />
        <div className="footer-store-links">
          <a href="/">
            <img src={play_market} alt="Google Play" />
          </a>
          <a href="/">
            <img src={app_store} alt="App Store" />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h5>О нас</h5>
        <div className="footer-link-item">
          <img src={list} alt="List" />
          <p className="text-gray">Публичная оферта</p>
        </div>
        <div className="footer-link-item">
          <img src={rek} alt="Реклама" />
          <p className="text-red">Реклама</p>
        </div>
        <div className="footer-link-item">
          <img src={faq} alt="FAQ" />
          <p className="text-gray">F.A.Q</p>
        </div>
        <div className="footer-link-item">
          <img src={contact} alt="Контакты" />
          <p className="text-gray">Контакты</p>
        </div>
      </div>

      <div className="footer-section">
        <h5>Категории</h5>
        <div className="footer-link-item">
          <img src={list} alt="Кино" />
          <p className="text-gray">Кино</p>
        </div>
        <div className="footer-link-item">
          <img src={rek} alt="Театр" />
          <p className="text-gray">Театр</p>
        </div>
        <div className="footer-link-item">
          <img src={faq} alt="Концерты" />
          <p className="text-gray">Концерты</p>
        </div>
        <div className="footer-link-item">
          <img src={contact} alt="Спорт" />
          <p className="text-gray">Спорт</p>
        </div>
      </div>

      <div className="footer-contact-section">
        <div className="footer-contact-info">
          <h5>Связаться с нами</h5>
          <h5 className="contact-number">+998 (95) 897-33-38</h5>
        </div>
        <div className="footer-social-links">
          <h5>Социальные сети</h5>
          <div className="social-icons">
            <img width="24px" src={insta} alt="Instagram" />
            <img width="24px" src={insta} alt="Instagram" />
            <img width="24px" src={insta} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
