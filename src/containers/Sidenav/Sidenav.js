import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";
import { NavLink as Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <div className="Sidenav">
      <ul className="Sidenav__nav">
        <li className="Sidenav__item">
          <Link
            to="/base"
            className="Sidenav__link"
            activeClassName="Sidenav__link--active"
          >
            Base
          </Link>
        </li>
        <li className="Sidenav__item">
          <Link
            to="/borders"
            className="Sidenav__link"
            activeClassName="Sidenav__link--active"
          >
            Borders
          </Link>
        </li>
        <li className="Sidenav__item">
          <Link
            to="/border-radius"
            className="Sidenav__link"
            activeClassName="Sidenav__link--active"
          >
            Border radius
          </Link>
        </li>
        <li className="Sidenav__item">
          <Link
            to="/box-shadow"
            className="Sidenav__link"
            activeClassName="Sidenav__link--active"
          >
            Box Shadow
          </Link>
        </li>
      </ul>
    </div>
  );
}
