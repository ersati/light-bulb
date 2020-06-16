const lightToggle = document.querySelector("#light-toggle");
const bulb = document.querySelector(".bulb");
const label = document.querySelector("label");

function toggleBulb() {
  bulb.classList.toggle("bulb--on");
}

lightToggle.addEventListener("click", toggleBulb);
