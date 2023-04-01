import React, {useState} from "react";
import logoImg from "../../assets/images/logo.png";

export default function Nav() {
    const [status, setStatus] = useState("close");
    return (
        <>
            <header>
                <div className="logo">
                    <a href="#Home">
                        <img src={logoImg} alt="" width="65"/>
                    </a>
                </div>
                <nav id="topNav">
                    <ul>
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#Experience">Experience</a>
                        </li>
                        <li>
                            <a href="#Skills">Skills</a>
                        </li>
                        <li>
                            <a href="#Projects">Projects</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                {status === "open" ? (
                    <nav className="mobileNav">
                        <a
                            href="#Home"
                            onClick={() => {
                                setStatus("close");
                            }}
                        >
                            Home
                        </a>
                        <a
                            href="#Experience"
                            onClick={() => {
                                setStatus("close");
                            }}
                        >
                            Experience
                        </a>
                        <a
                            href="#Skills"
                            onClick={() => {
                                setStatus("close");
                            }}
                        >
                            Skills
                        </a>
                        <a
                            href="#Projects"
                            onClick={() => {
                                setStatus("close");
                            }}
                        >
                            Projects
                        </a>
                        <a
                            href="#Contact"
                            onClick={() => {
                                setStatus("close");
                            }}
                        >
                            Contact
                        </a>
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
