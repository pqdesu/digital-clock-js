let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("secs");

let currentTime = new Date();
console.log(currentTime);

hrs = currentTime.getHours();
min = currentTime.getMinutes();
sec = currentTime.getSeconds();

console.log(hrs);
console.log(min);
console.log(sec);
