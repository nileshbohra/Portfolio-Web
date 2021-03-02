import React, { useState } from "react";
import FormGroup from "./components/FormGroup";

export default function Contact() {
  return (
    <section id="Contact">
      <h1 className="primaryTxt heading">Contact Me</h1>
      <div className="contactForm">
        <form name="portfolioContact" action="/" method="Post" data-netlify="true">
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
        </form>
      </div>
    </section>
  );
}
