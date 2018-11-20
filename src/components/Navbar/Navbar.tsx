import React from "react";
export default function Navbar(props: any) {
  let { cssClasses }: { cssClasses: string | undefined } = props;

  if (!cssClasses) {
    cssClasses = "";
  }

  return <ul className={`Navbar__list ${cssClasses}`}>{props.children}</ul>;
}
