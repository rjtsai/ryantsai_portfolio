import React from "react";
import "./FolderWindowInfo.css";

function FolderWindowInfo(props) {

  const generateLink = () => {
    if(props.info.url !== 'N/A') {
      return (<a className="content-url" target="_blank" href={props.info.url}>{props.info.url} </a>);
    } else {
      return (<a className="content-url">{props.info.url} </a>);
    }
  }

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
            Project link: <br/>
            {generateLink()}
          </p>
        </div>
      </div>
    </>
  );
}

export default FolderWindowInfo;
