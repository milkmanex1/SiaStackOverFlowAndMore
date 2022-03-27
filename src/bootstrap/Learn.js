import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Learn = () => {
  return (
    <>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src="https://miro.medium.com/max/750/1*qa4OJKpAO5NDgaiby7OHdw.jpeg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md p-5">
              <h2>Learn the Fundamentals</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                nemo quo voluptates tempore fugit reiciendis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                libero blanditiis facilis cupiditate vero, ratione at maxime
                nobis maiores dicta id aut tempore excepturi veritatis ipsum,
                quis laudantium sunt. Nesciunt.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
                nemo quo voluptates tempore fugit reiciendis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                libero blanditiis facilis cupiditate vero, ratione at maxime
                nobis maiores dicta id aut tempore excepturi veritatis ipsum,
                quis laudantium sunt. Nesciunt.
              </p>
              <a href="#" className="btn btn-light mt-3">
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                Read More
              </a>
            </div>
            <div className="col-md">
              <img
                src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn;
