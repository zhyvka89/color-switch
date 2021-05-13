const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

btnStartRef.addEventListener('click', onBtnStartClick);
btnStopRef.addEventListener('click', onBtnStopClick);

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

let intervalID = null;
const INTERVAL = 1000;

function onBtnStartClick() {
  intervalID = setInterval(() => {
    const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = colors[colorIndex];
    btnStartRef.setAttribute('disabled', '');
  }, INTERVAL);
}

function onBtnStopClick() {
  clearInterval(intervalID);
  btnStartRef.disabled = false;
}
