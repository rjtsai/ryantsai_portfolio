import React from "react";
import "./Dock.css";
import DockItem from "./DockItem";

function Dock() {
  return (
    <>
      <div className="dock-container">
        <DockItem type="profile" />
        <DockItem type="message" />
        <DockItem type="resume" />
        <DockItem type="preferences" />
      </div>
    </>
  );
}

export default Dock;
