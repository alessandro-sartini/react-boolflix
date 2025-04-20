import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
// ! import newTop Function
import useTopNew from "./hooks/TopNew";
// ! import oprtions and key
import { options, apiUrl } from "../config/apiOptions";

import ratingStar from "../utilities/ratingStar";

// Creazione del contesto globale per condividere lo stato tra i componenti
const GlobalContext = createContext();

// Variabili d'ambiente per configurare l'URL dell'API, la chiave API e il link per le immagini
const linkImg = import.meta.env.VITE_IMG_LINK;

// Definizione del provider del contesto globale, che avvolge i componenti figli
const GlobalProvider = ({ children }) => {
  // Stato per memorizzare il termine di ricerca inserito dall'utente
  const [searchFilm, setSearchFilms] = useState("");
  // Stato per memorizzare la lista dei film ottenuti dalla ricerca
  const [films, setFilms] = useState([]);
  // Stato per memorizzare la lista delle serie TV ottenute dalla ricerca
  const [tvShows, setTVShows] = useState([]);
  const [highReating, setHighReating] = useState([]);

  



  // Funzione per aggiornare lo stato del termine di ricerca quando l'utente digita
  function handleInputChange(e) {
    setSearchFilms(e.target.value); // Imposta il valore dell'input nello stato
  }

  // Funzione per gestire l'invio del form di ricerca
  function handleSubmit(e) {
    e.preventDefault(); // Impedisce il ricaricamento della pagina
    console.log("Ricerca per:", searchFilm); // Stampa il termine di ricerca nella console
    handleData(); // Chiama la funzione per recuperare i dati
  }

  

  //  const [loading, setLoading] = useState(false);
  // Funzione per effettuare le richieste API e aggiornare gli stati di film e serie TV
  function handleData() {


    // Richiesta per i film basata sul termine di ricerca
    fetch(
      `${apiUrl}movie?query=${searchFilm}&include_adult=true&language=it-IT`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const highReatedFilms = data.results.filter((f) => f.vote_average > 7);
        setHighReating(highReatedFilms);

        setFilms(data.results);
      })
      .catch((err) => console.error(err));

    // Richiesta per le serie TV basata sul termine di ricerca
    fetch(
      `${apiUrl}tv?query=${searchFilm}&include_adult=true&language=it-IT`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const highReatedTvShows = data.results.filter(
          (f) => f.vote_average > 7
        );
        setHighReating(highReatedTvShows);
        setTVShows(data.results);
      })

      .catch((err) => console.error("Errore TV:", err));
  }

  console.log(highReating); 


  const { handleTopNew, topNewProducts, setTopNewProducts } = useTopNew();

  // Oggetto che contiene tutti i valori e le funzioni da passare ai componenti consumatori del contesto
  const value = {
    searchFilm,
    setSearchFilms,
    ratingStar,
    films,
    tvShows,
    handleData,
    handleSubmit,
    handleInputChange,
    linkImg,
    handleTopNew,
    topNewProducts,
    setTopNewProducts,
    highReating
  };

  // Ritorna il provider del contesto, passando il valore ai componenti figli
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

// Hook personalizzato per facilitare l'accesso al contesto globale nei componenti
const useGlobalContext = () => useContext(GlobalContext);

// Esportazione del provider e dell'hook per l'uso in altri file
export { GlobalProvider, useGlobalContext };
// // Funzione per convertire una valutazione numerica in un sistema di stelle
// function ratingStar(valutazione) {
//   const fullStar = "★";
//   const emptyStar = "☆";
//   const numeroDiStelle = Math.round(valutazione / 2);
//   const stampStarFull = fullStar.repeat(numeroDiStelle);
//   const stampStarEmpty = emptyStar.repeat(5 - numeroDiStelle);
//   const isHighRating = numeroDiStelle > 3;

//   // Restituisce un elemento span con le stelle e una classe CSS basata sul rating
//   return (
//     <span className={isHighRating ? "gold" : "silver"}>
//       {stampStarFull}
//       {stampStarEmpty}
//     </span>
//   );
// }
