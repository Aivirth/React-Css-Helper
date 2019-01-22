import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__block">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fuga quam
        veniam perferendis tenetur optio aspernatur quibusdam totam inventore
        suscipit magni vel,
      </div>
      <div className="Footer__block">
        <a
          className="Footer__btn "
          href="https://github.com/Aivirth/React-Css-Helper"
          target="_black"
        >
          Fork me on Github <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}
