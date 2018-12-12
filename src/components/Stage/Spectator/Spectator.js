import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";

import { trimSpacesInTextArea } from "../../../helpers/helpers";

export default function Spectator(props) {
  let clipBoardIcon = <FontAwesomeIcon icon={faClipboardList} />;

  const textareaValue = trimSpacesInTextArea(props.styles);

  return (
    <div className="Stage__reveal__content">
      <textarea name="" id="" defaultValue={textareaValue} />
      <button>Copy to Clipboard {clipBoardIcon}</button>
    </div>
  );
}
