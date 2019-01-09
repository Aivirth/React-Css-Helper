import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default function Download(props) {
  // var data = { x: 42, s: "hello, world", d: new Date() },
  //     fileName = "my-download.json";

  const createJsonFile = (e, data, fileName) => {
    e.preventDefault();
    const a = document.createElement("a");
    a.style = "display: none; visibility: hidden;";
    document.body.appendChild(a);

    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "octet/stream" });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const { data, fileName } = props;

  return (
    <button
      className="Snapshots__btn Snapshots__btn--download"
      onClick={e => createJsonFile(e, data, fileName)}
    >
      <FontAwesomeIcon icon={faFileDownload} />
    </button>
  );
}
