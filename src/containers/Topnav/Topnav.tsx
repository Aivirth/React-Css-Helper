import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";
import classes from "./Topnav.module.scss";

export default function Topnav() {
  return (
    <div className={classes.Topnav}>
      <div className={classes.Topnav__nav}>
        <div className={classes.Topnav__title}>React CSS Helper</div>
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
