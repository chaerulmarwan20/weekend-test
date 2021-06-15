import React from "react";

import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="d-flex align-items-center">
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <p>wknd@2020</p>
            <Button type="button" className="btn-alpha">
              alpha version 0.1
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
