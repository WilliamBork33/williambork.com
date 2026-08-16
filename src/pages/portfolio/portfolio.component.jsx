import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import IJC_SNA_Screenshot from "../../assets/img/portfolio/ijc_sna_screenshot.png";
import VIS_THUMBNAIL from "../../assets/img/portfolio/interactive_visualization_thumbnail.png";
import Carousel from "react-bootstrap/Carousel";
import SLIDE0 from "../../assets/img/portfolio/matematica.png";
import SLIDE1 from "../../assets/img/portfolio/lsae.png";
import SLIDE2 from "../../assets/img/portfolio/jrst.png";
import SLIDE3 from "../../assets/img/portfolio/ice.png";
import SLIDE4 from "../../assets/img/portfolio/proquest.png";

import "./portfolio.styles.css";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="pt-3 text-center font-details-header pb-3">PORTFOLIO</h1>
      <Container>
        <Row className="d-flex flex-fill justify-content-center">
          <Card className="mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center card-title">
                Interactive Data Visualizations
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                I create interactive visualizations to guide stakeholders
                towards insights using their data. The below example shows a
                social network of organizations highlighted by their eigenvector
                centrality (a measure of connections to central or influential
                organizations). Click the below sociogram to start.
                <br />
                <br />
                Click, scroll, and zoom on the sociogram.
              </Card.Text>
              <Card className="mt-2 mb-2 iframeCard">
                <img
                  id="myImage"
                  src={VIS_THUMBNAIL}
                  alt="Load iframe"
                  style={{ width: "50%", margin: "auto" }}
                  onClick={() => {
                    const iframe = document.getElementById("myIframe");
                    const img = document.getElementById("myImage");
                    if (iframe && img) {
                      iframe.src =
                        "https://williambork.shinyapps.io/visNetwork_portfolio/";
                      img.style.display = "none";
                      iframe.style.display = "block";
                    }
                  }}
                />
                <iframe
                  id="myIframe"
                  width="100%"
                  height="800"
                  style={{ border: "none", display: "none" }}
                  title="Embedded Site"
                />
              </Card>
            </Card.Body>
          </Card>
          <Card className="mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center card-title">
                Social Network Analysis
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                I'm contracted by organizations for social network analysis
                (SNA). I research how information and resources move through
                networks of individuals and organizations. I conducted SNA for
                the International Joint Commission; an analysis of the
                institutions and individuals involved in conducting and/or
                funding Great Lakes science activity in Canada and the United
                States. Findings supported (1) strategic coordination and
                information sharing among Great Lakes science institutions and
                (2) communications, outreach, and engagement with the Great
                Lakes Science Plan.
                <br />
                <br />
                <Card.Link
                  href="https://ijc.org/en/great-lakes-science-plan-network-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about the project
                </Card.Link>
              </Card.Text>
              <Card className="mt-2 mb-2">
                <div>
                  <Card.Link
                    href="https://ijc.org/en/great-lakes-science-plan-network-analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="ijc_sna_screenshot justify-content-end"
                      alt="ijc_sna_screenshot"
                      src={IJC_SNA_Screenshot}
                      thumbnail
                      fluid
                    />
                  </Card.Link>
                </div>
              </Card>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center card-title">
                Recent Publications
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                I publish scholary research in two main research areas: (1)
                large-scale assessments in education and (2) social network
                analysis.
                <br />
                <br />
                Cycle through a few recent publications below:
                <br />
                <br />
              </Card.Text>
              <Carousel className="carousel-controls-pubs">
                <Carousel.Item className="carousel-item-pubs">
                  Piercey, V., Greene, A.L.L., Pabón, J.L., Aminian, M., Bales,
                  K., Busch, T.N., Baumunk, B., O'Brienhalla, J., Parker, B.A.,
                  Bork Rodriguez, W.N. (2026). Data Science and Genocide
                  Prevention. <i>La Matematica, 5</i>(3), Article 54. 1-29.{" "}
                  <a
                    href="https://doi.org/10.1007/s44007-026-00237-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.1007/s44007-026-00237-6
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://doi.org/10.1007/s44007-026-00237-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="SLIDE0 justify-content-end img-thumbnail-pubs"
                      alt="SLIDE0"
                      src={SLIDE0}
                      thumbnail
                      fluid
                    />
                  </a>
                  <br />
                  <br />
                </Carousel.Item>
                <Carousel.Item className="carousel-item-pubs">
                  Bork Rodriguez, W.N., Finnegan, R., & Por, H. (2025). How
                  lessons learned from NAEP 2022 during the COVID-19 pandemic
                  can improve remote online learning.{" "}
                  <i>Large-scale Assessments in Education, 13</i>(37), 1-34.{" "}
                  <a
                    href="https://doi.org/10.1186/s40536-025-00271-w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.1186/s40536-025-00271-w
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://doi.org/10.1186/s40536-025-00271-w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="SLIDE1 justify-content-end img-thumbnail-pubs"
                      alt="SLIDE1"
                      src={SLIDE1}
                      thumbnail
                      fluid
                    />
                  </a>
                  <br />
                  <br />
                </Carousel.Item>
                <Carousel.Item className="carousel-item-pubs">
                  Fischer, C., Witherspoon, E., Nguyen, H., Feng, Y., Fiorini,
                  S., Vincent-Ruz, P., Mead, C., Bork Rodriguez, W. N., Matz, R.
                  L., & Schunn, C. (2023). Advanced placement course credit and
                  undergraduate student success in gateway science courses.{" "}
                  <i>Journal of Research in Science Teaching, 60</i>
                  (2) 304–329.{" "}
                  <a
                    href="https://doi.org/10.1002/tea.21799"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.1002/tea.21799
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://doi.org/10.1002/tea.21799"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="SLIDE2 justify-content-end img-thumbnail-pubs"
                      alt="SLIDE2"
                      src={SLIDE2}
                      thumbnail
                      fluid
                    />
                  </a>
                  <br />
                  <br />
                </Carousel.Item>
                <Carousel.Item className="carousel-item-pubs">
                  Zhu, M.M., Alberts, K.M., Bork Rodriguez, W. N., & Wong, D.
                  (2023). Self-regulated learning and intercultural competence:
                  Examining the role of self-regulation in supporting preservice
                  teachers’ intercultural learning outcomes.{" "}
                  <i>Intercultural Education, 34</i>(5), 494-515.{" "}
                  <a
                    href="https://doi.org/10.1080/14675986.2023.2213655"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.1080/14675986.2023.2213655
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://doi.org/10.1080/14675986.2023.2213655"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="SLIDE3 justify-content-end img-thumbnail-pubs"
                      alt="SLIDE3"
                      src={SLIDE3}
                      thumbnail
                      fluid
                    />
                  </a>
                  <br />
                  <br />
                </Carousel.Item>
                <Carousel.Item className="carousel-item-pubs">
                  Bork Rodriguez, W.N. (2024).{" "}
                  <i>
                    Investigating Immigrant Student Academic Achievement on PISA
                    by Linking Additional Data on Origin Characteristics
                  </i>{" "}
                  [Doctoral dissertation, Michigan State University]. ProQuest
                  Dissertations Publishing.{" "}
                  <a
                    href="https://www.proquest.com/docview/2915820672"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.proquest.com/docview/2915820672
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://www.proquest.com/docview/2915820672"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="SLIDE4 justify-content-end img-thumbnail-pubs"
                      alt="SLIDE4"
                      src={SLIDE4}
                      thumbnail
                      fluid
                    />
                  </a>
                  <br />
                  <br />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
