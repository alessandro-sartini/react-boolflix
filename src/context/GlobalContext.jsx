import { createContext, useContext, useState } from "react";

// Creazione del contesto globale per condividere lo stato tra i componenti
const GlobalContext = createContext();

// Variabili d'ambiente per configurare l'URL dell'API, la chiave API e il link per le immagini
const linkImg = import.meta.env.VITE_IMG_LINK;
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// Definizione del provider del contesto globale, che avvolge i componenti figli
const GlobalProvider = ({ children }) => {
  // Stato per memorizzare il termine di ricerca inserito dall'utente
  const [searchFilm, setSearchFilms] = useState("");
  // Stato per memorizzare la lista dei film ottenuti dalla ricerca
  const [films, setFilms] = useState([]);
  // Stato per memorizzare la lista delle serie TV ottenute dalla ricerca
  const [tvShows, setTVShows] = useState([]);

  // Opzioni per le richieste fetch, con metodo GET e intestazioni per autenticazione
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

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

  // Funzione per effettuare le richieste API e aggiornare gli stati di film e serie TV
  function handleData() {
    // Richiesta per i film basata sul termine di ricerca
    fetch(
      `${apiUrl}movie?query=${searchFilm}&include_adult=false&language=it-IT`,
      options
    )
      .then((res) => res.json()) 
      .then((data) => setFilms(data.results))
      .catch((err) => console.error(err)); 

    // Richiesta per le serie TV basata sul termine di ricerca
    fetch(
      `${apiUrl}tv?query=${searchFilm}&include_adult=false&language=it-IT`,
      options
    )
      .then((res) => res.json()) 
      .then((data) => setTVShows(data.results))

      .catch((err) => console.error("Errore TV:", err)); 
  }

  // Funzione per convertire una valutazione numerica in un sistema di stelle
  function ratingStar(valutazione) {
    const fullStar = "★";
    const emptyStar = "☆";
    const numeroDiStelle = Math.round(valutazione / 2);
    const stampStarFull = fullStar.repeat(numeroDiStelle);
    const stampStarEmpty = emptyStar.repeat(5 - numeroDiStelle);
    const isHighRating = numeroDiStelle > 3;

    // Restituisce un elemento span con le stelle e una classe CSS basata sul rating
    return (
      <span className={isHighRating ? "gold" : "silver"}>
        {stampStarFull}
        {stampStarEmpty}
      </span>
    );
  }

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
