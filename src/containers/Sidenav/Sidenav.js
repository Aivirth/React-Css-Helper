import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";
import { Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <div className="Sidenav">
      <ul className="Sidenav__nav">
        <li className="Sidenav__item">
          <Link to="/base" className="Sidenav__link">
            Base
          </Link>
        </li>
        <li className="Sidenav__item">
          <Link to="/borders" className="Sidenav__link Sidenav__link--active">
            Borders
          </Link>
        </li>
        <li className="Sidenav__item">
          <Link to="/border-radius" className="Sidenav__link">
            Border radius
          </Link>
        </li>
        <li className="Sidenav__item">
          <Link to="/box-shadow" className="Sidenav__link">
            Box Shadow
          </Link>
        </li>
      </ul>
    </div>
  );
}
