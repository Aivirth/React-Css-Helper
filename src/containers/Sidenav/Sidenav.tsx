import React from "react";
import classes from "./Sidenav.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";

export default function Sidenav() {
  const { Sidenav: C } = classes;

  return (
    <div className={C}>
      <div className={`${C}__logo`}>LOGO</div>
      <Navbar className={`${C}__nav`} style={{ flexDirection: "column" }}>
        <NavItem>Lorem</NavItem>
        <NavItem>Lorem</NavItem>
        <NavItem>Lorem</NavItem>
        <NavItem>Lorem</NavItem>
      </Navbar>
    </div>
  );
}
