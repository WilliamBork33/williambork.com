import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { skills } from "./skills-data";
import "./skills.styles.css";

function Skills() {
  return (
    <div className="pt-3 pb-6" id="skills">
      <h1 className="text-center font-details-b pb-4">SKILLS</h1>
      <Row className="d-flex flex-fill justify-content-center">
        {/* Research */}
        <Col md={4}>
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              {/* Frontend */}
              <Card.Title className="text-center card-title">
                Research
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.research.map((skill, index) => (
                  <span className="p-2" key={index}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Teaching */}
        <Col md={4}>
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center card-title">
                Teaching
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.teaching.map((skill, index) => (
                  <span className="p-2" key={index}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Technical */}
        <Col md={4}>
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              {/* Frontend */}
              <Card.Title className="text-center card-title">
                Technical
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.technicalSkills.map((skill, index) => (
                  <span className="p-2" key={index}>
                    <a
                      className="text-dark text-decoration-none"
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
