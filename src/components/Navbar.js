import React from 'react';
import './Navbar.css';

function Navbar() {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const curr = new Date();
  let currHour = curr.getHours();
  let minute = curr.getMinutes();
  let hour = currHour % 12;

  if(hour == 0){hour = 12};
  
  const today = `${day[curr.getDay()]}  ${month[curr.getMonth()]} ${curr.getDate()} 
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