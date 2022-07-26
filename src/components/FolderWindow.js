import React, { useState } from 'react';
import './FolderWindow.css';
import { IconContext } from 'react-icons';
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Cards from './Cards';
import FolderWindowInfo from './FolderWindowInfo';


function FolderWindow(props) {
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

    const toggleDisplay = (id) => {
        if(id === -1) {
            setDisplay({open: false, id: id});
        } else {
            setDisplay({open: true, id: id});
        }
    };

  return (
      <>
      
      <div className="modal-background" >
        <div className="modal" style={styles} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
            <div className="handlebar">
            <div className="close" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={props.clickEvent}>
                <IconContext.Provider value={{ size: "1.3em" }} >
                    {hover? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
                </IconContext.Provider>
            </div>
            <div className="nav-buttons" onClick={() => setDisplay({open: false, id: -1})}>
                <IconContext.Provider value={{ size: "1.4em", color: `${display.open? 'black' : 'silver'}`}} >
                    <IoIosArrowBack /> 
                </IconContext.Provider>
            </div>
            <div className="nav-buttons" >
                <IconContext.Provider value={{ size: "1.4em", color: `silver`}} >
                    <IoIosArrowForward /> 
                </IconContext.Provider>
            </div>
            
            </div>
            {display.open? <FolderWindowInfo info={data[display.id]}>{display.id}</FolderWindowInfo> : <Cards title={props.title} data={props.data} toggleDisplay={toggleDisplay} />}
            
            
        </div>
        </div>
      </>
  )
}

export default FolderWindow