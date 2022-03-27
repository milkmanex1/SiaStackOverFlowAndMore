import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Instructors = () => {
  return (
    <section id="instructors" class="p-5 bg-primary">
      <div className="container">
        <div className="row text-white text-center mb-5">
          <h2 className="text-capitalize">our instructors</h2>
          <p>
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
        </div>
        <div className="row text-center g-4">
          {/*-------------------- single column ------------------------*/}
          <div className="col-md-6 col-lg-3">
            <div className="card bg-white">
              <div className="card-body text-center">
                <img
                  src="https://i.pinimg.com/originals/f5/b2/21/f5b221fd65cebfba528e5cff465127e4.jpg"
                  alt=""
                  class="rounded-circle img-fluid"
                />
                <h3 className="card-title">Sarah</h3>
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
          <div className="col-md-6 col-lg-3">
            <div className="card bg-white">
              <div className="card-body text-center">
                <img
                  src="https://images.summitmedia-digital.com/cosmo/images/2020/04/15/best-selfie-poses-2-jane-de-leon-1586944311.jpg"
                  alt=""
                  class="rounded-circle img-fluid"
                />
                <h3 className="card-title">Sarah</h3>
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
          <div className="col-md-6 col-lg-3">
            <div className="card bg-white">
              <div className="card-body text-center">
                <img
                  src="https://akns-images.eonline.com/eol_images/Entire_Site/2020717/rs_600x600-200817171917-600-madison-bailey-mv-81720.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top"
                  alt=""
                  class="rounded-circle img-fluid"
                />
                <h3 className="card-title">Sarah</h3>
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
          <div className="col-md-6 col-lg-3">
            <div className="card bg-white">
              <div className="card-body text-center">
                <img
                  src="https://images.summitmedia-digital.com/cosmo/images/2020/04/15/best-selfie-poses-14-andrea-brillantes-1586944317.jpg"
                  alt=""
                  class="rounded-circle img-fluid"
                />
                <h3 className="card-title">Sarah</h3>
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

export default Instructors;
