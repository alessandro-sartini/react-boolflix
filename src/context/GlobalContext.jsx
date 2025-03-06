import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
const linkImg = import.meta.env.VITE_IMG_LINK;

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const GlobalProvider = ({ children }) => {
  const [searchFilm, setSearchFilms] = useState("");
  // const [searchTV, setSearchTV] = useState("");

  // Funzione che gestisce il cambiamento dell'input dell'utente
  // Aggiorna lo stato 'searchFilm' con il valore digitato dall'utente
  function handleInputChange(e) {
    setSearchFilms(e.target.value); // Imposta il valore dell'input nello stato
    // setSearchTV(e.target.value); // Commentato: servirebbe per una ricerca TV separata
  }

  // Funzione che gestisce l'invio del form
  // Previene il comportamento di default del form (ricaricamento pagina)
  // Stampa in console il termine di ricerca e chiama handleData per fetch dei dati
  function handleSubmit(e) {
    e.preventDefault(); // Impedisce il refresh della pagina
    console.log("Ricerca per:", searchFilm); // Mostra il termine cercato
    handleData(); // Avvia la funzione per recuperare i dati
  }

  const [films, setFilms] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  // Funzione che effettua le chiamate API per ottenere film e serie TV
  // Usa fetch per interrogare due endpoint separati: uno per film e uno per serie TV
  function handleData() {
    // Prima chiamata fetch per i film
    fetch(
      apiUrl + `movie?query=${searchFilm}&include_adult=false&elanguage=it-IT`, // Costruisce l'URL con il termine di ricerca
      options // Opzioni della richiesta con metodo GET e header di autorizzazione
    )
      .then((res) => res.json()) // Converte la risposta in JSON
      .then((data) => {
        setFilms(data.results); // Aggiorna lo stato 'films' con i risultati
      })
      .catch((err) => console.error(err)); // Gestisce eventuali errori loggandoli

    // Seconda chiamata fetch per le serie TV
    fetch(
      `${apiUrl}tv?query=${searchFilm}&include_adult=false&language=it-IT`, // URL per le serie TV
      options // Stesse opzioni della richiesta precedente
    )
      .then((res) => res.json()) // Converte la risposta in JSON
      .then((data) => {
        setTVShows(data.results); // Aggiorna lo stato 'tvShows' con i risultati
      })
      .catch((err) => console.error("Errore TV:", err)); // Gestisce errori specifici per le serie TV
  }

  //! Funzione che trasforma una valutazione numerica in stelle visive
  // Converte un voto in un sistema a 5 stelle
  function reatingStar(valutazione) {
    // 'valutazione' è il voto da convertire
    const fullStar = "★"; // Simbolo per stella piena
    const emptyStar = "☆"; // Simbolo per stella vuota

    const numeroDiStelle = Math.round(valutazione / 2); // Divide il voto per 2 e arrotonda (es. 7/2 = 3.5 -> 4 stelle)
    const StampStarFull = fullStar.repeat(numeroDiStelle); // Ripete la stella piena per il numero calcolato
    const stampStarEmpty = emptyStar.repeat(5 - numeroDiStelle); // Riempie il resto fino a 5 con stelle vuote

    const isHighRating = numeroDiStelle > 3; // Controlla se il rating è alto (> 3 stelle)

    // Restituisce un elemento JSX con le stelle, applicando una classe CSS in base al rating
    return (
      <span className={isHighRating ? "gold" : "silver"}>
        {StampStarFull} {/* Stelle piene */}
        {stampStarEmpty} {/* Stelle vuote */}
      </span>
    );
  }

  const value = {
    searchFilm,
    setSearchFilms,
    reatingStar,
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
