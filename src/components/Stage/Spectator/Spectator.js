import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";

import { trimSpacesInTextArea } from "../../../helpers/helpers";

export default class Spectator extends Component {
  constructor(props) {
    super(props);
    this.textarea = React.createRef();
  }

  state = {
    clipBoardIcon: <FontAwesomeIcon icon={faClipboardList} />
  };

  copyToClipboard = e => {
    e.preventDefault();
    this.textarea.current.select();
    document.execCommand("copy");

    this.setState({
      clipBoardIcon: <FontAwesomeIcon icon={faClipboardCheck} />
    });
  };

  componentWillUnmount() {
    this.setState({
      clipBoardIcon: <FontAwesomeIcon icon={faClipboardList} />
    });
  }

  render() {
    const textareaValue = trimSpacesInTextArea(this.props.styles);

    return (
      <div className="Stage__reveal__content">
        <textarea
          name=""
          id=""
          defaultValue={textareaValue}
          ref={this.textarea}
        />
        <button
          className="Stage__copyToClipboard"
          onClick={this.copyToClipboard}
        >
          Copy to Clipboard{this.state.clipBoardIcon}
        </button>
      </div>
    );
  }
}
