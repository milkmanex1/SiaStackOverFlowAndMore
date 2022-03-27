import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import s from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section class="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="text-capitalize mb-3 mb-md-0">
            sign up for our newsletter
          </h3>
          <div className={`input-group ${s["news-input"]}`}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
            <button className="btn btn-dark btn-lg" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
