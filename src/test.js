function test() {
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
  let currHour = 1;
  let minute = 7;
  let hour = currHour % 12;
  if (hour == 0) {
    hour = 12;
  }
  const today = `${day[curr.getDay()]}  ${
    month[curr.getMonth()]
  } ${curr.getDate()} 
                     ${hour}:${minute < 10 ? `0${minute}` : minute} 
                     ${currHour >= 12 ? "PM" : "AM"}`;
  console.log(today);
}

test();
