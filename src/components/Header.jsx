import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
export default function Header() {
  const { handleSubmit, handleInputChange } = useGlobalContext();

  return (
    <header>
      <div className="container-fluid mt-2">
        <div className="row align-items-center ">
          <div className="col-md-3">
            <h1 className="text-danger fs-1">Boolix</h1>
          </div>
          <div className="col-md-9">
            <form
              className="d-flex justify-content-end"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                onChange={handleInputChange}
                placeholder="Cerca un film..."
                className="m-2 form-control w-50 custom-input"
              />
              <button className="btn btn-outline-danger m-2" tipe="submit">
                Cerca
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );

  // const [searchFilm, setSearchFilms] = useState("");

  // console.log(searchFilm)

  // function handleInputChange(e) {

  //     return setSearchFilms(e.target.value)

  // }

  //  // Gestisce la submission del form
  // function handleSubmit(e) {
  //     e.preventDefault();
  //     // Qui puoi aggiungere la logica per la ricerca, ad esempio:
  //     console.log("Ricerca per:", searchFilm);
  //     // Potresti fare una chiamata API o altro con il valore di searchFilm
  // }
}
