import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export default function CardFilms() {
  const { films, handleData } = useGlobalContext();

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      {films.map((film) => (
        <div className="col-md-4 mb-4" key={film.id}>
          <div className="card h-100 position-relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              className="card-img-top"
              alt={film.title}
            />
            <div className="container-opacity position-absolute 
                bottom-0
                start-50 
                translate-middle-x
                rounded-pill
                ">
              <h5
                className="
                card-title
                 text-white 
                
                text-truncate 
                p-3
                m-0"
                style={{ zIndex: 1 }}
              >
                {film.title}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </>
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
