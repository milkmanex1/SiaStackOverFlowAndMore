import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMale,
  faPeopleArrows,
  faPersonBooth,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Boxes = () => {
  return (
    <section class="p-5">
      <div className="container ">
        <div className="row text-center">
          {/*-------------------- single column ------------------------*/}
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h2 mb-3">
                  <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                </div>
                <h3 className="card-title">Virtual</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/*-------------------- end of single column ------------------------*/}

          {/*-------------------- single column ------------------------*/}
          <div className="col-md ">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h2 mb-3">
                  <FontAwesomeIcon icon={faPersonBooth}></FontAwesomeIcon>
                </div>
                <h3 className="card-title">Hybrid</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-dark">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/*-------------------- end of single column ------------------------*/}
          {/*-------------------- single column ------------------------*/}
          <div className="col-md ">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h2 mb-3">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <h3 className="card-title">In Person</h3>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/*-------------------- end of single column ------------------------*/}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
