import React, { useState, useRef } from "react";
import "./MessageWindow.css";
import { IconContext } from "react-icons";
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { EmailForm } from "./EmailForm";

function AboutWindow(props) {
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
          className="message-modal"
          style={styles}
        >
          <div className="message-handlebar" onMouseDown={_dragStart}
          onMouseMove={_dragging}
          onMouseUp={_dragEnd}>
            <div
              className="message-close"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={props.clickEvent}
            >
              <IconContext.Provider value={{ size: "1.3em" }}>
                {hover ? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
              </IconContext.Provider>
            </div>
          </div>
          <p className="message-header">send me a message!</p>
          <EmailForm />
        </div>
      </div>
    </>
  );
}

export default AboutWindow;
