import React from 'react';
import { useState } from 'react';
import './HomeIcons.css';
import HomeIconItem from './HomeIconItem';

function HomeIcons() {

  return (
    <>
        <div className="homeicon-container">
          <HomeIconItem text="projects" />
          {/*
          <HomeIconItem text="text" />
          <HomeIconItem text="text" />
          <HomeIconItem text="text" />
          */}
        </div>
    </>
  )
}

export default HomeIcons