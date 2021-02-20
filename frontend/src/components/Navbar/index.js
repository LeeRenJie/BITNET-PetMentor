import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            PetMentor
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="nav-link active"
                  aria-current="page"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Pets" className="nav-link">
                  My Pet
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Stats" className="nav-link">
                  Stats
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
