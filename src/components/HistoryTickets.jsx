import OneTicket from "./OneTicket";
import Panda from "../assets/panda-cin.png";
import panda from "../assets/kung.png";
import "../style/HistoryTickets.css"; 

function HistoryTickets() {
  return (
    <div className="history-tickets-container">
      <OneTicket title="Кунг Фу Панда 4" img={Panda} buy={true} history={true} />
      <OneTicket title="Кунг Фу Панда 4" img={panda} buy={true} history={true} />
    </div>
  );
}

export default HistoryTickets;
