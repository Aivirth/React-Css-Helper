import React from "react";
import classes from "./Navbar.module.scss";
import NavItem from "./NavItem/NavItem";

export default function Navbar() {
  return (
    <ul className={classes.Navbar__nav}>
      <NavItem navItemCssClasses={classes.Navbar__item}>test1</NavItem>
      <NavItem navItemCssClasses={classes.Navbar__item}>test1</NavItem>
      <NavItem navItemCssClasses={classes.Navbar__item}>test1</NavItem>
    </ul>
  );
}
