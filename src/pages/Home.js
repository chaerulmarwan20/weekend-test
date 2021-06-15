import React from "react";

import "../assets/css/main.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../parts/Home/Hero";
import Desc from "../parts/Home/Desc";
import Testimonial from "../parts/Home/Testimonial";
import PovResource from "../parts/Home/PovResource";
import HelpTips from "../parts/Home/HelpTips";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Desc></Desc>
      <Testimonial></Testimonial>
      <PovResource></PovResource>
      <HelpTips></HelpTips>
      <Footer></Footer>
    </>
  );
}
