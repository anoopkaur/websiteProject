let numberOfHighFives = 0;

function highFive() {
  numberOfHighFives = numberOfHighFives + 1;
  document.getElementById(
    "highFiveCount"
  ).innerText = `High five count: ${numberOfHighFives}`;
}
