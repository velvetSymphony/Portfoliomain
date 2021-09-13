import React from "react";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="box-container" id="Contacts">
      <div className="content-container">
        <h2 className='contact-title'>Get In Touch</h2>
        <p className="contact-description">Feel free to contact me and send me a message using the form below!, I always have a way to innovate things!</p>
        <div className="outline3"></div>
        <div className="form-container">
          
          <InputGroup className="mb-3">
            <FormControl placeholder="Full-name"></FormControl>
          </InputGroup>
          
          <InputGroup className="mb-3">
            <FormControl placeholder="Email"></FormControl>
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>Leave a message</InputGroup.Text>
            <FormControl as="textarea" label="textarea" />
          
          </InputGroup>
          <Button className ='button-submit' variant="outline-light" type="submit" >Submit</Button>
        </div>
        <div className="text-container">
          <h5>Alternatively (if the above isn't working yet)</h5>
          <p>Please contact me at</p>
          <p>abhishekcs96@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
