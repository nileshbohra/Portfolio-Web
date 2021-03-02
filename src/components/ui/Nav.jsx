import React, { useState } from "react";
// import MenuIcon from "@material-ui/icons/Menu";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function Nav() {
  const [status, setStatus] = useState("close");
  return (
    <>
      <header>
        <div className="logo">
          <a href="/Home">Nilesh Bohra</a>
        </div>
        <nav id="topNav">
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nilesh-bohra-4188a21a1/detail/skills/"
                target="_blank"
              >
                Skills
              </a>
            </li>
            {/* <li>
              <a href="/About">About</a>
            </li> */}
            <li>
              <a href="/Projects">Projects</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li>
              <a href="/Credits">Credits</a>
            </li>
          </ul>
        </nav>
        {status === "open" ? (
          <nav className="mobileNav">
            <a href="/Home">Home</a>
            <a
              href="https://www.linkedin.com/in/nilesh-bohra-4188a21a1/detail/skills/"
              target="_blank"
            >
              Skills
            </a>
            {/* <a href="/About">About</a> */}
            <a href="/Projects">Projects</a>
            <a href="/Contact">Contact</a>
            <a href="/Credits">Credits</a>
          </nav>
        ) : null}
        <div
          role="button"
          onClick={() => setStatus(status === "close" ? "open" : "close")}
          className="hamburgerMenu"
        >
          <i className={status}></i>
          <i className={status}></i>
          <i className={status}></i>
        </div>
      </header>
    </>
  );
}
