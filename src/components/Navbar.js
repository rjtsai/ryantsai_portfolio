import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const curr = new Date();

  const [time, setTime] = useState(curr);
  useEffect(() => {
    setInterval(() => {
      setTime(curr)
    }, 60 * 1000);
  });

  let currHour = time.getHours();
  let minute = time.getMinutes();
  let hour = currHour % 12;

  if(hour == 0){hour = 12};

  const today = `${day[time.getDay()]}  ${month[time.getMonth()]} ${time.getDate()} 
                     ${hour}:${minute < 10?  `0${minute}`: minute} 
                     ${currHour >= 12 ? 'PM' : 'AM'}`;  
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
              <h1 className="navbar-name">
                Ryan Tsai
              </h1>
              <p className="navbar-timestamp">
                {today}
              </p>
            </div>
        </nav>
    </>
  )
}

export default Navbar