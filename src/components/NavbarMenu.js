import React, { useState } from "react";
import AboutSiteWindow from "./AboutSiteWindow";
import AboutWindow from "./AboutWindow";
import FolderWindow from "./FolderWindow";
import MessageWindow from "./MessageWindow";
import ResumeWindow from "./ResumeWindow";

function NavbarMenu(props) {
  const [window, setWindow] = useState({ open: false, type: "" });

  const toggleWindow = (type) => {
    setWindow({ open: !window.open, type: type });
  };

  const activateWindow = () => {
    if (window.type === "aboutsite") {
      console.warn("aboutsite");
      return <AboutSiteWindow clickEvent={toggleWindow} />;
    } else if (window.type === "profile") {
      return <AboutWindow clickEvent={toggleWindow} />;
    } else if (window.type === "projects") {
      return <FolderWindow clickEvent={toggleWindow} />;
    } else if (window.type === "message") {
      return <MessageWindow clickEvent={toggleWindow} />;
    } else if (window.type === "resume") {
      return <ResumeWindow clickEvent={toggleWindow} />;
    } else {
      return <></>;
    }
  };

  return (
    <>
      {window.open ? activateWindow() : null}
      <div className="dropdown-container">
        <ul className="dropdown-list">
          <li
            className="dropdown-item"
            onClick={() => toggleWindow("aboutsite")}
          >
            about this website
          </li>
          <li className="dropdown-item" onClick={() => toggleWindow("profile")}>
            profile
          </li>
          <li
            className="dropdown-item"
            onClick={() => toggleWindow("projects")}
          >
            projects
          </li>
          <li className="dropdown-item" onClick={() => toggleWindow("message")}>
            message
          </li>
          <li className="dropdown-item" onClick={() => toggleWindow("resume")}>
            resume
          </li>
          <li className="dropdown-item">preferences</li>
        </ul>
      </div>
    </>
  );
}

export default NavbarMenu;
