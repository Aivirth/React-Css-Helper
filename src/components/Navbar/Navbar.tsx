import React from "react";
import classes from "./Navbar.module.scss";

export default function Navbar(props: any) {
  let { css }: { css: string } = props;

  if (!css) {
    css = "";
  }

  return (
    <ul className={[classes.Navbar__list, css].join(" ")}>{props.children}</ul>
  );
}
