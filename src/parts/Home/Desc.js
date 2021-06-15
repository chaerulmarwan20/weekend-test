import React from "react";
import Fade from "react-reveal/Fade";

import Section from "../../components/Section";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

import AstronotMini from "../../assets/img/astronot-mini.png";
import Oval from "../../assets/img/oval.png";

export default function Desc() {
  return (
    <Section className="desc">
      <img
        src={AstronotMini}
        alt="AstronotMini"
        width="159"
        className="astronot"
      />
      <Container>
        <Row className="justify-content-center">
          <Col className="col-8">
            <Fade bottom delay={2500}>
              <figure className="text-end mt-1">
                <blockquote className="blockquote">
                  <p>
                    <span>Deffinition;</span> a practice or exercise to test or
                    improve one's fitness for athletic competition, ability, or
                    performance to exhaust (something, such as a mine) by
                    working to devise, arrange, or achieve by resolving
                    difficulties. Merriam-Webster.com Dictionary.
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer mt-4">
                  <cite title="Source Title">weekend team</cite>
                </figcaption>
              </figure>
            </Fade>
          </Col>
        </Row>
      </Container>
      <img src={Oval} alt="Oval" width="89" className="oval" />
    </Section>
  );
}
