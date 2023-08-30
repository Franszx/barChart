const list = document.querySelector("ul");

const numSojler = 20;

const intervalTime = 1000;

const myArray = [];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateListItem(numCustomers) {
  const li = document.createElement("li");
  const randomHeight = (numCustomers / 100) * 100;
  const standardWidth = "50px";
  li.style.setProperty("--height", randomHeight);
  li.style.width = standardWidth;

  list.appendChild(li);

  if (list.children.length > numSojler) {
    list.removeChild(list.firstElementChild);
  }
}

function generateAndPush() {
  const numCustomers = generateRandomNumber(0, 100);
  myArray.push(numCustomers);
  generateListItem(numCustomers);
}
const intervalId = setInterval(generateAndPush, intervalTime);
