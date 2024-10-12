import { IoTime } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";
import "../style/OneTicket.css"; 

function OneTicket({ title = "", img = "", buy = false, history = false, open }) {
  return (
    <div className="ticket-card">
      <div className="ticket-content">
        <div>
          <img className="ticket-img" src={img} alt={title} />
        </div>
        <div className="ticket-info">
          <h1 className="ticket-title">{title}</h1>
          <p className="ticket-details">
            2024 • RU • 6+ • 1ч 34м / 94 минут
          </p>
          <p className="ticket-text">Magic Cinema</p>
          <p className="ticket-text">Зал №1</p>
          <p className="ticket-text">28 марта, 19:30</p>
          <button className="ticket-status-button">
            {buy === false ? (
              <div className="status-icon">
                <TiTick />
                <p>Оплачено</p>
              </div>
            ) : (
              <div className="status-icon">
                <IoTime />
                <p>Ждет оплаты</p>
              </div>
            )}
          </button>
        </div>
      </div>
      {history === false ? (
        <div className="ticket-footer">
          <h4>{buy ? "Ваш билет готов" : "Ваш билет бронирован"}</h4>
          <button
            onClick={() => (buy ? toast.success("To'lov qilingan") : open(true))}
            className="ticket-action-button"
          >
            {buy ? "Получить билет" : "Оплатить"}
          </button>
        </div>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
}

export default OneTicket;
