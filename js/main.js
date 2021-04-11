const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorsLength = colors.length-1;
const startBtn = document.querySelector('[data-action=start]');
const stopBtn = document.querySelector('[data-action=stop]');

let timeColor = null;
let switchBodyColor = false;

function switchColor() {
  const colorValue = randomIntegerFromInterval(0, colorsLength);
  document.body.style.backgroundColor = colors[colorValue];
};

function startClick() {
  if (switchBodyColor) {
    return;
  };
  switchBodyColor = true;
  timeColor = setInterval(switchColor, 500);
};

function stopClick() {
clearInterval(timeColor);
  switchBodyColor = false;
};

startBtn.addEventListener('click', startClick);
stopBtn.addEventListener('click', stopClick);