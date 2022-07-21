import React, { useState } from 'react';
import './Modal.css';
import { IconContext } from 'react-icons';
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";


function Modal(props) {
    const [hover, setHover] = useState(false);
    const [dX, moveX] = useState(0);
    const [dY, moveY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});
    
    const _dragStart = (e) => {
        moveX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        moveY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setDragging(true);
    };

    const _dragEnd = () => {
        
        setDragging(false);
    };

    const _dragging = (e) => {
        if(dragging) {
        var left = e.screenX - dX;
        var top = e.screenY - dY;

        setStyles({left: left, top: top});
        }
    }

  return (
      <>
      <div className="modal-background" >
        <div className="modal" style={styles} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
            <div className="close" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={props.clickEvent}>
                <IconContext.Provider value={{ size: "1.8em" }} >
                    {hover? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
                </IconContext.Provider>
            </div>
            <div className="modal-title">
                Title
            </div>
            <div className="modal-subtitle">
                Subtitle
            </div>
            <div className="modal-body">
                Description
            </div>
            <a className="modal-url" target="_blank" href='/'>
                Link
            </a>
        </div>
        </div>
      </>
  )
}

export default Modal