import { useGlobalContext } from "../../context/GlobalContext";
// ! provo location
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const { handleSubmit, handleInputChange } = useGlobalContext();
  
  //! per ottenere url corrente
  const location = useLocation();
  // ! percorso non home non ritornare la serch bar
  if (location.pathname != "/") {
    return null
  }

  return (
    <form
      className="d-flex justify-content-center "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Cerca un film..."
        className="form-control custom-input mx-2"
      />
      <button className="btn btn-outline-danger p-2" type="submit">
        Cerca
      </button>
    </form>
  );
}
