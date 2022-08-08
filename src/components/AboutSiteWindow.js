import React, { useState } from 'react';
import './AboutSiteWindow.css';
import { IconContext } from 'react-icons';
import { AiFillCloseCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoLogoAmplify, IoLogoGithub, IoLogoReact,  IoLogoHtml5, IoLogoCss3, } from 'react-icons/io5';
import { ImGit } from 'react-icons/im';

function AboutSiteWindow(props) {
    const [hover, setHover] = useState(false);
    const [dX, moveX] = useState(0);
    const [dY, moveY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({});
    const [display, setDisplay] = useState({ open: false, id: -1 });
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
      if (dragging) {
        var left = e.screenX - dX;
        var top = e.screenY - dY;
  
        setStyles({ left: left, top: top });
      }
    };
  
    return (
      <>
        <div className="modal-background">
          <div
            className="aboutsite-modal"
            style={styles}
            onMouseDown={_dragStart}
            onMouseMove={_dragging}
            onMouseUp={_dragEnd}
          >
            <div className="aboutsite-handlebar">
              <div
                className="aboutsite-close"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={props.clickEvent}
              >
                <IconContext.Provider value={{ size: "1.3em" }}>
                  {hover ? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
                </IconContext.Provider>
              </div>
            </div>
            <div
              className="aboutsite-contents"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="aboutsite-header">
                <h1 className='aboutsite-title'>about this website</h1>
                <div className='icon-wrapper'>
                    <IconContext.Provider value={{size: '2em'}}>
                        <div className='aboutsite-icon'>
                            <div className='icon-icon'>
                            <IoLogoAmplify />
                            </div>
                            <p className='icon-title'> aws amplify </p>
                        </div>
                        <div className='aboutsite-icon'>
                            <div className='icon-icon'>
                            <ImGit />
                            </div>
                            <p className='icon-title'> git </p>
                        </div>
                        <div className='aboutsite-icon'>
                            <div className='icon-icon'>
                            <IoLogoReact />
                            </div>
                            <p className='icon-title'> react.js </p>
                        </div>
                        <div className='aboutsite-icon'>
                            <div className='icon-icon'>
                            <IoLogoHtml5 />
                            </div>
                            <p className='icon-title'> html5 </p>
                        </div>
                        <div className='aboutsite-icon'>
                            <div className='icon-icon'>
                            <IoLogoCss3 />
                            </div>
                            <p className='icon-title'> css </p>
                        </div>
                    </IconContext.Provider>
                </div>
              </div>
              <div className="aboutsite-body">
                <p>
                  Features: <br />
                  - dropdown navbar menu for quick navigation <br />
                  - current time display <br />
                  - message functionality <br />
                  - draggable view windows 
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default AboutSiteWindow;