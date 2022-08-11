import React, { useState } from "react";
import "./ProfileWindow.css";
import { IconContext } from "react-icons";
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";

function ProfileWindow(props) {
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
          className="profile-modal"
          style={styles}
          onMouseDown={_dragStart}
          onMouseMove={_dragging}
          onMouseUp={_dragEnd}
        >
          <div className="profile-handlebar">
            <div
              className="profile-close"
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
            className="profile-contents"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className='profile-left'>
              <div className='profile-pic-wrap' />
              <div className='profile-headers'>
                <h2 className='profile-name'>ryan tsai</h2>
                software engineer <br />
                cal poly slo co '23
              </div>
            </div>
            <div className='profile-right'>
              <div className='profile-body'>
                <h2>welcome to my page!</h2>
                <p>
                I chose software engineering in hopes of joining two of my passions— 
                bringing people together and staring at digital screens. 
                In my journey thus far I have broadened my experience and worldview, 
                brought engineering students of all backgrounds together, and (important!) 
                learned to code. 
                Now, I am looking to further utilize the skills that I have learned to make 
                a positive impact through the many applications of software engineering.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileWindow;
