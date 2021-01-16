import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function About () {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT WILLIAM</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <p>
                  Researcher and educator interested in data science, international education, and teacher professional practice.
                </p>
                <br></br>
                <p>
                  I’ll run your data project end-to-end starting by data engineering your messy datasets, spanning multiple tables, into a tidy data frame ready for the rest of the data science pipeline including: quantitative research design, statistical analysis, statistical model building, and finally data visualizations.
                </p>
                <br></br>
                <p>
                  Licensed as a P-12 school building principal. Former K-12 teacher with intercultural work experience in the USA, Mexico, and Taiwan.
                </p>
                <br></br>
                <p>
                  Multilingual in English and Spanish.
                </p>
                <br></br>
                <p>
                  Seeking roles that allow me to apply data science in K-12 teaching and learning.
                </p>
                <Col className="d-flex justify-content-center flex-wrap">
                <div>
                    <a href="https://drive.google.com/drive/folders/1UrtFXqf0niksYNmckwvVJfRq8kD8FNTO?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        Full Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contact Me
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
