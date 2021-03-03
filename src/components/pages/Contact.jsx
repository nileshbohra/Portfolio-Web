import React, { useState } from "react";
import FormGroup from "./components/FormGroup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export default function Contact() {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <section id="Contact">
      <h1 className="primaryTxt heading">Contact Me</h1>
      <div className="contactForm">
        <form name="contact" method="POST" netlify onSubmit={(e)=>{
          e.preventDefault();
          handleClick();
        }}>
          <div className="row">
            <div className="col">
              <FormGroup
                labelFor="name"
                labelText="Name"
                inputType="text"
                inputName="name"
                inputPlaceholder="Enter Your Name"
                required={true}
              />
            </div>
            <div className="col">
              <FormGroup
                labelFor="email"
                labelText="Email"
                inputType="email"
                inputName="email"
                inputPlaceholder="Enter Your Email Address"
                required={true}
              />
            </div>
          </div>

          <FormGroup
            labelFor="subject"
            labelText="Subject"
            inputType="text"
            inputName="subject"
            inputPlaceholder="Type Your Subject"
          />
          <div className="formGroup">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="8"
              placeholder="Type Your Message"
              required
            ></textarea>
          </div>
          <button className="btn formGroup" type="submit">
            Submit
          </button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              This is a success message!
            </Alert>
          </Snackbar>
        </form>
      </div>
    </section>
  );
}
