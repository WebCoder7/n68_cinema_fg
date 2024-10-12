import {  useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/Main_layout";
import Bileti from "../components/Bileti";
import About_film from "../components/About_film";
import useFetchData from "../hooks/Fetch";
import { Audio } from "react-loader-spinner";
import "../style_page/Detail.css"; 

const DetailPage = () => {
  const { id } = useParams();
  const [tab, setTab] = useState(1);

  const { data: movie, isLoading } = useFetchData(`/movies/${id}`);

  if (isLoading) {
    return (
      <Audio
        height="150"
        width="150"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperClass={"flex justify-center items-center mt-[50px]"}
      />
    );
  }

  return (
    <MainLayout>
      <div className="relative mb-12">
        <img
          src={movie.img}
          alt=""
          className="movie-image"
        />
        <div className="overlay"></div>
        <h1 className="movie-title">{movie.title}</h1>
      </div>

      <div className="tab-buttons">
        <button
          onClick={() => setTab(1)}
          className={`tab-button ${tab === 1 ? "active" : ""}`}
        >
          Билеты
        </button>
        <button
          onClick={() => setTab(2)}
          className={`tab-button ${tab === 2 ? "active" : ""}`}
        >
          О фильме
        </button>
      </div>
      {tab === 1 ? <Bileti /> : <About_film set={setTab} data={movie} />}
    </MainLayout>
  );
};

export default DetailPage;
