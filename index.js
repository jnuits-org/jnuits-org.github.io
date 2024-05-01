// for any event update  ***********************

// Set the date we're counting down to
var countDownDate = new Date("may 15, 2024 8:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML =`time left for dept tour = `;

  document.querySelector(".days").innerHTML = ` ${days} `;
  document.querySelector(".hours").innerHTML = ` ${hours} `;
  document.querySelector(".minutes").innerHTML = `${minutes} `;
  document.querySelector(".seconds").innerHTML = `${seconds} `;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timerHeadline").innerHTML =
      "Date over";
    document.querySelector(".notice").style.display =
      "none";
    document.querySelector(".timer").style.display = "none";
    
  }
}, 1000);
