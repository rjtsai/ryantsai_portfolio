import React from "react";
import "./HomeIconItem.css";
import { useState } from "react";
import { IconContext } from "react-icons";
import { TiFolder, TiFolderOpen } from "react-icons/ti";
import FolderWindow from "./FolderWindow";
import Data from "../data/data.json";

function HomeIconItem(props) {
  const [hover, setHover] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const Toggle = () => setOpenModal(!openModal);
  var data = Data;

  if (props.text === "projects") {
    data = Data.projects;
  } else if (props.text === "experience") {
    data = Data.experience;
  }

  return (
    <>
      {openModal && (
        <FolderWindow
          data={data}
          id={props.id}
          clickEvent={Toggle}
          title={props.text}
        />
      )}
      <div
        className="homeicon-item"
        onClick={Toggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="homeicon-icon">
          <IconContext.Provider value={{ size: "4em" }}>
            {hover ? <TiFolderOpen /> : <TiFolder />}
          </IconContext.Provider>
        </div>
        <p className="homeicon-text">{props.text}</p>
      </div>
    </>
  );
}

export default HomeIconItem;
