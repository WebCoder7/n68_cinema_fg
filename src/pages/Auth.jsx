import { useState } from "react";
import MainLayout from "../layouts/Main_layout";
import { Link, useNavigate } from "react-router-dom";
import UzFlag from "../assets/Uz.svg";
import { useMask } from "@react-input/mask";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style_page/Auth.css";

function LoginPage() {
  const [telNumber, setTelNumber] = useState("");
  const inputRef = useMask({ mask: "__  ___ __ __", replacement: { _: /\d/ } });
  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");

  if (Token){
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (telNumber.length >= 13) {
      const beginNum = telNumber.split(" ")[0];
      if (
        beginNum == 99 ||
        beginNum == 97 ||
        beginNum == 95 ||
        beginNum == 90 ||
        beginNum == 88 ||
        beginNum == 33
      ) {
        navigate("/login/sms");
        localStorage.setItem("telNumber", telNumber)
        localStorage.setItem("Token", telNumber)
      } else {
        toast.error("Raqam xato kiritildi");
      }
    } else {
      toast.error("Raqam formati xato");
    }
  };

  return (
    <MainLayout>
      <div className="login-container">
        <Link to={"/"}>
          <button className="back-button">{" < "}</button>
        </Link>
        <div className="form-wrapper">
          <div className="form-content">
            <h1 className="form-title">Регистрация</h1>
            <div className="form-description">
              <p>Введите номер телефона для того чтобы войти или пройти регистрацию</p>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}>
              <label className="input-wrapper" htmlFor="input">
                <img src={UzFlag} alt="" />
                <h5>+998</h5>
                <input
                  value={telNumber}
                  ref={inputRef}
                  className="input-field"
                  type="text"
                  id="input"
                  onChange={(e) => setTelNumber(e.target.value)}
                />
              </label>
              <button className="submit-button">Регистрация</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </MainLayout>
  );
}

export default LoginPage;
