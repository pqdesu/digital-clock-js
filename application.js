let hrs = document.getElementById("hrs"); // defined hrs to get the element on the html file by id
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  // every set amount of time it updates
  let currentTime = new Date(); // defined currentTime to be the current date and time
  console.log(currentTime);

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours(); // getting hours from currentTime and adding "0" if the number is a single digit
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes(); // getting minutes
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds(); // getting seconds
}, 1000); // 1000 miliseconds = 1 sec
