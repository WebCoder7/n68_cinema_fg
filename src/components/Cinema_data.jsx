import '../style/Cinema_Data.css'; 

function Cinema_data({ title = "Детали" }) {
  return (
    <div className="cinema-data-container">
      <h5 className="cinema-title">{title}</h5>
      <div className="cinema-details">
        {details.map((detail, index) => (
          <div key={index} className="detail-item">
            <p className="detail-label">{detail.label}</p>
            <p className="detail-value">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


const details = [
  { label: "Продолжительность", value: "1ч 34м / 94 минут" },
  { label: "Премьера", value: "07 марта 2024" },
  { label: "Производство", value: "США, Китай" },
  { label: "Жанр", value: "Фэнтези, Комедия" },
  { label: "Режиссер", value: "Майк Митчелл, Стефани Стайн" },
  { label: "Возрастной рейтинг", value: "6+" },
];

export default Cinema_data;
