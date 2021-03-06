import React, { useState } from "react";
import FormGroup from "./components/FormGroup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";

export default function Contact() {
  //Snackbar for Success
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleSuccess = () => {
    setOpenSuccess(true);
  };
  const handleError = () => {
    setOpenError(true);
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };
  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  return (
    <Slide in={true} direction="up" timeout={1000}>
      <section id="Contact">
        <h1 className="primaryTxt heading">Contact Me</h1>
        <div className="contactForm">
          <form name="contact" method="post" onSubmit={(e)=>{
            if(e){
              handleSuccess();
            }else{
              console.log("error");
              handleError();
            }
            e.preventDefault();
          }}>
            <input type="hidden" name="form-name" value="contact" />
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
              autoComplete="off"
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
            <button className="btn formGroup btnSubmit" type="submit">
              Submit
            </button>
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
              <Alert onClose={handleCloseSuccess} severity="success">
                Successfully submitted form!
              </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
              <Alert onClose={handleCloseError} severity="error">
                Error When Submitting Form
              </Alert>
            </Snackbar>
          </form>
        </div>
      </section>
    </Slide>
  );
}
