import React from "react";
export default function Navbar(props) {
  let { cssClasses } = props;

  if (!cssClasses) {
    cssClasses = "";
  }

  return <ul className={`Navbar__list ${cssClasses}`}>{props.children}</ul>;
}
