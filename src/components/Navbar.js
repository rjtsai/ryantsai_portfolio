import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IconContext } from "react-icons";
import {
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialFacebookCircular,
  TiSocialGithub,
  TiSocialFacebook,
} from "react-icons/ti";

function Navbar() {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const curr = new Date();

  const [time, setTime] = useState(curr);
  /*useEffect(() => {
    setInterval(() => {
      setTime(curr)
    }, 60 * 1000);
  });*/
  let currHour = time.getHours();
  let minute = time.getMinutes();
  let hour = currHour % 12;

  if (hour == 0) {
    hour = 12;
  }

  const currDay = `${day[time.getDay()]}  ${
    month[time.getMonth()]
  } ${time.getDate()}`;

  const currTime = `${hour}:${minute < 10 ? `0${minute}` : minute} 
                     ${currHour >= 12 ? "PM" : "AM"}`;
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <h1 className="navbar-name">Ryan Tsai</h1>
          </div>
          <div className="navbar-right">
            <div className="social-icons">
              <IconContext.Provider value={{ size: "1.5em", color: "black" }}>
                <div className="social-icon">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ryanj-tsai/"
                    aria-label="LinkedIn"
                  >
                    <TiSocialLinkedin />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    target="_blank"
                    href="https://github.com/rtblast70"
                    aria-label="Github"
                  >
                    <TiSocialGithub />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ryantsaii/"
                    aria-label="Instagram"
                  >
                    <TiSocialInstagram />
                  </a>
                </div>
                <div className="social-icon">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/ryan.tsai.792"
                    aria-label="Facebook"
                  >
                    <TiSocialFacebook />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
            <div className="navbar-timestamp">
              {currDay} &nbsp;
              <br class="mobile-break" />
              {currTime}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
