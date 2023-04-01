import React from "react";
import Slide from "@material-ui/core/Slide";

export default function Email() {
    return (
        <>
            <Slide in={true} direction="left" timeout={3000}>
                <aside id="emailSideBar">
                    <a href="mailto:nmbohra2000@gmail.com">
                        nmbohra2000@gmail.com
                    </a>
                </aside>
            </Slide>
        </>
    );
}
