import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand ">
            <h1 className={styles["brandTitle"]}>PetMentor</h1>
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
                <NavLink to="/" className="nav-link" aria-current="page">
                  <span className="nav-direct">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="nav-link"
                  aria-current="page"
                >
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Chat" className="nav-link">
                  <span>Chats</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Pets" className="nav-link">
                  <span>My Pet</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Stats" className="nav-link">
                  <span>Stats</span>
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
