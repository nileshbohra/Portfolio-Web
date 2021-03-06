import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [status, setStatus] = useState("close");
  return (
    <>
      <header>
        <div className="logo">
          <NavLink to="/Home" activeClassName="none">
            Nilesh Bohra
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
            <NavLink to="/Home">Home</NavLink>
            <a
              href="https://www.linkedin.com/in/nilesh-bohra-4188a21a1/detail/skills/"
              target="_blank"
            >
              Skills
            </a>
            <NavLink to="/Projects">Projects</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/Credits">Credits</NavLink>
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
