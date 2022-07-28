import React from 'react';
import './Dock.css';
import DockItem from './DockItem';
import GalleryWindow from './GalleryWindow';

function Dock() {
  return (
    <>
        <div className="dock-container">
            <DockItem type="about" />
            <DockItem type="text" />
            <DockItem type="gallery" />
        </div>
    </>
  )
}

export default Dock