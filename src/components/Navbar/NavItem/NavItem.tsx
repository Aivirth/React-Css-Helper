import React from "react";
import { Link } from "react-router-dom";
import { string } from "prop-types";

export default function NavItem(props: any) {
  interface CssClasses {
    navItemCssClasses: string;
  }

  const { navItemCssClasses }: CssClasses = props;

  return <li className={navItemCssClasses}>{props.children}</li>;
}
