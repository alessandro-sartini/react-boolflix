import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export default function CardTvSeries() {
  const { tvShows, handleData, linkImg, reatingStar } = useGlobalContext();

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      {tvShows.length === 0 ? (
        <p>Inserisci un titolo.</p>
      ) : (
        <>
          <h1 className="mt-2 mb-4">serie tv</h1>
          <div className="row row-cols-md-3 row-cols-lg-4">
            {tvShows.map((tvShow) => (
              <div className="mb-4 card-container" key={tvShow.id}>
                <div className="card h-100 empty-card">
                  <div
                    className="
                  container 
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-column"
                  >
                    <h5 className="m-2 my-3 text-danger">{tvShow.name}</h5>
                    <h6 className="card-subtitle m-2 text-muted">
                      titolo originale: {tvShow.original_name}
                    </h6>
                    <span className="trama">trama: {tvShow.overview}</span>

                    <span
                      className={`my-3 fi fi-${
                        tvShow.original_language == "en"
                          ? "gb"
                          : tvShow.original_language == "ja"
                          ? "jp"
                          : tvShow.original_language
                      }`}
                    >
                      
                    </span>
                  </div>
                </div>

                <div className="card h-100 full-card">
                  <img
                    src={`${linkImg}w500${tvShow.poster_path}`}
                    className="card-img-top"
                    alt={tvShow.name}
                  />
                  <div
                    className="
                    container-opacity 
                    position-absolute
                    bottom-0
                    start-50
                    translate-middle-x
                    rounded-pill
                  "
                  >
                    <h5
                      className="
                      card-title
                      text-white
                      text-truncate
                      p-1
                      m-0
                    "
                      style={{ zIndex: 1 }}
                    >
                      {tvShow.name}
                    </h5>
                    <label className="p-2">
                      {reatingStar(tvShow.vote_average)}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
