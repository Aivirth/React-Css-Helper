import React from "react";
import { NavLink as Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import NavItem from "../../components/Navbar/NavItem/NavItem";
import Save from "../../components/Memory/Save/Save";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Topnav() {
  return (
    <div className="Topnav">
      <div className="Topnav__nav">
        <div className="Topnav__title">React CSS Helper</div>
        <Navbar cssClasses="Topnav__list">
          <NavItem cssClasses="Topnav__item">
            <Link
              to="/manage"
              className="Topnav__link Topnav__action"
              activeClassName="Topnav__link--active"
            >
              <FontAwesomeIcon icon={faDatabase} />
            </Link>
          </NavItem>

          <NavItem cssClasses="Topnav__item">
            <Save cssClasses="Topnav__link Topnav__action" />
          </NavItem>
        </Navbar>
      </div>
    </div>
  );
}
