import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Fade from "react-reveal/Fade";
import axios from "axios";

import Section from "../../components/Section";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

export default function Testimonial() {
  const Url = process.env.REACT_APP_API_URL;

  const [testimonial, setTestimonial] = useState([]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2.2 },
    { width: 768, itemsToShow: 2.2 },
    { width: 1200, itemsToShow: 2.2 },
  ];

  useEffect(() => {
    axios.get(`${Url}/testimonial`).then((res) => {
      setTestimonial(res.data);
    });
  }, [Url]);

  return (
    <Section className="testimonial">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-8">
            <Fade bottom delay={500}>
              <h2 className="text-start text-md-center">Testimonial</h2>
            </Fade>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-md-8">
            <Fade bottom delay={1000}>
              <Carousel
                className="carousel"
                pagination={false}
                breakPoints={breakPoints}
              >
                {testimonial.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="item-carousel">
                        <h3>{item.by}</h3>
                        <p className="mt-3">{item.testimony}</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
