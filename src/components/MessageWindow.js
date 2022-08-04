import React, { useState } from "react";
import "./MessageWindow.css";
import { IconContext } from "react-icons";
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

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

  const handleSubmit = () => {
    toast("Sent!");
  };

  return (
    <>
      <div className="modal-background">
        <div
          className="message-modal"
          style={styles}
          onMouseDown={_dragStart}
          onMouseMove={_dragging}
          onMouseUp={_dragEnd}
        >
          <div className="handlebar">
            <div
              className="close"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={props.clickEvent}
            >
              <IconContext.Provider value={{ size: "1.3em" }}>
                {hover ? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
              </IconContext.Provider>
            </div>
          </div>
          <p className="message-header">send me a message! (testing)</p>
          <div
            className="modal-content"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="input-wrap">
              <div className="single-input">
                <input type="text" placeholder="subject:" />
              </div>
              <div className="single-input">
                <input type="email" placeholder="email address:" />
              </div>
              <div className="multi-input">
                <textarea type="paragraph" placeholder="message:" />
              </div>
            </div>
            <div className="button-wrap">
              <button className="send-button" onClick={handleSubmit}>
                send
              </button>
              <Toaster
                toastOptions={{
                  className: "",
                  style: {
                    border: "1px solid #713200",
                    padding: "9px",
                    marginTop: "2%",
                    color: "#713200",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutWindow;
