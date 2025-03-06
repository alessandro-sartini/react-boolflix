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
              <div className=" mb-4" key={tvShow.id}>
                <div className="card h-100 position-relative">
                  <img
                    src={`${linkImg}w500${tvShow.poster_path}`}
                    className="card-img-top"
                    alt={tvShow.name}
                  />
                    <div
                  className="container-opacity position-absolute 
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
                    p-3
                    m-0"
                    style={{ zIndex: 1 }}
                  >
                    {tvShow.name}
                    </h5>
                    <label className="p-2">
                    {/* <label className={"p-2" + (stampStarEmpty + StampStarFull > 3 ? 'active' : "")}> */}
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
