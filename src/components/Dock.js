import React from 'react';
import './Dock.css';
import DockItem from './DockItem';
import GalleryWindow from './GalleryWindow';

function Dock() {
  return (
    <>
        <div className="dock-container">
            <DockItem text="about" />
            <DockItem text="text" />
            <DockItem text="gallery" />
        </div>
    </>
  )
}

export default Dock