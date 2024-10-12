import { useNavigate } from "react-router";
import "../style/Render.css";

function Render({ data = [] }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h3 className="section-title">На неделе</h3>

      <div className="movies-grid">
        {data.map((movie) => (
          <div
            onClick={() => {
              navigate(`/${movie.id}`);
            }}
            key={movie.id}
            className="movie-card"
          >
            <div className="movie-image">
              <img className="image" src={movie.img} alt={movie.title} />
            </div>
            <h4 className="movie-title">{movie.title}</h4>
            <p className="movie-genre">Комедия, Фэнтези</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Render;
