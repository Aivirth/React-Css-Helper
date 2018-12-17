import React, { Component } from "react";
import AccordionItem from "./AccordionItem/AccordionItem";

export default class Accordion extends Component {
  render() {
    const { tabTitle } = this.props;
    return (
      <div className="Accordion">
        <AccordionItem />
        <AccordionItem />
      </div>
    );
  }
}
