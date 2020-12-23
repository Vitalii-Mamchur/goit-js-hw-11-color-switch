import css from './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
}

const colorСhanging = {
  intervalId: null,
  changingActiv: false,
  min: 0,
  max: colors.length - 1,

  start() {
    if (this.changingActiv) {
      return;
    }
    
    this.changingActiv = true;
    this.intervalId = setInterval(() => {
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const bgColor = colors[randomIntegerFromInterval(this.min, this.max)];
      refs.body.style.background = bgColor;
    }, 1000);
  },

  stop() { 
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.changingActiv = false;
  },
};

refs.startBtn.addEventListener('click', colorСhanging.start.bind(colorСhanging));
refs.stopBtn.addEventListener('click', colorСhanging.stop.bind(colorСhanging));