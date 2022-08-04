import React from "react";
import "./Dock.css";
import DockItem from "./DockItem";

function Dock() {
  return (
    <>
      <div className="dock-container">
        <DockItem type="about" />
        <DockItem type="message" />
        <DockItem type="resume" />
        <DockItem type="gallery" />
      </div>
    </>
  );
}

export default Dock;
