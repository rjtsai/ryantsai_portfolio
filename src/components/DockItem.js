import React from "react";
import { useState } from "react";
import "./DockItem.css";
import { IconContext } from "react-icons";
import { FaBeer } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrDocumentPdf, GrGallery } from "react-icons/gr";
import { TiMessages } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import Modal from "./Modal";
import AboutWindow from "./AboutWindow";
import ResumeWindow from "./ResumeWindow";
import MessageWindow from "./MessageWindow";
import SettingsWindow from "./SettingsWindow";

function DockItem(props) {
  const [openModal, setOpenModal] = useState(false);
  const [bounce, setBounce] = useState(false);
  const Toggle = () => {
    if(!openModal){
      setBounce(true);
    }
    setOpenModal(!openModal);
  };
  const Icon = () => {
    if (props.type === "profile") {
      return <CgProfile />;
    } else if (props.type === "resume") {
      return <GrDocumentPdf />;
    } else if (props.type === "message") {
      return <TiMessages />;
    } else if (props.type === "settings") {
      return <FiSettings />;
    } else {
      return <FaBeer />;
    }
  };

  const Window = () => {
    if (props.type === "profile") {
      return <AboutWindow clickEvent={Toggle} />;
    } else if (props.type == "resume") {
      return <ResumeWindow clickEvent={Toggle} />;
    } else if (props.type === "message") {
      return <MessageWindow clickEvent={Toggle} />;
    } else if (props.type === "settings") {
      return <SettingsWindow clickEvent={Toggle} />;
    } else {
      console.warn("default modal activated");
      return <Modal id={props.id} clickEvent={Toggle} title={props.type} />;
    }
  };
  return (
    <>
      {openModal && Window()}
      <div className="dock-item" onClick={Toggle}>
        <div className={bounce? "dock-icon-bounce" : "dock-icon"} onAnimationEnd={() => setBounce(false)}>
          <IconContext.Provider value={{ size: "2.5em" }}>
            {Icon()}
          </IconContext.Provider>
        </div>
        <p className="dock-text">{props.type}</p>
      </div>
    </>
  );
}

export default DockItem;
