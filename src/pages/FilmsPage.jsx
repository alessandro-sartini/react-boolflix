import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
export default function FilmsPage({type}) {
  // const [topNewExit, setTopNewExit] = useState([]);
  const { linkImg, ratingStar, handleTopNew, topNewFilms, setTopNewFilms } =
    useGlobalContext();
  
  useEffect(() => {
      console.log("Chiamando handleTopNew con type:", type);
    if (type === "movies") {
      handleTopNew("movie");
    }
  }, [type]); 
  // const url =
  //   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjU2ODAzNjVlZGM5MmQyZTJiMzM3YTUwNjNhZjdhOCIsIm5iZiI6MTc0MTE2Njc3OS42MTIsInN1YiI6IjY3YzgxOGJiOTI2NGFhNTg2NjZlMmU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6PfhOS1taUZX92Ydw0AdYtQY_0JOqLnnBJWKYzISq0g",
  //   },
  // };

  // useEffect(() => {
  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((json) => setTopNewExit(json.results))
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <div className="container" style={{ minHeight: "50vh" }}>
      <div className="row row-cols-md-3 row-cols-lg-4 my-3">
        {topNewFilms.map((e) => (
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
