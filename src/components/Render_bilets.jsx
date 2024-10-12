import { memo } from "react";
import OneTicket from "../components/OneTicket";
import Panda from "../assets/panda-cin.png";
import panda from "../assets/kung.png";
import pila from "../assets/pila.png";
import useStore from "../redux/zustand";
import "../style/Render_bilets.css"; 

function Render_bilets({ openFunc }) {
  const { tickets } = useStore();
  console.log("render");

  return (
    <div className="tickets-container">
      <OneTicket
        open={openFunc}
        title="Кунг Фу Панда 4"
        img={Panda}
        buy={true}
        history={false}
      />
      <OneTicket
        open={openFunc}
        title="Кунг Фу Панда 4"
        img={panda}
        buy={true}
        history={false}
      />
      <OneTicket
        open={openFunc}
        title="Пила / Джокер новый...."
        img={pila}
        buy={false}
        history={false}
      />
      {tickets.map((ticket, i) => (
        <OneTicket
          key={i}
          open={openFunc}
          title={ticket.title}
          img={ticket.img}
          buy={false}
          history={false}
        />
      ))}
    </div>
  );
}

const MemoizedComponent = memo(Render_bilets, (prevProps, nextProps) => {
  return (
    prevProps.openFunc === nextProps.openFunc &&
    prevProps.tickets === nextProps.tickets
  );
});

export default MemoizedComponent;
