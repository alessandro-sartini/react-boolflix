import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
export default function FilmsPage({type}) {


    const { linkImg, ratingStar, handleTopNew, topNewProducts } =
    useGlobalContext();
  
  useEffect(() => {
      console.log("Chiamando handleTopNew con type:", type);
    if (type === "tv") {
      handleTopNew("tv");
    }
  }, [type]); 
    

  return (
    <div className="container" style={{ minHeight: "50vh" }}>
      <div className="row row-cols-md-3 row-cols-lg-4 my-3">
        {topNewProducts.map((e) => (
          <div className="mb-4 card-container" key={e.id}>
            <div className="card h-100 empty-card">
              <div
                className="
            container 
            d-flex
            justify-content-center
            align-items-center
            flex-column"
              >
                <h5 className="m-2 my-2 text-danger">{e.title}</h5>
                <h6 className="card-subtitle m-2 text-muted">
                  titolo originale: {e.original_language}
                </h6>
                <span className="trama">trama: {e.overview}</span>
                <span
                  className={`my-1 fi fi-${
                    e.original_language === "en"
                      ? "gb"
                      : e.original_language === "ja"
                      ? "jp"
                      : e.original_language
                  }`}
                ></span>
              </div>
            </div>
            <div className="card h-100 full-card">
              <img
                src={`${linkImg}w500${e.poster_path}`}
                className="card-img-top"
                alt={e.title}
              />
              <div
                className="
            container-opacity 
            position-absolute
            bottom-0
            start-50
            translate-middle-x
            rounded-pill"
              >
                <h5
                  className="
              card-title
              text-white
              text-truncate
              p-1
              m-0"
                  style={{ zIndex: 1 }}
                >
                  {e.title}
                </h5>
                <label className="p-2">{ratingStar(e.vote_average)}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
