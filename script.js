// Countdown Timer Script
const countdown = () => {
  const targetDate = new Date("December 31, 2024 23:59:59").getTime();
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    document.getElementById("countdown").innerHTML = "We're Live!";
    return;
  }

  // Time calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};

// Call the countdown function every second
setInterval(countdown, 1000);
