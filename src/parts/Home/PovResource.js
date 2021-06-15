import React from "react";
import Fade from "react-reveal/Fade";

import Section from "../../components/Section";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

export default function PovResource() {
  return (
    <Section className="pov-resource">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-8">
            <div className="pov">
              <Fade bottom delay={1250}>
                <h2 className="text-start text-md-center">POV</h2>
              </Fade>
              <Fade bottom delay={1500}>
                <p className="text-start text-md-center mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </Fade>
            </div>
            <div className="resource">
              <Fade bottom delay={1750}>
                <h2 className="text-start text-md-center">Resource</h2>
              </Fade>
              <Fade bottom delay={2000}>
                <p className="text-start text-md-center mt-3">
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prevents our being able to do what we like best.
                </p>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
