import React, { useState } from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import Hero from "./Hero";
import Email from "./Email";
import Slide from "@material-ui/core/Slide";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [Loading, setLoading] = useState(false);
  return (
    <>
      {Loading ? (
        <Router>
          <Nav />
          <Socials />
          <Hero />
          <Email />
        </Router>
      ) : (
        //splashScreen
        <Slide in={true} direction="down" timeout={1500}>
          <div className="splashScreen">
            <img
              className="splashScreenImg"
              src="./images/NileshBohra.png"
              alt=""
            />
          </div>
        </Slide>
      )}
      {setTimeout(() => {
        setLoading(true);
      }, 2100)}
    </>
  );
}
