import React, {useState} from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import Hero from "./Hero";
import Email from "./Email";
import Slide from "@material-ui/core/Slide";
import logoImg from "../../assets/images/logo.png";

export default function App() {
    const [Loading, setLoading] = useState(false);
    return (
        <>
            {Loading ? (
                <>
                    <Nav/>
                    <Socials/>
                    <Hero/>
                    <Email/>
                </>
            ) : (
                //splashScreen
                <Slide in={true} direction="down" timeout={1500}>
                    <div className="splashScreen">
                        <img
                            className="splashScreenImg"
                            src={logoImg}
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
