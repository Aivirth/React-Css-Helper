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

    const { tabTitle, children } = this.props;

    return (
      <div className="Accordion__item">
        <div onClick={this.toggleTabState} className="Accordion__header ">
          {tabTitle} <FontAwesomeIcon icon={indicator} />
        </div>
        <div className="Accordion__body">
          {isTabOpen ? (
            <div className="Accordion__content">{children}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
