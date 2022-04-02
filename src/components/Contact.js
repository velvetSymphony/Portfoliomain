import React from "react";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./styles/Contact.css";

// Contact form to obtain input from user and connect to my backend hosted on aws.
// We use useState in order to preserve and update the state of the data object to pass it on to the api
// Also to pass control of the state of the form to react, instead of the form maintaining its own state

// Visit counter javascript included here.
// Fetching data from backend api gateway

const Contact = () => {
  const [visits, setVisits] = useState("");
  //useEffect to avoid continuous re-rendering of the component and calling the fetch infinitely
  //causing infinite lambda invocations
  useEffect(() => {
    fetch(
      "https://sch5qsrg1m.execute-api.ap-southeast-2.amazonaws.com/Prod/visits"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVisits(data);
      });
  }, []);

  // using useState to set initial state values of my data object
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // When data changes, handlechange is invoked to update the state of the data object using setstate(Data) method
  // Using the spread operator, we then pass updated values to the Data object while preserving the previous state
  // without spreading, only the last input of the form is updated

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log([e.target.name], e.target.value);
  };
// Function to pass the data object to our api endpoint at Gateway using the fetchapi
  const [msg, setMsg] = useState("Email Sent");
  const formsubmit = (e) => {
    let submit = document.querySelector(".submit-response");
    e.preventDefault();
    submit.textContent = "Sending...";

// using the init object of the fetch parameter to describe the nature of the api call.
    fetch(
      "https://sch5qsrg1m.execute-api.ap-southeast-2.amazonaws.com/Prod/contact",
      {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((response) => {
      console.log(response);
      if (response.status === 0) {
        setMsg("Email Sent");
        console.log(msg);
        submit.textContent = msg;
        // Should include a catch here to identify rejected promises, will work on improving error handling.
      } else if (response.status === 500 || response.status === 400) {
        setMsg("Failed, please try again");
        submit.textContent = msg;
      }
    });
  };

  return (
    <div className="box-container" id="Contacts">
      <div className="content-container" id="contentcontainer">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Feel free to get in touch and send me a message about any new
          opportunities and openings you may have, appreciate it.
        </p>
        <div className="outline3"></div>
        <form onSubmit={formsubmit}>
          <div className="form-container">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Full-name"
                name="name"
                type="text"
                id="Full-name"
                value={data.name}
                onChange={handlechange}
              ></FormControl>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                name="email"
                type="email"
                id="Email"
                value={data.email}
                onChange={handlechange}
              ></FormControl>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                as="textarea"
                placeholder="Leave a Message"
                label="textarea"
                name="message"
                id="Message"
                value={data.message}
                onChange={handlechange}
              />
            </InputGroup>
            <p className="submit-response"></p>
            <Button
              className="button-submit"
              variant="outline-light"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
        <div className="text-container">
          <h5 className="header-five">Alternatively</h5>
          <p className="contact-para">Please contact me at</p>
          <p className="contact-para">abhishekcs96@gmail.com</p>
          <p className="visit-count">Number of site visits : {visits}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
