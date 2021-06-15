import React from "react";
import Fade from "react-reveal/Fade";

import Section from "../../components/Section";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Button from "../../components/Button";

import Bg from "../../assets/img/bg.png";
import Astronot from "../../assets/img/astronot.png";

export default function Hero() {
  return (
    <Section className="hero">
      <img src={Bg} alt="Background" className="bg-hero" />
      <Container>
        <Row>
          <Col>
            <div className="desc d-flex flex-column align-items-center">
              <Fade bottom delay={500}>
                <h1 className="text-center">Weekend From Home</h1>
              </Fade>
              <Fade bottom delay={1000}>
                <p className="mt-1">Stay active with a little workout.</p>
              </Fade>
              <Fade bottom delay={1500}>
                <img
                  src={Astronot}
                  alt="Astronot"
                  width="184"
                  className="mt-5"
                />
              </Fade>
              <Fade bottom delay={2000}>
                <Button type="button" className="btn-go mt-1">
                  Let's Go
                </Button>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
