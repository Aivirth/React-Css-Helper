import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

export default class AccordionItem extends Component {
  state = {
    isTabOpen: false
  };

  toggleTabState = () => {
    this.setState({
      isTabOpen: !this.state.isTabOpen
    });
  };

  render() {
    const { isTabOpen } = this.state;

    const indicator = isTabOpen ? faMinusSquare : faPlusSquare;

    return (
      <div className="Accordion__item">
        <div onClick={this.toggleTabState} className="Accordion__header ">
          Panel 1 <FontAwesomeIcon icon={indicator} />
        </div>
        <div className="Accordion__body">
          {isTabOpen ? (
            <div className="Accordion__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sequi placeat distinctio dolor, amet magnam
              voluptatibus eos ex vero, sunt veritatis esse. Nostrum voluptatum
              et repudiandae vel sed, explicabo in?
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
