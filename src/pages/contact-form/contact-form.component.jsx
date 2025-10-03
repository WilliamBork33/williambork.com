import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

function ContactForm () {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:borkwill@msu.edu" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success" title="borkwill@msu.edu">
                  <i className="fas fa-envelope-square"></i> Email
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/william-nicholas-bork-rodriguez-aa865152/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Connect on LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/WilliamBork33" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="View My Projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
