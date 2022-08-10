import React, { useState } from "react";
import "./ResumeWindow.css";
import { IconContext } from "react-icons";
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FiDownload } from 'react-icons/fi';
import { Document, Page } from "react-pdf";
import Resume from "../GalleryImages/resume.jpg";

function ResumeWindow(props) {
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
          className="resume-modal"
          style={styles}
          onMouseDown={_dragStart}
          onMouseMove={_dragging}
          onMouseUp={_dragEnd}
        >
          <div className="resume-handlebar">
            <div
              className="resume-close"
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
            className="resume-content"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <a className='resume-download' href={require('../data/Resume.pdf')} download='RyanTsai_Resume'>
              Download PDF
              <FiDownload />
            </a>
            <img src={Resume} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeWindow;
