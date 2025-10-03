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
                  Researcher and educator applying sophisticated methods to provide actionable insights for clients broadly within the social sciences.
                </p>
                <p>
                  Expertise in hierarchical/mixed-level linear modeling, social network analysis, statistical programming, large-scale assessment,  data science, and more.
                </p>
                <p>
                  Experience spanning multiple sectors including education, government, and science policy.
                </p>
                <p>
                  Former K-12 teacher with international work experience in Taiwan, Mexico and the United States of America.
                </p>
                <p>
                  Multilingual in English and Spanish.
                </p>
                <p>
                  Available for research and data science work.
                </p>
                <Col className="d-flex justify-content-center flex-wrap">
                <div>
                    <a href="https://drive.google.com/file/d/16_ysYkaZHxrpA41vSdaUu4a31fxMgOx7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        Full Resume
                      </Button>
                    </a>
                  </div>
{/*                   <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contact Me
                      </Button>
                    </a>
                  </div> */}
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
