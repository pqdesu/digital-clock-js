let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("secs");

let currentTime = new Date();
console.log(currentTime);

console.log(currentTime.getHours());
console.log(currentTime.getMinutes());
console.log(currentTime.getSeconds());

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
