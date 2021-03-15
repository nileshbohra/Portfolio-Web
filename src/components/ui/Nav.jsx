import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [status, setStatus] = useState("close");
  return (
    <>
      <header>
        <div className="logo">
          <NavLink to="/Home" activeClassName="none">
            <img src="./images/NileshBohra.png" alt="" width="65" />
          </NavLink>
        </div>
        <nav id="topNav">
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nilesh-bohra-4188a21a1/detail/skills/"
                target="_blank"
              >
                Skills
              </a>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/Credits">Credits</NavLink>
            </li>
          </ul>
        </nav>
        {status === "open" ? (
          <nav className="mobileNav">
            <NavLink
              to="/Home"
              onClick={() => {
                setStatus("close");
              }}
            >
              Home
            </NavLink>
            <a
              href="https://www.linkedin.com/in/nilesh-bohra-4188a21a1/detail/skills/"
              target="_blank"
              onClick={() => {
                setStatus("close");
              }}
            >
              Skills
            </a>
            <NavLink
              to="/Projects"
              onClick={() => {
                setStatus("close");
              }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/Contact"
              onClick={() => {
                setStatus("close");
              }}
            >
              Contact
            </NavLink>
            <NavLink
              to="/Credits"
              onClick={() => {
                setStatus("close");
              }}
            >
              Credits
            </NavLink>
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
