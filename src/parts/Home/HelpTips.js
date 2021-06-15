import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import axios from "axios";

import Section from "../../components/Section";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

import OvalIcon from "../../assets/img/oval-icon.png";
import Path from "../../assets/img/path.png";
import AstronotMedium from "../../assets/img/astronot-medium.png";

export default function HelpTips() {
  const Url = process.env.REACT_APP_API_URL;

  const [helpTips, setHelpTips] = useState([]);

  useEffect(() => {
    axios.get(`${Url}/help-tips`).then((res) => {
      setHelpTips(res.data);
    });
  }, [Url]);

  return (
    <Section className="help-tips">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-8">
            <Fade bottom delay={500}>
              <h2 className="text-start text-md-center">Help & Tips</h2>
            </Fade>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="col-11 d-flex flex-wrap justify-content-around info-wrapper">
            <img
              src={Path}
              alt="Path"
              width="159"
              className="path d-none d-lg-block"
            />
            {helpTips.map((item, index) => {
              return (
                <Fade bottom delay={index * 500}>
                  <div className="info mt-2 mt-xl-0" key={item.id}>
                    <img src={item.image} alt={item.title} width="311" />
                    <div className="detail w-100 pt-2 px-3 d-flex justify-content-between align-items-center">
                      <p className="title">{item.title}</p>
                      <Link to="#">
                        <img src={OvalIcon} alt="OvalIcon" width="32" />
                      </Link>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </Col>
        </Row>
        <Row className="justify-content-center set">
          <Col className="col-8">
            <Fade bottom delay={1000}>
              <h2 className="text-start text-md-center">You’re all set.</h2>
            </Fade>
            <Fade bottom delay={1500}>
              <p className="text-start text-md-center mt-3">
                The wise man therefore always holds in these matters to this
                principle of selection.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
      <img
        src={AstronotMedium}
        alt="AstronotMedium"
        width="244"
        className="astronot"
      />
    </Section>
  );
}
