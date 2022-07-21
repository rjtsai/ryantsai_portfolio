import React from 'react';
import { useState } from 'react';
import './HomeIcons.css';
import HomeIconItem from './HomeIconItem';

function HomeIcons() {
  const [hover, setHover] = useState(false);

  return (
    <>
        <div className="homeicon-container">
          <HomeIconItem text="projects" />
          <HomeIconItem text="experience" />
          <HomeIconItem text="text" />
          <HomeIconItem text="socials" />
        </div>
    </>
  )
}

export default HomeIcons