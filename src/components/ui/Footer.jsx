import React from "react";

export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <section id='Footer'>
            <p className="secondaryTxt">made by nilesh bohra | &copy; {currentYear}</p>
        </section>
    );
}
