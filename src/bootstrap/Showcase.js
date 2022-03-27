import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Showcase = () => {
  return (
    //   text-sm-start means starting at small breakpoint and up, align text as START
    // so the text will be aligned start, except at very small screens, it aligns center
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5  text-center text-sm-start">
      {/* we use a container so that there is in built padding */}
      <div className="container">
        {/* d-flex---we will have 2 flex items inside this div */}
        {/* sm means will not be flex until it hits small breakpoint */}

        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="">
            <h1>
              Become A <span className="text-warning">Web Developer</span>
            </h1>
            {/* lead makes the text bigger */}
            <p className="lead">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button className="btn btn-primary btn-lg">
              Start The Enrollment
            </button>
          </div>
          {/* img-fluid keeps the image bounded in its container */}
          {/* w-50 makes it 50% of its original width */}
          {/* d-sm-block means display image as block only above small breakpoint */}
          <img
            className="img-fluid w-50 d-sm-block"
            src="https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
