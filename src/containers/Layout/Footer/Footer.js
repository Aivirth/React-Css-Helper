import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__block Footer__infos">
        Author:{" "}
        <a
          className="Footer__link"
          href="https://github.com/Aivirth"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aivirth
        </a>{" "}
        2019 - IMT License
      </div>
      <div className="Footer__block Footer__actions">
        <a
          className="Footer__btn "
          href="https://github.com/Aivirth/React-Css-Helper"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fork me on Github <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}
