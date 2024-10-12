import { IoIosArrowBack } from "react-icons/io";
import OneTicket from "./OneTicket";
import pila from "../assets/pila.png";
import click from "../assets/Click.png";
import payme from "../assets/payme.png";
import "../style/Payment_modal.css"; 

function Payment_modal({ open = false, func }) {
  if (open === false) {
    return <></>;
  } else {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button
            onClick={() => func(false)}
            className="back-button"
          >
            <IoIosArrowBack />
          </button>
          <div className="modal-body">
            <h1 className="modal-title">Оплата</h1>
            <OneTicket title="Кунг Фу Панда 4" img={pila} history={true} />
            <div className="payment-info">
              <h2 className="payment-label">Комиссия сервиса</h2>
              <p className="payment-amount">5 000 сум</p>
            </div>
            <div className="payment-info">
              <h2 className="payment-label">Общая сумма</h2>
              <p className="payment-amount">135 000 сум</p>
            </div>
            <p className="payment-method-text">Выберите способ оплаты</p>
            <div className="payment-buttons">
              <button className="payment-button">
                <img src={click} alt="Click" />
              </button>
              <button className="payment-button">
                <img src={payme} alt="Payme" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment_modal;
