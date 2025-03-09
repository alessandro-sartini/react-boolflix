// import { useState } from "react";

// import { useGlobalContext } from "../context/GlobalContext";
import {  NavLink } from "react-router-dom";

import SearchBar from './headerComponent/SearchBar';



export default function Header() {
  // const { handleSubmit, handleInputChange } = useGlobalContext();

  return (
    <header className="shadow bg-dark">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-3 text-center">
            <h1 className="text-danger fs-1 p-2">
              <a className="text-danger" href="/">Boolix</a>
            </h1>
          </div>

          {/* Navbar con link centrati */}
          <div className="col-md-6">
            <nav className="d-flex justify-content-center my-3">
              <ul className="nav">
                <li className="nav-item">
                  <NavLink className="nav-link text-light px-3" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light px-3" to="/films">Films</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light px-3" to="/tvshows">TV Show</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Form di ricerca con input più lungo */}
          <div className="col-md-3 my-3">
          
           < SearchBar/>
          </div>
        </div>
      </div>
    </header>
  );
}
