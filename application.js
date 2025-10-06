let hrs = document.getElementById("hrs"); // defined hrs to get the element on the html file by id
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function updateDigit(value, newValue) {
  // created function
  if (value.textContent !== newValue) {
    // conditional comparing 2 parameters
    value.classList.add("fade"); // addding the class .face to html tag
    setTimeout(() => {
      value.textContent = newValue; // if the value is the same
      value.classList.remove("fade"); // then remove .fade class
    }, 150); // every 150ms it updates
  }
}

setInterval(() => {
  // every set amount of time it updates
  let currentTime = new Date(); // defined currentTime to be the current date and time
  console.log(currentTime);

  let newHrs =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours(); // getting hours from currentTime and adding "0" if the number is a single digit
  let newMin =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes(); // getting minutes
  let newSec =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds(); // getting seconds

  updateDigit(hrs, newHrs);
  updateDigit(min, newMin);
  updateDigit(sec, newSec);
}, 1000); // 1000 miliseconds = 1 sec
