import React, { useState } from 'react';
import './AboutWindow.css';
import { IconContext } from 'react-icons';
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";

function AboutWindow(props) {
    const [hover, setHover] = useState(false);
    const [dX, moveX] = useState(0);
    const [dY, moveY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});
    const [display, setDisplay] = useState({open: false, id: -1});
    const data = props.data;
    
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
        <div className="about-modal" style={styles} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
            <div className="about-handlebar">
            <div className="about-close" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={props.clickEvent}>
                <IconContext.Provider value={{ size: "1.3em" }} >
                    {hover? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
                </IconContext.Provider>
            </div>
            </div>
            <div className='about-contents' onMouseDown={(e) => e.stopPropagation()}>
                <div className='about-title'>
                    <h1>Welcome to my site!</h1>
                </div>
                <div className='about-body'>
                    <p>I'm in the process of rebuilding this website, so excuse the mess. <br /><br />
                        Feel free to poke around! <br /><br />
                        
                    </p>
                </div>
            </div>
            
            
        </div>
        </div>
      </>
  )
}

export default AboutWindow