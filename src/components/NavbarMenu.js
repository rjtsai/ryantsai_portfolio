import React, { useState } from "react";
import SettingsWindow from "./SettingsWindow";
import AboutWindow from "./AboutWindow";
import FolderWindow from "./FolderWindow";
import MessageWindow from "./MessageWindow";
import ResumeWindow from "./ResumeWindow";

function NavbarMenu(props) {
  const [window, setWindow] = useState({ open: false, type: "" });

  const toggleWindow = (type) => {
    setWindow({ open: !window.open, type: type });
    if (window.open) {
      props.clickEvent();
    }
  };

  const activateWindow = () => {
    if (window.type === "aboutsite") {
      console.warn("aboutsite");
      return <SettingsWindow clickEvent={toggleWindow} />;
    } else if (window.type === "profile") {
      return <AboutWindow clickEvent={toggleWindow} />;
    } else if (window.type === "projects") {
      return <FolderWindow clickEvent={toggleWindow} />;
    } else if (window.type === "message") {
      return <MessageWindow clickEvent={toggleWindow} />;
    } else if (window.type === "resume") {
      return <ResumeWindow clickEvent={toggleWindow} />;
    } else if (window.type === "settings") {
      return <SettingsWindow clickEvent={toggleWindow} />;
    } else {
      return <></>;
    }
  };

  return (
    <>
      {window.open ? activateWindow() : null}
      <div
        className={
          window.open ? "dropdown-container-close" : "dropdown-container-open"
        }
      >
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
          <li className="dropdown-item" onClick={() => toggleWindow("")}>
            projects
          </li>
          <li className="dropdown-item" onClick={() => toggleWindow("message")}>
            message
          </li>
          <li className="dropdown-item" onClick={() => toggleWindow("resume")}>
            resume
          </li>
          <li
            className="dropdown-item"
            onClick={() => toggleWindow("settings")}
          >
            settings
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarMenu;
