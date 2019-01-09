import React, { Component, Fragment } from "react";
import { NavLink as Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class Sidenav extends Component {
  state = {
    navLinks: [
      { url: "/base", anchor: "Base" },
      { url: "/borders", anchor: "Borders" },
      { url: "/border-radius", anchor: "Border Radius" },
      { url: "/box-shadow", anchor: "Box Shadow" }
    ],
    isOpen: false
  };

  toggleSidenavStatus = e => {
    e.preventDefault();
    if (window.matchMedia("only screen and (max-width: 56.25em)").matches) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };

  render() {
    const { navLinks, isOpen } = this.state;
    const togglerIcon = isOpen ? faTimes : faBars;
    const sidenavStatus = isOpen ? " Sidenav--open" : "";

    return (
      <div className={`Sidenav ${sidenavStatus}`}>
        <ul className="Sidenav__nav">
          {navLinks.map(navLink => (
            <li className="Sidenav__item" key={navLink.anchor}>
              <Link
                to={navLink.url}
                className="Sidenav__link"
                activeClassName="Sidenav__link--active"
              >
                {navLink.anchor}
              </Link>
            </li>
          ))}
        </ul>
        <div className="Sidenav__toggler" onClick={this.toggleSidenavStatus}>
          <FontAwesomeIcon icon={togglerIcon} />
        </div>
      </div>
    );
  }
}

export default Sidenav;
