import React from "react";
import classes from "./Navbar.module.scss";
import NavItem from "./NavItem/NavItem";

export default function Navbar() {
  return (
    <ul className={classes.Navbar__list}>
      <NavItem>test1</NavItem>
      <NavItem>test1</NavItem>
      <NavItem>test1</NavItem>
    </ul>
  );
}
