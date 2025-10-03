import React from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import L_MSU from "../../assets/img/roles/michigan-state-university.svg";
import L_IJC from "../../assets/img/roles/ijc.svg";

import "./roles.styles.css";

function Roles () {
  return (
    <div id="roles">
      <h1 className="pt-3 text-center font-details-b pb-3">CURRENT ROLES</h1>
      
        <Container>
        
            <Card className="focus">
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_IJC} alt="International Joint Commission Logo" />
                <Card.Img variant="top" className="img-resize" src={L_MSU} alt="MSU Spartan Helmet Logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">International Joint Commission<br />&<br />Michigan State University</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">2024-Present</strong>
                    <ul className="text-left">
                      <li><strong>Researcher Consultant</strong>
                        <ul>
                          <li><a href="https://ijc.org/en/great-lakes-science-plan-network-analysis" target="_blank" rel="noopener noreferrer">Contracted</a> to research the institutions and individuals involved in climate-related science activities around the Great Lakes basin in Canada and the United States.</li>
                          <li>Used social network analysis to advance understanding of the network of institutions and individuals involved in conducting and/or funding Great Lakes science activity.</li>
                          <li>Findings support strategic coordination and information sharing among Great Lakes science institutions to support communications, outreach, and engagement with the <a href="https://ijc.org/sites/default/files/SAB%20Science%20Plan%20One%20Pager-final%20digital.pdf" target="_blank" rel="noopener noreferrer">Great Lakes Science Plan</a>.
                          </li>
                        </ul>
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
        
<br></br>

 

        </Container>
      
    </div>
  );
};

export default Roles;
