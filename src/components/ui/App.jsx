import React from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import Hero from "./Hero";
import Email from "./Email";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Socials />
        <Hero />
        <Email />
      </Router>
    </>
  );
}
