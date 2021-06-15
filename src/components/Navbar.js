import React from "react";

import Container from "./Container";
import Nav from "./Nav";

import Profile from "../assets/img/profile.png";

export default function Navbar() {
  return (
    <Nav className="custom-nav">
      <Container className="h-100">
        <div className="profile d-flex align-items-center h-100">
          <img src={Profile} alt="profile" width="33" className="img-user" />
          <div className="d-flex flex-column justify-content-center">
            <span className="title">Good Morning</span>
            <span className="name">Fellas</span>
          </div>
        </div>
      </Container>
    </Nav>
  );
}
