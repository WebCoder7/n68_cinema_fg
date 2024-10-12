import '../style/Bilet_card.css';

function Bilet_card({ date = "Чт", number = "28" }) {
  return (
    <div className="bilet-card">
      <p>{date}</p>
      <p>{number}</p>
    </div>
  );
}

export default Bilet_card;
