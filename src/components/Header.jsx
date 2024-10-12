import logo from "../assets/logo.svg";
import afisha from "../assets/afisha.svg";
import activeAfisha from "../assets/whiteMain.svg";
import bileti from "../assets/Monitoring.svg";
import search from "../assets/search.svg";
import activeSearch from "../assets/active_search.svg";
import activeBilet from "../assets/active_bilet.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style/Header.css"; 

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = useSelector((prev) => prev.auth.token);

  return (
    <div className="header-container">
      <Link to={"/"}>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="header-buttons">
        <button onClick={() => navigate("/")}>
          <img
            src={location.pathname === "/" ? afisha : activeAfisha}
            alt="afisha"
          />
        </button>
        <button onClick={() => navigate("/bilet")}>
          <img
            src={location.pathname === "/bilet" ? activeBilet : bileti}
            alt="bilet"
          />
        </button>
        <button onClick={() => navigate("/search")}>
          <img
            src={location.pathname === "/search" ? activeSearch : search}
            alt="search"
          />
        </button>
      </div>
      <div className="header-right-section">
        <select className="language-select">
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
        <Link to={isLogin ? "/profile" : "/login"}>
          <button className="login-button">
            {isLogin ? "профиль" : "Войти"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
