import React from "react";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Credits from "../pages/Credits";
import { Route, Switch } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Credits" component={Credits} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </>
  );
}
