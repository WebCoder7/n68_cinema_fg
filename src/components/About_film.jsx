import imd from "../assets/imd.svg";
import kinopoisk from "../assets/kinopoisk.svg";
import Cinema_data from "./Cinema_data";
import { BsTicketPerforatedFill } from "react-icons/bs";
import useStore from "../redux/zustand";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../style/About_film.css';

function About_film({ set = () => {}, data }) {
  const { setTicket } = useStore();

  return (
    <div className="about-film-container">
      <div className="rating-buttons">
        <button className="rating-button">
          6.6 <img src={imd} alt="" />
        </button>
        <button className="rating-button">
          6.8 <img src={kinopoisk} alt="" />
        </button>
      </div>
      <div>
        <Cinema_data />
        <hr className="divider" />
        <Cinema_data title="В ролях" />
        <hr className="divider" />

        <div>
          <h5 className="plot-title">Сюжет</h5>
          <p className="plot-description">
            Продолжение приключений легендарного Воина Дракона, его верных
            друзей и наставника (часть вторая)
          </p>
          <button
            onClick={() => {
              setTicket(data);
              toast.success(
                "Malumotingiz saqlandi, uni tickets page dan ko'ra olasiz"
              );
            }}
            className="buy-ticket-button"
          >
            <BsTicketPerforatedFill />
            Купить билет
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default About_film;
