import React from "react";

export default function NavItem(props) {
  let { cssClasses } = props;

  if (!cssClasses) {
    cssClasses = "";
  }

  return <li className={`Navbar__item ${cssClasses}`}>{props.children}</li>;
}
