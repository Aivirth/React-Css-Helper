import React from "react";
import classes from "./Navbar.module.scss";

export default function Navbar(props: any) {
  return <ul className="Navbar__list">{props.children}</ul>;
}
