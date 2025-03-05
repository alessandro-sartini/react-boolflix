import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export default function CardTvSeries() {
  const { tvShows, handleData } = useGlobalContext();

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <h1>serie tvvvvv</h1>
      {tvShows.map((tvShow) => (
        <div className="col-md-4 mb-4" key={tvShow.id}>
          <div className="card h-100 position-relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              className="card-img-top"
              alt={tvShow.name}
            />
            <h5
              className="card-title text-white position-absolute bottom-0 start-50 translate-middle-x text-truncate p-2"
              style={{ zIndex: 1, maxWidth: "80%" }}
            >
              {tvShow.name}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
}
