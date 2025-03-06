import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const linkImg = import.meta.env.VITE_IMG_LINK;

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const GlobalProvider = ({ children }) => {
  const [searchFilm, setSearchFilms] = useState("");
  // const [searchTV, setSearchTV] = useState("");

  //   console.log(searchFilm);

  function handleInputChange(e) {
    setSearchFilms(e.target.value);
    // setSearchTV(e.target.value);
  }

  // Gestisce la submission del form
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Ricerca per:", searchFilm);
    handleData();
  }

  const [films, setFilms] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  // ! oggetto per la chiamta dato da imdb
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  // ! chaimat fetch per film e tvShow

  function handleData() {
    fetch(
      apiUrl + `movie?query=${searchFilm}&include_adult=false&elanguage=it-IT`,
      // &&
      // (apiUrl + `tv?query=${searchTV}&include_adult=false&elanguage=it-IT`)
      options
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        //   setSearchTV(data.results);
        setFilms(data.results);
      })
      .catch((err) => console.error(err));

    fetch(
      `${apiUrl}tv?query=${searchFilm}&include_adult=false&language=it-IT`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setTVShows(data.results);
      })
      .catch((err) => console.error("Errore TV:", err));
  }


  //todo funzione valutazione in stelle 

  function reatingStar(valutazione) {
  // const fullStar = <i class="fa-solid fa-star"></i>;
  // const emptyStar = <i class="fa-regular fa-star"></i>;

  // const star= [fullStar, emptyStar]
  const fullStar = "★";
  const emptyStar = "☆";

  const numeroDiStelle = Math.round(valutazione / 2);
  const StampStarFull = fullStar.repeat(numeroDiStelle);
  const stampStarEmpty = emptyStar.repeat(5 - numeroDiStelle);

  
  const isHighRating = numeroDiStelle > 3;


  return (
    <span className={isHighRating? "gold":"silver"}>
      {StampStarFull}
      {stampStarEmpty}
    </span>
  );
}



  const value = {
    searchFilm,
    setSearchFilms,
    reatingStar,
    // searchTV,
    // setSearchTV,
    films,
    tvShows,
    handleData,
    handleSubmit,
    handleInputChange,
    linkImg,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
