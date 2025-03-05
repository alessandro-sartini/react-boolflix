import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
  const linkImg = import.meta.env.VITE_IMG_LINK;

const GlobalProvider = ({ children }) => {
  const [searchFilm, setSearchFilms] = useState("");
  const [searchTV, setSearchTV] = useState("");

  //   console.log(searchFilm);

  function handleInputChange(e) {
    setSearchFilms(e.target.value);
    setSearchTV(e.target.value);
  }

  // Gestisce la submission del form
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Ricerca per:", searchFilm);
    handleData();
  }

  const [films, setFilms] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

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
      `${apiUrl}tv?query=${searchTV}&include_adult=false&language=it-IT`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setTVShows(data.results);
      })
      .catch((err) => console.error("Errore TV:", err));
  }

  const value = {
    searchFilm,
    setSearchFilms,
    searchTV,
    setSearchTV,
    films,
    tvShows,
    handleData,
    handleSubmit,
    handleInputChange,
    linkImg
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
