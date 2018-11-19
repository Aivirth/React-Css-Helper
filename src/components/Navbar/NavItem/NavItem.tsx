import React from "react";
import { Link } from "react-router-dom";

export default function NavItem(props: any) {
  return <li className="Navbar__item">{props.children}</li>;
}
