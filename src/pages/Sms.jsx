import  { useState } from "react";
import { useNavigate } from "react-router";
import MainLayout from "../layouts/Main_layout";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import "../style_page/Sms.css"; 

function SmsPage() {
  const [smsValue, setSmsValue] = useState("");
  const dispatch = useDispatch();
  const Token = localStorage.getItem("Token");
  const number = localStorage.getItem("telNumber");
  const navigate = useNavigate();
  const store = useSelector((prev) => prev);
  console.log(store);

  const handleLogin = () => {
    fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "john@mail.com",
        password: "changeme",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((json) => {
        localStorage.setItem("Token", json.access_token);
        navigate("/");
        dispatch({ type: "login", payload: json.access_token });
      });
  };

  return Token ? (
    <MainLayout>
      <div className="sms-container">
        <h1 className="sms-title">Введите СМС-код</h1>
        <p className="sms-description">
          Введите СМС-код, который мы отправили на номер{" "}
          <span className="sms-highlight">{number}</span>
        </p>
        <OtpInput
          value={smsValue}
          onChange={(value) => {
            setSmsValue(value);
            if (value.length === 4) {
              handleLogin();
            }
          }}
          numInputs={4}
          renderSeparator={<span>&nbsp;&nbsp;</span>}
          inputStyle="otp-input"
          renderInput={(props) => <input {...props} />}
        />
        <p className="sms-timer">
          Отправить код еще раз – <span className="sms-highlight">0:52</span>
        </p>
      </div>
    </MainLayout>
  ) : (
    navigate("/")
  );
}

export default SmsPage;
