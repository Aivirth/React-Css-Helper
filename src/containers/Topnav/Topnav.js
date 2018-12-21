import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";

export default function Topnav() {
  return (
    <div className="Topnav">
      <div className="Topnav__nav">
        <div className="Topnav__title">React CSS Helper</div>
        <Navbar cssClasses="Topnav__list">
          <NavItem cssClasses="Topnav__item">
            <a className="Topnav__link">Lorem</a>
          </NavItem>
          <NavItem cssClasses="Topnav__item">
            <a className="Topnav__link">Lorem</a>
          </NavItem>
          <NavItem cssClasses="Topnav__item">
            <a className="Topnav__link">Lorem</a>
          </NavItem>
          <NavItem cssClasses="Topnav__item">
            <a className="Topnav__link">Lorem</a>
          </NavItem>
        </Navbar>
      </div>
    </div>
  );
}
