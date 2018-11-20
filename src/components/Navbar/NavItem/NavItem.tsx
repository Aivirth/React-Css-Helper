import React from "react";

export default function NavItem(props: any) {
  let { cssClasses }: { cssClasses: string | undefined } = props;

  if (!cssClasses) {
    cssClasses = "";
  }

  return <li className={`Navbar__item ${cssClasses}`}>{props.children}</li>;
}
