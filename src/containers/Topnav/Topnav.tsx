import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";

export default function Topnav() {
  return (
    <div className="Topnav">
      <div className="Topnav__nav">
        <div className="Topnav__title">React CSS Helper</div>
        <Navbar>
          <NavItem>Lorem</NavItem>
          <NavItem>Lorem</NavItem>
          <NavItem>Lorem</NavItem>
          <NavItem>Lorem</NavItem>
        </Navbar>
      </div>
    </div>
  );
}
