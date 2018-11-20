import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";
import { Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <div className="Sidenav">
      <ul className="Sidenav__nav">
        <li className="Sidenav__item">
          <a className="Sidenav__link">Lorem</a>
        </li>
        <li className="Sidenav__item">
          <a className="Sidenav__link Sidenav__link--active">Lorem</a>
        </li>
        <li className="Sidenav__item">
          <a className="Sidenav__link">Lorem</a>
        </li>
        <li className="Sidenav__item">
          <a className="Sidenav__link">Lorem</a>
        </li>
        <li className="Sidenav__item">
          <a className="Sidenav__link">Lorem</a>
        </li>
        <li className="Sidenav__item">
          <a className="Sidenav__link">Lorem</a>
        </li>
      </ul>
    </div>
  );
}
