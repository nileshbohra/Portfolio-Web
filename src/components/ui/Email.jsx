import React from "react";
import Slide from "@material-ui/core/Slide";

export default function Email() {
  return (
    <>
      <Slide in={true} direction="left" timeout={3000}>
        <aside id="emailSideBar">
          <ul>
            <li>
              <a href="mailto:nileshbohra2000@gmail.com">
                nileshbohra2000@gmail.com
              </a>
            </li>
            <li>
              <hr />
            </li>
          </ul>
        </aside>
      </Slide>
    </>
  );
}
