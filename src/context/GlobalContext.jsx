import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [searchFilm, setSearchFilms] = useState("");

  //   console.log(searchFilm);

  function handleInputChange(e) {
    return setSearchFilms(e.target.value);
  }

  // Gestisce la submission del form
  function handleSubmit(e) {
    e.preventDefault();
      console.log("Ricerca per:", searchFilm);
      handleData();
      
  }

  const [films, setFilms] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:  `Bearer ${apiKey}`,
    },
  };

  function handleData() {
    fetch(
      apiUrl + `movie?query=${searchFilm}&include_adult=false&elanguage=it-IT`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFilms(data.results);
      })
      .catch((err) => console.error(err));
  }

  const value = {
    searchFilm,
    films,
    handleData,
    handleSubmit,
    handleInputChange,
  };

  return (
      <GlobalContext.Provider value={value}>
          {children}
      </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
