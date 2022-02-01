import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="react-logo" src={reactLogo}></img>
      <h3>ReactFacts</h3>
      <p className="blurb">React Course - Project 1</p>
    </nav>
  );
};