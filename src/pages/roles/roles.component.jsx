import React from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import L_MSU from "../../assets/img/roles/michigan-state-university.svg";

import "./roles.styles.css";

function Roles () {
  return (
    <div id="roles">
      <h1 className="pt-3 text-center font-details-b pb-3">CURRENT ROLES</h1>
      
        <Container>
        
            <Card className="focus">
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_MSU} alt="MSU Spartan Helmet Logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Michigan State University </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">June 2018 - Present</strong>
                    <ul className="text-left">
                      <li><strong>Research Assistant:</strong>
                        <ul>
                          <li>Data engineered institutional data sets totaling a million rows spanning multiple data tables into a tidy data frame for statistical analysis.</li>
                          <li>Contributed results to meta analysis for recommendations on AP course credit in gateway science courses.</li>
                        </ul>
                      </li>
                      <li><strong>Digital Accessibility Graduate Assistant:</strong>
                        <ul>
                          <li>Audit and train instructors on designing accessible digital materials for all learners.</li>
                        </ul>
                      </li>
                      <li><strong>Teaching Assistant:</strong>
                        <ul>
                          <li>Teaching assistant graduate and undergraduate courses.</li>
                        </ul>
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
        
        </Container>
      
    </div>
  );
};

export default Roles;
