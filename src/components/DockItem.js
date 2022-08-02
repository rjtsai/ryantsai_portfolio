import React from 'react';
import { useState } from 'react';
import './DockItem.css';
import { IconContext } from 'react-icons';
import { FaBeer } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrDocumentPdf } from "react-icons/gr";
import Modal from './Modal';
import AboutWindow from './AboutWindow';
import ResumeWindow from './ResumeWindow';

function DockItem(props) {
    const [openModal, setOpenModal] = useState(false);
    const Toggle = () => setOpenModal(!openModal);
    const Icon = () => {
      if(props.type === "about") {
        return (<CgProfile />);
      } else if (props.type === "resume") {
        return (<GrDocumentPdf />);
      } else {
        return (<FaBeer />);
      }
    }

    const Window = () => {
      if(props.type === "about") {
        return (<AboutWindow clickEvent={Toggle} />);
      } else if(props.type == "resume") {
        return (<ResumeWindow clickEvent={Toggle} />);
      } else {
        console.warn("default modal activated");
        return (<Modal id={props.id} clickEvent={Toggle} title={props.type}/>)
      }
    }
  return (
    <>
    {openModal && Window()}
    <div className="dock-item" onClick={Toggle}>
      <div className="dock-icon">
        <IconContext.Provider value={{ size: "2.5em" }}>
            {Icon()}
        </IconContext.Provider>
      </div>
        <p className="dock-text">
            {props.type}
        </p>
    </div>
    </>
  )
}

export default DockItem