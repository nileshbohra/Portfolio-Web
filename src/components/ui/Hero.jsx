import React from "react";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Footer from "./Footer";

export default function Hero() {
    return (
        <>
            <main>
                <Home/>
                <Experience/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </main>
        </>
    );
}
