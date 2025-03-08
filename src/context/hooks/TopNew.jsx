import { useState } from "react";
import { options } from "../../config/apiOptions";


export default function useTopNew() {

  const [topNewProducts, setTopNewProducts] = useState([]);




  function handleTopNew(filmOrTv) {
    const urlFilm = `https://api.themoviedb.org/3/discover/${filmOrTv}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    fetch(urlFilm, options)
      .then((res) => res.json())
      .then((json) => setTopNewProducts(json.results))
      .catch((err) => console.error(err));

  }
  return { handleTopNew,topNewProducts, setTopNewProducts };
}
  // ! spostate in
  // const [topNewTV, setTopNewTV] = useState([]);
  
// const apiKey = import.meta.env.VITE_API_KEY;


  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: `Bearer ${apiKey}`,
  //   },
  // };
