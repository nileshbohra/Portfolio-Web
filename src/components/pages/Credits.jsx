import React from "react";
import Slide from "@material-ui/core/Slide";

export default function Credits() {
  return (
    <Slide in={true} direction="up" timeout={1000}>
      <section id="Credits">
        <h1 className="primaryTxt">Image Credits</h1>
        <div className="creditImage">
          <img
            src="./images/heroImage.jpg"
            alt="Digital vector created by freepik - www.freepik.com"
          />
          <a href="https://www.freepik.com/vectors/digital" target="_blank">
            Digital vector created by freepik - www.freepik.com
          </a>
        </div>
      </section>
    </Slide>
  );
}
