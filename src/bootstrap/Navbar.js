import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand ">
          Frontend Bootcamp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a href="#learn" className="nav-link ">
                What You'll Learn
              </a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link ">
                Questions
              </a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link ">
                Instructors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
