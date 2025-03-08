import { useState } from "react";

export default function useTopNew() {
  const [topNewFilms, setTopNewFilms] = useState([]);
  // const [topNewTV, setTopNewTV] = useState([]);
  
const apiKey = import.meta.env.VITE_API_KEY;


  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };


  function handleTopNew(filmOrTv) {
    const urlFilm = `https://api.themoviedb.org/3/discover/${filmOrTv}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    fetch(urlFilm, options)
      .then((res) => res.json())
      .then((json) => setTopNewFilms(json.results))
      .catch((err) => console.error(err));

    // const urlTv =
    //   "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";

    // fetch(urlTv, options)
    //   .then((res) => res.json())
    //   .then((json) => setTopNewTV(json.results))
    //   .catch((err) => console.error(err));
  }
  return { handleTopNew,topNewFilms, setTopNewFilms };
}
