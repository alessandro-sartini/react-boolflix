import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

// function reatingStar(valutazione) {
//   // const fullStar = <i class="fa-solid fa-star"></i>;
//   // const emptyStar = <i class="fa-regular fa-star"></i>;

//   // const star= [fullStar, emptyStar]
//   const fullStar = "★";
//   const emptyStar = "☆";

//   const numeroDiStelle = Math.round(valutazione / 2);
//   const StampStarFull = fullStar.repeat(numeroDiStelle);
//   const stampStarEmpty = emptyStar.repeat(5 - numeroDiStelle);

//   const isHighRating = numeroDiStelle > 3;

//   return (
//     <span className={isHighRating? "gold":"silver"}>
//       {StampStarFull}
//       {stampStarEmpty}
//     </span>
//   );
// }

export default function CardFilms() {
  const { films, handleData, linkImg, ratingStar } = useGlobalContext();

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      {films.length === 0 ? null : (
        <>
          <h1 className="mt-2 mb-4">film</h1>
          <div className="row row-cols-md-3 row-cols-lg-4">
            {films.map((film) => (
              <div className="mb-4 card-container" key={film.id}>
                <div className="card h-100 empty-card">
                  <div
                    className="
                  container 
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-column"
                  >
                    <h5 className="m-2 my-3 text-danger">{film.title}</h5>
                    <h6 className="m-2 text-muted">
                      titolo originale: {film.original_title}
                    </h6>
                    <span className="trama">trama: {film.overview}</span>

                    <span
                      className={`my-3 fi fi-${
                        film.original_language == "en"
                          ? "gb"
                          : film.original_language == "ja"
                          ? "jp"
                          : film.original_language
                      }`}
                    >
                      
                    </span>
                  </div>
                </div>

                <div className="card h-100 full-card">
                  <img
                    src={`${linkImg}w500${film.poster_path}`}
                    className="card-img-top"
                    alt={film.title}
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
                      {film.title}
                    </h5>
                    <label className="p-2">
                      {ratingStar(film.vote_average)}
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
//   const [films, setFilms] = useState([]);
//   const apiUrl = import.meta.env.VITE_API_URL;
//   const apiKey = import.meta.env.VITE_API_KEY;

//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: apiKey,
//       },
//     };
//   useEffect(() => {
//     // axios
//     //     .get(

//     //     ` https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US`)
//     //     // `${apiUrl}movie?query=batman&api_key=${apiKey}&include_adult=false&language=en-US`)
//     //   .then((res) => {
//     //     console.log(res.data);
//     //     // setFilms(res.data.results);
//     //   });
//     // .catch((err) => console.error("Error fetching films:", err))

//     /*

//         fetch(url, options)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json);
//                 setFilms(json.results);
//             })
//             .catch(err => console.error('error:' + err));
//         */

//       fetch(

//       apiUrl + "movie?query=batman&include_adult=false&language=en-US",
//       options
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setFilms(data.results);
//       })
//       .catch((err) => console.error(err));
//   }, []);
