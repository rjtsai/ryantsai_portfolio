import React from 'react';
import './HomeIconItem.css';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { TiFolder, TiFolderOpen} from "react-icons/ti";
import FolderWindow from './FolderWindow';

function HomeIconItem(props) {
    const [hover, setHover] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const Toggle = () => setOpenModal(!openModal);
  return (
    <>
        {openModal && <FolderWindow id={props.id} clickEvent={Toggle}/>}
        <div className="homeicon-item" onClick={Toggle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <IconContext.Provider value={{ size: "4em" }}>
                {hover? <TiFolderOpen /> : <TiFolder />}
            </IconContext.Provider>
            <p className="homeicon-text">
                {props.text}
            </p>
        </div>
    </>
  )
}

export default HomeIconItem