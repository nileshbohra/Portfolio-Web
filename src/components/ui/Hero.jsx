import React from "react";
import Home from "../pages/Home";
// import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Credits from "../pages/Credits"
import Slide from "@material-ui/core/Slide"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <main>
        <Slide in={true} direction="up" timeout={1000}>
        <Switch>
          <Route exact path="/Home" component={Home} />
          {/* <Route exact path="/About" component={About} /> */}
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Credits" component={Credits} />
          <Route exact path="/" component={Home} />
        </Switch>
        </Slide>
      </main>
    </>
  );
}
