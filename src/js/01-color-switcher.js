const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let bgChange = null;

const colorChanger = () => {
  return (body.style.backgroundColor = `${getRandomHexColor()}`);
};

const colorStop = () => {
  clearInterval(bgChange);
  btnStart.disabled = false;
};

btnStart.addEventListener('click', () => {
  bgChange = setInterval(colorChanger, 1000);
  btnStart.disabled = true;
});

btnStop.addEventListener('click', colorStop);
