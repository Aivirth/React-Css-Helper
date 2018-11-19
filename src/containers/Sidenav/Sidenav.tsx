import React from "react";
import classes from "./Sidenav.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";
import { Link } from "react-router-dom";

export default function Sidenav() {
  const {
    Sidenav,
    Sidenav__logo,
    Sidenav__item,
    Sidenav__nav,
    Sidenav__link
  } = classes;

  return (
    <div className={Sidenav} style={{ width: "350px" }}>
      <div className={Sidenav__logo}>LOGO</div>

      <ul className={Sidenav__nav}>
        <li className={Sidenav__item}>
          <a className={Sidenav__link}>Lorem</a>
        </li>
        <li className={Sidenav__item}>
          <a className={Sidenav__link}>Lorem</a>
        </li>
        <li className={Sidenav__item}>
          <a className={Sidenav__link}>Lorem</a>
        </li>
        <li className={Sidenav__item}>
          <a className={Sidenav__link}>Lorem</a>
        </li>
        <li className={Sidenav__item}>
          <a className={Sidenav__link}>Lorem</a>
        </li>
        <li className={Sidenav__item}>
          <a className={Sidenav__link}>Lorem</a>
        </li>
      </ul>
    </div>
  );
}
