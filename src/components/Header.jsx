import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
export default function Header() {

    const {handleSubmit, handleInputChange} = useGlobalContext();


    return (
        
        <header>
            <div className="container">
                
                <form onSubmit={handleSubmit}>
                
                    <input
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Cerca un film..."
                    />
                    <button tipe='submit'>Cerca</button>
                
                </form> 
            </div>
        
        </header>

    )



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