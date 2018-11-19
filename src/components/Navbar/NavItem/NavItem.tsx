import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavItem.module.scss";

export default function NavItem(props: any) {
  let { css }: { css: string } = props;

  if (!css) {
    css = "";
  }

  return <li className={[classes.NavItem, css].join(" ")}>{props.children}</li>;
}
