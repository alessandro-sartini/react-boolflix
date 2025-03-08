// import { useState } from "react";

import { useGlobalContext } from "../context/GlobalContext";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const { handleSubmit, handleInputChange } = useGlobalContext();

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
            <nav className="d-flex justify-content-center">
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
          <div className="col-md-3">
            <form className="d-flex justify-content-end" onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleInputChange}
                placeholder="Cerca un film..."
                className="m-2 form-control w-75 custom-input"
              />
              <button className="btn btn-outline-danger m-2" type="submit">
                Cerca
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
