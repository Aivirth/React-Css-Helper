import React from "react";
import { NavLink as Link } from "react-router";

export default function Subnav(props) {
  const { pages } = props;

  let nav = null;

  if (pages) {
    nav = (
      <nav className="Subnav">
        <ul className="Subnav__list">
          {pages.map((page, index) => (
            <li className="Subnav__item" key={index}>
              <a className="Subnav__link" href="#!">
                Lorem
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  console.log(props);
  return nav;
}
