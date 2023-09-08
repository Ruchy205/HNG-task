// Function to get the UTC time in hours, minutes and seconds
function currentTime() {
    const now = new Date();
  
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
  
    const timeString = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} UTC`;
  
    document.getElementById("time").innerText = timeString;
  }
  
  //       Function to get the day of the week
  function getCurrentDay() {
    const now = new Date();
    //     gets day of the week as a number represenation
    const day = now.getUTCDay();
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    //     gets day of the week in word represenation
    const UTCDay = `${days[day]}`;
    document.getElementById("day").innerText = UTCDay;
  }
  
  function startGetTimeStamp() {
    setInterval(() => currentTime(), 1000);
    currentTime();
    getCurrentDay();
    setInterval(() => getCurrentDay(), 60000);
  }
  
  startGetTimeStamp();