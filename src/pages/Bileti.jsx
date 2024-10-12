import { useState } from "react";
import MainLayout from "../layouts/Main_layout";
import Render_bilets from "../components/Render_bilets";
import HistoryTickets from "../components/HistoryTickets";
import Payment_modal from "../components/Payment_modal";
import "../style_page/Bileti.css"; 

function Bileti() {
  const [biletTab, setBiletTab] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <>
      <MainLayout>
        <div className="bileti-container">
          <div className="tab-buttons">
            <button
              onClick={() => setBiletTab(1)}
              className={`tab-button ${biletTab === 1 ? "active" : ""}`}
            >
              Активные
            </button>
            <button
              onClick={() => setBiletTab(2)}
              className={`tab-button ${biletTab === 2 ? "active" : ""}`}
            >
              История
            </button>
          </div>
          {biletTab === 1 ? <Render_bilets openFunc={setOpen} /> : <HistoryTickets />}
        </div>
      </MainLayout>

      <Payment_modal open={open} func={setOpen} />
    </>
  );
}

export default Bileti;
