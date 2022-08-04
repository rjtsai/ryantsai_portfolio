import React from 'react';
import './Dock.css';
import DockItem from './DockItem';
import GalleryWindow from './GalleryWindow';

function Dock() {
  return (
    <>
        <div className="dock-container">
            <DockItem type="about" />
            <DockItem type="message" />
            <DockItem type="resume" />
        </div>
    </>
  )
}

export default Dock