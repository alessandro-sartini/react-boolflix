import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export default function CardFilms() {
    const {films, handleData} = useGlobalContext();

    useEffect(() => { 

        handleData();



    },[])

  return (
    <div>
      {films.map((film) => (
        <div key={film.id}>
          <h2>{film.title}</h2>
        </div>
      ))}
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
