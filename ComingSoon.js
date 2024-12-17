// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".headline").innerHTML = "We Are Live!";
        document.querySelector(".subheadline").innerHTML = "Thank you for waiting!";
        document.querySelector(".countdown").style.display = "none";
    }
}, 1000);
