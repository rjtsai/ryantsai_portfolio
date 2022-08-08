import React, { useState } from "react";
import "./PreferencesWindow.css";
import { IconContext } from "react-icons";
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import {
  IoLogoAmplify,
  IoLogoGithub,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io5";
import { ImGit } from "react-icons/im";

function PreferencesWindow(props) {
  const [hover, setHover] = useState(false);
  const [dX, moveX] = useState(0);
  const [dY, moveY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState({});
  const [content, setContent] = useState("info");

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

  const changeContent = (type) => {
    setContent(type);
  };

  const displayContents = () => {
    if (content === "info") {
      return (
        <div
          className="preferences-contents"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="preferences-header">
            <h1 className="preferences-title">about this website</h1>
            <div className="icon-wrapper">
              <IconContext.Provider value={{ size: "2em" }}>
                <div className="preferences-icon">
                  <div className="icon-icon">
                    <IoLogoAmplify />
                  </div>
                  <p className="icon-title"> aws amplify </p>
                </div>
                <div className="preferences-icon">
                  <div className="icon-icon">
                    <ImGit />
                  </div>
                  <p className="icon-title"> git </p>
                </div>
                <div className="preferences-icon">
                  <div className="icon-icon">
                    <IoLogoReact />
                  </div>
                  <p className="icon-title"> react.js </p>
                </div>
                <div className="preferences-icon">
                  <div className="icon-icon">
                    <IoLogoHtml5 />
                  </div>
                  <p className="icon-title"> html5 </p>
                </div>
                <div className="preferences-icon">
                  <div className="icon-icon">
                    <IoLogoCss3 />
                  </div>
                  <p className="icon-title"> css </p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className="preferences-body">
            <p>
              Features: <br />
              - current time display <br />
              - message functionality <br />- draggable view windows (desktop
              only)
            </p>
          </div>
        </div>
      );
    } else if (content === "styles") {
      return (
        <div
          className="preferences-contents"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <h1 className="preferences-title">styles</h1>
          <div className="preferences-body">
            <p>
              Features to be added: <br />
              - change wallpaper <br />
              - modify font/icon sizes <br />- change to 24hr clock
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="modal-background">
        <div
          className="preferences-modal"
          style={styles}
          onMouseDown={_dragStart}
          onMouseMove={_dragging}
          onMouseUp={_dragEnd}
        >
          <div className="preferences-handlebar">
            <div
              className="preferences-close"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={props.clickEvent}
            >
              <IconContext.Provider value={{ size: "1.3em" }}>
                {hover ? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
              </IconContext.Provider>
            </div>
          </div>
          <div className="preferences-selector">
            <input
              type="button"
              value="site info"
              onClick={() => changeContent("info")}
            />

            <input
              type="button"
              value="styles"
              onClick={() => changeContent("styles")}
            />
          </div>
          {displayContents(content)}
        </div>
      </div>
    </>
  );
}

export default PreferencesWindow;
