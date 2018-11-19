import React from "react";
import { Link } from "react-router-dom";
import { string } from "prop-types";
import classes from "./NavItem.module.scss";

export default function NavItem(props: any) {
  return <li className={classes.NavItem}>{props.children}</li>;
}
