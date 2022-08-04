import React from "react";
import "./FolderWindowInfo.css";

function FolderWindowInfo(props) {
  return (
    <>
      <div className="window-container">
        <div className="img-wrap">
          <img className="info-img" src={props.info.img} />
        </div>
        <div className="content-wrap">
          <h1 className="content-title">{props.info.title}</h1>
          <p className="content-description">{props.info.description}</p>
          <p className="content-tools">Tools: {props.info.tools}</p>
          <p className="content-description">
            {" "}
            Project link:
            <a className="content-url" target="_blank" href={props.info.url}>
              {props.info.url}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default FolderWindowInfo;
