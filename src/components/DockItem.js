import React from 'react';
import { useState } from 'react';
import './DockItem.css';
import { IconContext } from 'react-icons';
import { FaBeer } from "react-icons/fa";
import Modal from './Modal';

function DockItem(props) {
    const [openModal, setOpenModal] = useState(false);
    const Toggle = () => setOpenModal(!openModal);
  return (
    <>
    {openModal && <Modal id={props.id} clickEvent={Toggle}/>}
    <div className="dock-item" onClick={Toggle}>
        <IconContext.Provider value={{ size: "2em" }}>
            <FaBeer />
        </IconContext.Provider>
        <p className="dock-text">
            {props.text}
        </p>
    </div>
    </>
  )
}

export default DockItem