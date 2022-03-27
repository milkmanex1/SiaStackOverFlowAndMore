import React from "react";
import Button from "react-bootstrap/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./bootstrap/Navbar";
import Showcase from "./bootstrap/Showcase";
import Newsletter from "./bootstrap/Newsletter";
import Boxes from "./bootstrap/Boxes";
import Learn from "./bootstrap/Learn";
import Questions from "./bootstrap/Questions";
import Instructors from "./bootstrap/Instructors";
function AppBootstrap() {
  return (
    <div>
      <Navbar></Navbar>
      <Showcase></Showcase>
      <Newsletter></Newsletter>
      <Boxes></Boxes>
      <Learn></Learn>
      <Questions></Questions>
      <Instructors></Instructors>
    </div>
  );
}

export default AppBootstrap;
