import Vip from "../assets/vip.svg";
import "../style/Cinematica.css";

function Tickets({ zal = "1", time = "11:45", vip = true, appearance = "2", price = "100 000", }) {
  return (
    <div className="ticket-container">
      <div className="ticket-header">
        <p className="hall-number">Зал № {zal}</p>
        <div className="ticket-time-vip">
          <h6 className="time">{time}</h6>
          {vip && (
            <div className="vip-section">
              <h6 className="vip-text">VIP</h6>
              <img src={Vip} alt="VIP" />
            </div>
          )}
        </div>
      </div>
      <div className="ticket-footer">
        <h6 className="appearance">{appearance}D</h6>
        <h6 className="price">{price} сум</h6>
      </div>
    </div>
  );
}

export default Tickets;
